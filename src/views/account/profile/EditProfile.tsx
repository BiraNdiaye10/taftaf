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
import { useTranslator } from '@taftaf/hooks/use-translator';
import { UserDocument, UserQuery, useUpdateUserMutation } from '@taftaf/graphql';
import { Field, Form, Formik } from 'formik';
import React, { Fragment } from 'react';
import { useValidators } from '@taftaf/hooks';

type EditProfileViewProps = UserQuery;
export const EditProfileView = (props: EditProfileViewProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();

    const [updateProfile, { loading }] = useUpdateUserMutation();

    const toast = useToast();

    const validators = useValidators();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const initialValues = {
        firstName: props?.user?.firstName,
        lastName: props?.user?.lastName,
        email: props?.user?.email,
        profession: props?.user?.profession,
        phoneNumber1: props?.user?.phoneNumber1,
        phoneNumber2: props?.user?.phoneNumber2,
        street: props?.user?.shippingAddress?.street,
        postalCode: props?.user?.shippingAddress?.postalCode,
        city: props?.user?.shippingAddress?.city,
        country: props?.user?.shippingAddress?.country,
        role: props?.user?.role,
    };

    const onSubmit = async (values: typeof initialValues) => {
        const response = await updateProfile({
            variables: { id: props?.user?.id, ...values },
            update: (store, { data: { updateUser } }) => {
                const data = store.readQuery<UserQuery>({
                    query: UserDocument,
                    variables: { id: props?.user.id },
                });

                console.log({ data, updateUser });
                store.writeQuery({
                    query: UserDocument,
                    variables: { id: props?.user?.id },
                    data: { user: { ...data.user, updateUser } },
                });
                /*
                
                const cachedProfile = store.readQuery<UserQuery>({
                    query: ProfileDocument,
                    variables: { userId: props?.user?.id },
                });
                
                store.writeQuery({
                    query: ProfileDocument,
                    variables: { userId: props?.user?.id },
                    data: {
                        profile: {
                            ...cachedProfile?.profile,
                            ...updateProfile,
                        },
                    },
                });
                */
            },
        });

        if (response.data) {
            toast({
                position: 'top-right',
                title: t('toasts.profile.update'),
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }
    };
    return (
        <Fragment>
            <Button onClick={onOpen} mt={{ base: 4, md: 0 }} w={{ base: '100%', md: 'initial' }}>
                {t('profile_button')}
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validators.account}
                    >
                        <Form>
                            <ModalHeader>{t('profile_edit_title')}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <VStack spacing={8}>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                                        <Field name="lastName">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.lastName &&
                                                        form.touched.lastName
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.last_name')}
                                                    </FormLabel>

                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder={t('input_fields.last_name')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.lastName}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="firstName">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.firstName &&
                                                        form.touched.firstName
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.first_name')}
                                                    </FormLabel>

                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder={t('input_fields.first_name')}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.firstName}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </SimpleGrid>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                                        <Field name="phoneNumber1">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.phoneNumber1 &&
                                                        form.touched.phoneNumber1
                                                    }
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.phone_number1')}
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        type="tel"
                                                        placeholder={t(
                                                            'input_fields.phone_number1'
                                                        )}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.phoneNumber1}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="phoneNumber2">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.phoneNumber2 &&
                                                        form.touched.phoneNumber2
                                                    }
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.phone_number2')}
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        type="tel"
                                                        placeholder={t(
                                                            'input_fields.phone_number2'
                                                        )}
                                                        _focus={{
                                                            boxShadow: '0 0 0 1px #38A169',
                                                            borderColor: 'green.500',
                                                        }}
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.phoneNumber2}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </SimpleGrid>

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

                                    <Field name="profession">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.profession &&
                                                    form.touched.profession
                                                }
                                            >
                                                <FormLabel>
                                                    {t('input_fields.profession')}
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder={t('input_fields.profession')}
                                                    _focus={{
                                                        boxShadow: '0 0 0 1px #38A169',
                                                        borderColor: 'green.500',
                                                    }}
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.profession}
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
                                                        type="text"
                                                        placeholder={t('input_fields.city')}
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
                                    {t('profile_edit_submit')}
                                </Button>
                                <Button onClick={onClose}>{t('profile_edit_cancel')}</Button>
                            </ModalFooter>
                        </Form>
                    </Formik>
                </ModalContent>
            </Modal>
        </Fragment>
    );
};
