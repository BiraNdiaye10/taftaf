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
import { MeDocument, MeQuery, useUpdateOrderMutation } from '@taftaf/graphql';
import { useValidators } from '@taftaf/hooks';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Field, Form, Formik } from 'formik';
import React from 'react';

type StoreUpdateOrderModalProps = {
    id: string;
    name: string;
    link: string;
    description: string;
};

export const StoreUpdateOrderModal = ({
    id,
    name,
    link,
    description,
}: StoreUpdateOrderModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();
    const validators = useValidators();

    const [updateOrder, { loading }] = useUpdateOrderMutation();

    const toast = useToast();

    const initialRef = React.useRef();

    const initialValues = {
        name,
        link,
        description,
    };

    const onSubmit = async (values: typeof initialValues) => {
        const response = await updateOrder({
            variables: { id, ...values },
            update: (store, { data: { updateOrder } }) => {
                const user = store.readQuery<MeQuery>({
                    query: MeDocument,
                });

                const index = user.me.orders.findIndex((order) => order.id === updateOrder.id);

                const orders = [...user.me.orders];

                orders.splice(index, 1, updateOrder);
                const newUser = {
                    ...user.me,

                    orders,
                };

                store.writeQuery({
                    query: MeDocument,
                    data: { me: newUser },
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
                    validationSchema={validators.createPurchaseOrder}
                >
                    <Form noValidate>
                        <ModalContent>
                            <ModalHeader>{t('modal_update_title')}</ModalHeader>
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
