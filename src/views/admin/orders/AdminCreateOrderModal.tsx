import React, { Fragment } from 'react';
import {
    FormLabel,
    Input,
    Button,
    VStack,
    FormControl,
    FormErrorMessage,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalFooter,
    ModalCloseButton,
    ModalHeader,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import { useTranslator } from '@taftaf/hooks/use-translator';
import {
    OrdersDocument,
    OrdersQuery,
    useCreateOrderForCustomerMutation,
    useUsersQuery,
} from '@taftaf/graphql';
import { useValidators } from '@taftaf/hooks';
import { Autocomplete, Loader } from '@taftaf/components';

export const AdminCreateOrderModal = (): JSX.Element => {
    const firstField = React.useRef();
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const validators = useValidators();

    const [createOrderForCustomer, { loading }] = useCreateOrderForCustomerMutation();

    const { data, loading: isQueryingUsers } = useUsersQuery();

    const { translate: t } = useTranslator();

    const initialValues = {
        name: '',
        link: '',
        description: '',
        customer: '',
    };

    const onSubmit = async (values: typeof initialValues) => {
        const response = await createOrderForCustomer({
            variables: { ...values },
            update: (store, { data: { createOrderForCustomer } }) => {
                const data = store.readQuery<OrdersQuery>({
                    query: OrdersDocument,
                });

                console.log({ data, createOrderForCustomer });

                store.writeQuery({
                    query: OrdersDocument,
                    data: { orders: [...data.orders, createOrderForCustomer] },
                });
            },
        });

        if (response.data) {
            toast({
                title: t('toasts.order.create.title'),
                description: t('toasts.order.create.description'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });

            onClose();
        }
    };
    return (
        <Fragment>
            <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
                {t('button_text')}
            </Button>

            <Modal isOpen={isOpen} initialFocusRef={firstField} onClose={onClose} size="md">
                <ModalOverlay />
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validators.adminCreatePurchaseOrder}
                >
                    <Form noValidate>
                        <ModalContent>
                            <ModalHeader>{t('modal.order.create')}</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody>
                                {isQueryingUsers ? (
                                    <Loader />
                                ) : (
                                    <VStack spacing={5}>
                                        <Field name="name">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.name && form.touched.name
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.product_name')}
                                                    </FormLabel>

                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder={t('input_fields.product_name')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.name}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="link">
                                            {({ field }) => (
                                                <FormControl>
                                                    <FormLabel>
                                                        {t('input_fields.product_link')}
                                                    </FormLabel>

                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder={t('input_fields.product_link')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="description">
                                            {({ field }) => (
                                                <FormControl>
                                                    <FormLabel>
                                                        {t('input_fields.product_description')}
                                                    </FormLabel>

                                                    <Textarea
                                                        {...field}
                                                        type="text"
                                                        placeholder={t(
                                                            'input_fields.product_description'
                                                        )}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="customer">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.customer &&
                                                        form.touched.customer
                                                    }
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.customer')}
                                                    </FormLabel>
                                                    <Autocomplete
                                                        options={data?.users?.map(
                                                            ({
                                                                firstName,
                                                                lastName,
                                                                id,
                                                                customerId,
                                                            }) => ({
                                                                value: id,
                                                                label: `${firstName} ${lastName} - ${customerId}`,
                                                            })
                                                        )}
                                                        onChange={(data: {
                                                            value: string;
                                                            label: string;
                                                        }) => {
                                                            form.setFieldValue(
                                                                field.name,
                                                                data?.value
                                                            );
                                                        }}
                                                        w="100%"
                                                        maxW="100%"
                                                        isClearable
                                                        isLoading={isQueryingUsers}
                                                        placeholder={t(
                                                            'input_fields.select_placeholder'
                                                        )}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.customer}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </VStack>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    type="submit"
                                    colorScheme="green"
                                    mr={3}
                                    isLoading={loading}
                                >
                                    {t('buttons.send')}
                                </Button>
                                <Button onClick={onClose}>{t('buttons.cancel')}</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Form>
                </Formik>
            </Modal>
        </Fragment>
    );
};
