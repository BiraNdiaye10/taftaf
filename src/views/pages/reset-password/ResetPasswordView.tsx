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
    InputGroup,
    InputRightElement,
    IconButton,
    useToast,
} from '@chakra-ui/react';
import { Routes, SERVER_ERRORS } from '@taftaf/config';
import { useResetPasswordMutation } from '@taftaf/graphql';
import { useTranslator, useValidators } from '@taftaf/hooks';
import { PageLayout } from '@taftaf/layouts';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const ResetPasswordView = (): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const { query, push } = useRouter();

    const toast = useToast();

    const [resetPassword, { loading }] = useResetPasswordMutation();

    // const [userId, token] = query?.resetPasswordInfo as string[];
    const [userId, token] = (query.resetPasswordInfo as string[]) ?? [];

    console.log({ userId, token });
    const { translate: t } = useTranslator();

    const validators = useValidators();

    const initialValues = {
        password: '',
        confirmPassword: '',
    };

    const onSubmit = async (values: typeof initialValues) => {
        try {
            await resetPassword({
                variables: {
                    id: userId,
                    token,
                    ...values,
                },
            });

            toast({
                title: t('toasts.reset_password.success.title'),
                description: t('toasts.reset_password.success.description'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });

            push(Routes.login);
        } catch (error) {
            if (error.message === SERVER_ERRORS.USER_NOT_FOUND) {
                toast({
                    title: t('toasts.reset_password.error.title'),
                    description: t('toasts.reset_password.error.description'),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        }
    };

    return (
        <PageLayout title={t('reset_password.title')}>
            <Container maxW="container.xl">
                <VStack w="100%" mb={12}>
                    <Heading textAlign="center">{t('reset_password.title')}</Heading>
                    <Text textAlign="center" w="lg" maxW="100%">
                        {t('reset_password.subtitle')}
                    </Text>
                </VStack>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validators.resetPassword}
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
                                <VStack align="start" spacing={8} maxW="100%">
                                    <Field name="password">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.password && form.touched.password
                                                }
                                            >
                                                <Flex justify="space-between">
                                                    <FormLabel>
                                                        {t('input_fields.newPassword')}
                                                    </FormLabel>
                                                </Flex>

                                                <InputGroup>
                                                    <Input
                                                        {...field}
                                                        id="password"
                                                        pr="4.5rem"
                                                        type={show ? 'text' : 'password'}
                                                        placeholder={t('input_fields.newPassword')}
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

                                    <Field name="confirmPassword">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.confirmPassword &&
                                                    form.touched.confirmPassword
                                                }
                                            >
                                                <Flex justify="space-between">
                                                    <FormLabel>
                                                        {t('input_fields.confirmPassword')}
                                                    </FormLabel>
                                                </Flex>

                                                <InputGroup>
                                                    <Input
                                                        {...field}
                                                        id="confirmPassword"
                                                        pr="4.5rem"
                                                        type={show ? 'text' : 'password'}
                                                        placeholder={t(
                                                            'input_fields.confirmPassword'
                                                        )}
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
                                                    {form.errors.confirmPassword}
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
                                        {t('buttons.create')}
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
