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
    useToast,
    IconButton,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { Field, Formik, Form } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import { Locale, Role, useCreateUserMutation, UsersDocument, UsersQuery } from '@taftaf/graphql';
import { SERVER_ERRORS } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useRouter } from 'next/router';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { useValidators } from '@taftaf/hooks';

export const CreateUserView = (): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const firstField = React.useRef();

    const { translate: t } = useTranslator();

    const toast = useToast();

    const { locale } = useRouter();

    const [createUser, { loading }] = useCreateUserMutation();

    const validators = useValidators();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'CUSTOMER',
        phoneNumber1: '',
        phoneNumber2: '',
        street: '',
        postalCode: '',
        profession: '',
        city: '',
        country: '',
    };

    const onSubmit = async (values: typeof initialValues) => {
        const { postalCode, role, ...restValues } = values;

        const data = {
            locale: locale.toUpperCase() as Locale,
            postalCode,
            role: role as Role,
            ...restValues,
        };

        console.log({ data });

        try {
            const response = await createUser({
                variables: { ...data },
                update: (store, { data: { createUser } }) => {
                    const data = store.readQuery<UsersQuery>({
                        query: UsersDocument,
                    });

                    store.writeQuery({
                        query: UsersDocument,
                        data: {
                            users: [...data?.users, createUser],
                        },
                    });
                },
            });

            if (response.data) {
                toast({
                    position: 'top-right',
                    title: t('toasts.user.create'),
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            }
        } catch (error) {
            if (error.message === SERVER_ERRORS.USER_REGISTERED) {
                toast({
                    title: t('toasts.user.registered.title'),
                    description: t('toasts.user.registered.description'),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        }
    };

    return (
        <Fragment>
            <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
                {t('users_create_button')}
            </Button>
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
                        validationSchema={validators.createUser}
                        onSubmit={onSubmit}
                    >
                        <Form noValidate>
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader borderBottomWidth="1px">
                                    {t('users_create_button')}
                                </DrawerHeader>

                                <DrawerBody>
                                    <VStack spacing={8}>
                                        <SimpleGrid
                                            columns={{ base: 1, md: 2 }}
                                            spacing={8}
                                            w="100%"
                                        >
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
                                                            placeholder={t(
                                                                'input_fields.last_name'
                                                            )}
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
                                                            placeholder={t(
                                                                'input_fields.first_name'
                                                            )}
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

                                        <SimpleGrid
                                            columns={{ base: 1, md: 2 }}
                                            spacing={8}
                                            w="100%"
                                        >
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

                                        <Field name="email">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.email && form.touched.email
                                                    }
                                                >
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
                                                    <FormErrorMessage>
                                                        {form.errors.email}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="password">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.password &&
                                                        form.touched.password
                                                    }
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.password')}
                                                    </FormLabel>

                                                    <InputGroup>
                                                        <Input
                                                            {...field}
                                                            id="password"
                                                            pr="4.5rem"
                                                            type={show ? 'text' : 'password'}
                                                            placeholder={t('input_fields.password')}
                                                            _focus={{
                                                                boxShadow: '0 0 0 1px #38A169',
                                                                borderColor: 'green.500',
                                                            }}
                                                        />
                                                        <InputRightElement>
                                                            <IconButton
                                                                h="1.75rem"
                                                                size="sm"
                                                                onClick={handleClick}
                                                                aria-label="show password"
                                                                bg="transparent"
                                                                icon={
                                                                    show ? <HiEyeOff /> : <HiEye />
                                                                }
                                                                _hover={{ bg: 'transparent' }}
                                                                _focus={{ bg: 'transparent' }}
                                                                _active={{ bg: 'transparent' }}
                                                            />
                                                        </InputRightElement>
                                                    </InputGroup>
                                                    <FormErrorMessage>
                                                        {form.errors.password}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="street">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.street && form.touched.street
                                                    }
                                                >
                                                    <FormLabel>
                                                        {t('input_fields.address')}
                                                    </FormLabel>
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

                                        <SimpleGrid
                                            columns={{ base: 1, md: 2 }}
                                            spacing={8}
                                            w="100%"
                                        >
                                            <Field name="city">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.city && form.touched.city
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.city')}
                                                        </FormLabel>
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
                                                            form.errors.country &&
                                                            form.touched.country
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

                                        <Field name="role">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isRequired
                                                    isInvalid={
                                                        form.errors.role && form.touched.role
                                                    }
                                                >
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
                                                        <option value={Role.Customer}>
                                                            Customer
                                                        </option>
                                                    </Select>
                                                    <FormErrorMessage>
                                                        {form.errors.role}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </VStack>
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
