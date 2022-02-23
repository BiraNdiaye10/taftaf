import NextLink from 'next/link';

import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
    Text,
    useToast,
} from '@chakra-ui/react';
import { Routes, SERVER_ERRORS } from '@taftaf/config';
import { Locale, useForgotPasswordMutation } from '@taftaf/graphql';
import { useTranslator, useValidators } from '@taftaf/hooks';
import { PageLayout } from '@taftaf/layouts';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

export const ForgotPasswordView = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const { locale } = useRouter();

    const [sendResetPasswordLink, { loading }] = useForgotPasswordMutation();

    const toast = useToast();

    const validators = useValidators();

    const initialValues = {
        email: '',
    };

    const onSubmit = async ({ email }: typeof initialValues) => {
        try {
            await sendResetPasswordLink({
                variables: {
                    locale: locale.toUpperCase() as Locale,
                    email: email.toLowerCase(),
                },
            });

            toast({
                title: t('toasts.forgot_password.success.title'),
                description: t('toasts.forgot_password.success.description'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });
        } catch (error) {
            if (error.message === SERVER_ERRORS.USER_NOT_FOUND) {
                toast({
                    title: t('toasts.forgot_password.error.title'),
                    description: t('toasts.forgot_password.error.description'),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        }
    };

    return (
        <PageLayout title={t('title')}>
            <Container maxW="container.xl">
                <VStack w="100%" mb={12}>
                    <Heading textAlign="center">{t('title')}</Heading>
                    <Text textAlign="center" w="lg" maxW="100%">
                        {t('subtitle')}.
                    </Text>
                </VStack>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validators.forgotPassword}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <Flex justify="center" w="100%" maxW="100%">
                            <Box
                                bg="white"
                                boxShadow="card"
                                p={8}
                                w="lg"
                                maxW="100%"
                                borderRadius="xl"
                            >
                                <VStack align="center" spacing={8} maxW="100%">
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

                                    <Button
                                        type="submit"
                                        variant="solid"
                                        colorScheme="green"
                                        width="100%"
                                        size="lg"
                                        isLoading={loading}
                                    >
                                        {t('buttons.send')}
                                    </Button>

                                    <NextLink href={Routes.login}>
                                        <Button
                                            variant="link"
                                            colorScheme="green"
                                            textAlign="center"
                                        >
                                            {t('login_cta')}
                                        </Button>
                                    </NextLink>
                                </VStack>
                            </Box>
                        </Flex>
                    </Form>
                </Formik>
            </Container>
        </PageLayout>
    );
};
