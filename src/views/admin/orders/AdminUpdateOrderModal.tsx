import { EditIcon } from '@chakra-ui/icons';
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    IconButton,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import { Autocomplete } from '@taftaf/components';
import {
    OrdersDocument,
    OrdersQuery,
    User,
    useUpdateOrderForCustomerMutation,
} from '@taftaf/graphql';
import { useValidators } from '@taftaf/hooks';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Field, Form, Formik } from 'formik';
import React from 'react';

type StoreUpdateOrderModalProps = {
    id: string;
    name: string;
    link: string;
    description: string;
    customer: Partial<User>;
};

export const AdminUpdateOrderModal = ({
    id,
    name,
    link,
    description,
    customer,
}: StoreUpdateOrderModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();
    const validators = useValidators();

    const [updateOrderForCustomer, { loading }] = useUpdateOrderForCustomerMutation();

    const { firstName, lastName, customerId } = customer;

    const toast = useToast();

    const initialRef = React.useRef();

    const initialValues = {
        name,
        link,
        description,
        customer: customer?.id,
    };

    const onSubmit = async (values: typeof initialValues) => {
        console.log({ values });

        const response = await updateOrderForCustomer({
            variables: { id, ...values },
            update: (store, { data: { updateOrderForCustomer } }) => {
                const data = store.readQuery<OrdersQuery>({
                    query: OrdersDocument,
                });

                const index = data.orders.findIndex(
                    (order) => order.id === updateOrderForCustomer.id
                );

                const orders = [...data.orders];

                orders.splice(index, 1, updateOrderForCustomer);

                store.writeQuery({
                    query: OrdersDocument,
                    data: { orders },
                });
            },
        });

        if (response.data) {
            toast({
                title: t('toasts.order.update'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });

            onClose();
        }
    };

    return (
        <>
            <IconButton
                aria-label="update single order"
                icon={<EditIcon />}
                size="sm"
                onClick={onOpen}
            />

            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validators.adminCreatePurchaseOrder}
                >
                    <Form noValidate>
                        <ModalContent>
                            <ModalHeader>{t('modal.order.update')}</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody>
                                <VStack spacing={5}>
                                    <Field name="name">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={form.errors.name && form.touched.name}
                                                isRequired
                                            >
                                                <FormLabel>
                                                    {t('input_fields.product_name')}
                                                </FormLabel>

                                                <Input
                                                    {...field}
                                                    ref={initialRef}
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
                                                    form.errors.customer && form.touched.customer
                                                }
                                            >
                                                <FormLabel>{t('input_fields.customer')}</FormLabel>
                                                <Autocomplete
                                                    {...field}
                                                    w="100%"
                                                    maxW="100%"
                                                    isClearable
                                                    isDisabled
                                                    value={{
                                                        value: customer?.id,
                                                        label: `${firstName} ${lastName} - ${customerId}`,
                                                    }}
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
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    type="submit"
                                    colorScheme="green"
                                    mr={3}
                                    isLoading={loading}
                                >
                                    {t('buttons.update')}
                                </Button>
                                <Button onClick={onClose}>{t('buttons.cancel')}</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};
