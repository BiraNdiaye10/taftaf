import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    FormControl,
    Input,
    FormErrorMessage,
    Button,
    VStack,
    Heading,
    Container,
    useToast,
    Flex,
    FormLabel,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import { Routes } from '@taftaf/config';
import { useValidators, useTranslator } from '@taftaf/hooks';
import { useLoginMutation } from '@taftaf/graphql';
import { PageLayout } from '@taftaf/layouts';

export const HomeLoginView = (): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [login, { loading }] = useLoginMutation();

    const { translate: t } = useTranslator();

    const validators = useValidators();

    const toast = useToast();

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = async ({ email, password }: typeof initialValues) => {
        try {
            const response = await login({
                variables: { email, password },
            });

            toast({
                title: t('toasts.login.success.title'),
                description: t('toasts.login.success.description'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });

            if (response.data.login.message === 'ACCESS_TOKEN_SET') {
                if (window) {
                    window.location.href = Routes.storePackages;
                }
            }
        } catch (error) {
            toast({
                title: t('toasts.login.error.title'),
                description: t('toasts.login.error.description'),
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });
        }
    };
    return (
        <PageLayout title={t('login.button_text')}>
            <Container maxW="container.xl">
                <VStack w="100%" mb={12}>
                    <Heading>{t('login.title')}</Heading>
                    <Text>
                        {t('login.subtitle')}{' '}
                        <NextLink href={Routes.inscription}>
                            <Button colorScheme="green" variant="link">
                                {t('login.link_text')}
                            </Button>
                        </NextLink>
                    </Text>
                </VStack>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validators.signIn}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <Flex justify="center">
                            <Box bg="white" boxShadow="card" w="lg" p={8} borderRadius="xl">
                                <VStack align="start" spacing={8} maxW="100%">
                                    <Field name="email">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={form.errors.email && form.touched.email}
                                            >
                                                <FormLabel>Email</FormLabel>

                                                <Input
                                                    {...field}
                                                    id="email"
                                                    type="email"
                                                    width="100%"
                                                    placeholder={t('login.input_fields.email')}
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
                                                isInvalid={
                                                    form.errors.password && form.touched.password
                                                }
                                            >
                                                <Flex justify="space-between">
                                                    <FormLabel>
                                                        {t('input_fields.password')}
                                                    </FormLabel>

                                                    <FormLabel>
                                                        <NextLink href={Routes.forgotPassword}>
                                                            <Button
                                                                colorScheme="green"
                                                                variant="link"
                                                            >
                                                                {t('login.forgot_password')}
                                                            </Button>
                                                        </NextLink>
                                                    </FormLabel>
                                                </Flex>

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
                                                            icon={show ? <HiEyeOff /> : <HiEye />}
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

                                    <Button
                                        type="submit"
                                        variant="solid"
                                        colorScheme="green"
                                        width="100%"
                                        size="lg"
                                        isLoading={loading}
                                    >
                                        {t('login.button_text')}
                                    </Button>
                                </VStack>
                            </Box>
                        </Flex>
                    </Form>
                </Formik>
            </Container>
        </PageLayout>
    );
};
