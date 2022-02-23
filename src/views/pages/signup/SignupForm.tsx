import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    FormControl,
    Input,
    FormErrorMessage,
    Button,
    VStack,
    FormLabel,
    IconButton,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { Routes } from '@taftaf/config';

export const SignupForm = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Box bg="white" boxShadow="card" w="lg" maxW="100%" p={8} borderRadius="xl">
            {/*
             * Social auth block
             ******************************************************/}
            {/* <VStack align="start" spacing={10}>
                <Heading as="h3" color="gray.700" size="md">
                    {translate('signup_step1.card_title1')}:
                </Heading>
                <HStack spacing={5} justifyContent="start" maxW="100%">
                    <Button
                        bg="white"
                        boxShadow="card"
                        leftIcon={<FaFacebookF />}
                        size="lg"
                        borderRadius="xl"
                    >
                        Facebook
                    </Button>
                    <Button
                        bg="white"
                        boxShadow="card"
                        leftIcon={<FcGoogle />}
                        size="lg"
                        borderRadius="xl"
                    >
                        Google
                    </Button>
                </HStack>
            </VStack> 
            

            <Divider my={8} />

            */}
            <VStack align="start" spacing={6}>
                <Field name="email">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <FormLabel>Email</FormLabel>

                            <Input
                                {...field}
                                type="email"
                                width="100%"
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

                <Field name="password">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                            <FormLabel>{t('input_fields.password')}</FormLabel>

                            <InputGroup>
                                <Input
                                    {...field}
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
                                    {/* {show ? 'Hide' : 'Show'}
                                                            </Button> */}
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Button type="submit" variant="solid" colorScheme="green" width="100%" size="lg">
                    {t('signup_step1.card_button')}
                </Button>
                <Text>
                    {t('login_cta.text1')}{' '}
                    <NextLink href={Routes.login}>
                        <Button variant="link" colorScheme="green">
                            {t('login_cta.text2')}
                        </Button>
                    </NextLink>
                </Text>
            </VStack>
        </Box>
    );
};
