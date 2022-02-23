import React, { Fragment } from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    FormLabel,
    Input,
    Select,
    DrawerFooter,
    Button,
    VStack,
    FormControl,
    FormErrorMessage,
    SimpleGrid,
    useDisclosure,
    IconButton,
    useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { EditIcon } from '@chakra-ui/icons';
import { Role, useUpdateUserMutation, useUserQuery } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Loader } from '@taftaf/components';
import { useValidators } from '@taftaf/hooks';

type UpdateUserViewProps = {
    id: string;
};

export const UpdateUserView = ({ id }: UpdateUserViewProps): JSX.Element => {
    const firstField = React.useRef();

    const toast = useToast();

    const { translate: t } = useTranslator();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const validators = useValidators();

    const { data, loading: isFetchingUser } = useUserQuery({ variables: { id } });

    const [updateUser, { loading }] = useUpdateUserMutation();

    const initialValues = {
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        email: data?.user?.email,
        role: data?.user?.role,
        phoneNumber1: data?.user?.phoneNumber1,
        phoneNumber2: data?.user?.phoneNumber2,
        street: data?.user?.shippingAddress.street,
        postalCode: data?.user?.shippingAddress.postalCode,
        profession: data?.user?.profession,
        city: data?.user?.shippingAddress.city,
        country: data?.user?.shippingAddress.country,
    };

    return (
        <Fragment>
            <IconButton aria-label="update user" icon={<EditIcon />} size="sm" onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
                size="md"
            >
                <DrawerOverlay>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validators.updateUser}
                        onSubmit={async (values) => {
                            const { postalCode, ...restValues } = values;

                            try {
                                const response = await updateUser({
                                    variables: { id, postalCode, ...restValues },
                                });

                                if (response.data) {
                                    toast({
                                        position: 'top-right',
                                        title: t('toasts.user.update'),
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    });
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    >
                        <Form noValidate>
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader borderBottomWidth="1px">
                                    {t('modal.user.update')}
                                </DrawerHeader>

                                <DrawerBody>
                                    {isFetchingUser ? <Loader /> : <UpdateUserForm />}
                                </DrawerBody>
                                <DrawerFooter borderTopWidth="1px">
                                    <Button variant="outline" mr={3} onClick={onClose}>
                                        {t('buttons.cancel')}
                                    </Button>
                                    <Button colorScheme="green" type="submit" isLoading={loading}>
                                        Submit
                                    </Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Form>
                    </Formik>
                </DrawerOverlay>
            </Drawer>
        </Fragment>
    );
};

const UpdateUserForm = () => {
    const { translate: t } = useTranslator();
    return (
        <VStack spacing={8}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Field name="lastName">
                    {({ field, form }) => (
                        <FormControl
                            isInvalid={form.errors.lastName && form.touched.lastName}
                            isRequired
                        >
                            <FormLabel>{t('input_fields.last_name')}</FormLabel>

                            <Input
                                {...field}
                                type="text"
                                placeholder={t('input_fields.last_name')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                            />
                            <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>

                <Field name="firstName">
                    {({ field, form }) => (
                        <FormControl
                            isInvalid={form.errors.firstName && form.touched.firstName}
                            isRequired
                        >
                            <FormLabel>{t('input_fields.first_name')}</FormLabel>

                            <Input
                                {...field}
                                type="text"
                                placeholder={t('input_fields.first_name')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                            />
                            <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
            </SimpleGrid>

            <Field name="email">
                {({ field, form }) => (
                    <FormControl isRequired isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel>{t('input_fields.email')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={t('input_fields.email')}
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Field name="phoneNumber1">
                    {({ field, form }) => (
                        <FormControl
                            isRequired
                            isInvalid={form.errors.phoneNumber1 && form.touched.phoneNumber1}
                        >
                            <FormLabel>{t('input_fields.phone_number1')}</FormLabel>
                            <Input
                                {...field}
                                type="tel"
                                placeholder={t('input_fields.phone_number1')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                            />
                            <FormErrorMessage>{form.errors.phoneNumber1}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>

                <Field name="phoneNumber2">
                    {({ field, form }) => (
                        <FormControl
                            isInvalid={form.errors.phoneNumber2 && form.touched.phoneNumber2}
                        >
                            <FormLabel>{t('input_fields.phone_number2')}</FormLabel>
                            <Input
                                {...field}
                                type="tel"
                                placeholder={t('input_fields.phone_number2')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                            />
                            <FormErrorMessage>{form.errors.phoneNumber2}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
            </SimpleGrid>

            <Field name="street">
                {({ field, form }) => (
                    <FormControl isRequired isInvalid={form.errors.street && form.touched.street}>
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
                        <FormErrorMessage>{form.errors.street}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>

            <Field name="postalCode">
                {({ field, form }) => (
                    <FormControl
                        isRequired
                        isInvalid={form.errors.postalCode && form.touched.postalCode}
                    >
                        <FormLabel>{t('input_fields.postalCode')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={t('input_fields.postalCode')}
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        />
                        <FormErrorMessage>{form.errors.postalCode}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>

            <Field name="profession">
                {({ field, form }) => (
                    <FormControl isInvalid={form.errors.profession && form.touched.profession}>
                        <FormLabel>{t('input_fields.profession')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={t('input_fields.profession')}
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        />
                        <FormErrorMessage>{form.errors.profession}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Field name="city">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.city && form.touched.city} isRequired>
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
                            <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>

                <Field name="country">
                    {({ field, form }) => (
                        <FormControl
                            isInvalid={form.errors.country && form.touched.country}
                            isRequired
                        >
                            <FormLabel>{t('input_fields.country')}</FormLabel>
                            <Input
                                {...field}
                                type="text"
                                placeholder={t('input_fields.country')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                            />
                            <FormErrorMessage>{form.errors.country}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
            </SimpleGrid>

            <Field name="role">
                {({ field, form }) => (
                    <FormControl isRequired isInvalid={form.errors.role && form.touched.role}>
                        <FormLabel>{t('input_fields.role')}</FormLabel>
                        <Select
                            {...field}
                            name="role"
                            id="role"
                            size="lg"
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        >
                            <option value={Role.Admin}>Admin</option>
                            <option value={Role.Customer}>Customer</option>
                        </Select>
                        <FormErrorMessage>{form.errors.role}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>
        </VStack>
    );
};
