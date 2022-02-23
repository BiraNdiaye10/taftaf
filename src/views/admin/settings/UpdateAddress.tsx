import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    useDisclosure,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { useUpdateAddressMutation, AddressQuery, AddressDocument } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks';
import { Field, Form, Formik } from 'formik';
import React, { Fragment } from 'react';

type UpdateAddressProps = AddressQuery;
export const UpdateAddress = (props: UpdateAddressProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();
    const [updateAddress, { loading }] = useUpdateAddressMutation();
    const toast = useToast();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const initialValues = {
        street: props.address?.street,
        postalCode: props.address?.postalCode,
        city: props.address?.city,
        country: props.address?.country,
    };

    const onSubmit = async (values: typeof initialValues) => {
        try {
            const response = await updateAddress({
                variables: {
                    id: props.address?.id,
                    ...values,
                },

                update: (store, { data: { updateAddress } }) => {
                    const data = store.readQuery<AddressQuery>({
                        query: AddressDocument,
                        variables: { id: props.address.id },
                    });

                    store.writeQuery({
                        query: AddressDocument,
                        variables: { id: props.address?.id },
                        data: {
                            onlineAddress: {
                                ...data?.address,
                                updateAddress,
                            },
                        },
                    });
                },
            });

            if (response.data) {
                toast({
                    position: 'top-right',
                    title: 'Address updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log({ error, message: error.message });
        }
    };
    return (
        <Fragment>
            <Button onClick={onOpen}>{t('buttons.update')}</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form>
                            <ModalHeader>{t('modal.settings.update')}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <VStack spacing={8}>
                                    <Field name="street">
                                        {({ field, form }) => (
                                            <FormControl
                                                isRequired
                                                isInvalid={
                                                    form.errors.street && form.touched.street
                                                }
                                            >
                                                <FormLabel>{t('input_fields.address')}</FormLabel>
                                                <Input
                                                    {...field}
                                                    size="lg"
                                                    type="text"
                                                    placeholder={t('input_fields.address')}
                                                    _focus={{
                                                        boxShadow: '0 0 0 1px #38A169',
                                                        borderColor: 'green.500',
                                                    }}
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.street}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="postalCode">
                                        {({ field, form }) => (
                                            <FormControl
                                                isRequired
                                                isInvalid={
                                                    form.errors.postalCode &&
                                                    form.touched.postalCode
                                                }
                                            >
                                                <FormLabel>
                                                    {t('input_fields.postalCode')}
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    size="lg"
                                                    type="text"
                                                    placeholder={t('input_fields.postalCode')}
                                                    _focus={{
                                                        boxShadow: '0 0 0 1px #38A169',
                                                        borderColor: 'green.500',
                                                    }}
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.postalCode}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                                        <Field name="city">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.city && form.touched.city
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel>{t('input_fields.city')}</FormLabel>
                                                    <Input
                                                        {...field}
                                                        size="lg"
                                                        type="text"
                                                        placeholder={t('input_fiels.city')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.city}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="country">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.country && form.touched.country
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.country')}
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        size="lg"
                                                        type="text"
                                                        placeholder={t('input_fields.country')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.country}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </SimpleGrid>
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
                        </Form>
                    </Formik>
                </ModalContent>
            </Modal>
        </Fragment>
    );
};
