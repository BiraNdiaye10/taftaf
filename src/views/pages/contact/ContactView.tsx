import {
    Container,
    Heading,
    VStack,
    Flex,
    Text,
    Box,
    UnorderedList,
    ListItem,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
    Button,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useTranslator } from '@taftaf/hooks';
import { PageLayout } from '@taftaf/layouts';
import { Formik, Form, Field } from 'formik';
import React from 'react';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import NextImage from 'next/image';
import { SERVER_ERRORS } from '@taftaf/config';

export const ContactView = (): JSX.Element => {
    const toast = useToast();

    const { translate: t } = useTranslator();

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    };

    const onSubmit = async (values, actions) => {
        actions.setSubmitting(true);
        const { name, email, phoneNumber, message } = values;

        const body = {
            to: 'contact@taftaf.net', // Change to your recipient
            from: 'support@taftaf.net', // Change to your verified sender
            subject: `${name} - Contact`,
            html: `
                <p>
                    <ul>
                        <li><strong>Name</strong>: ${name}</li>
                        <li><strong>Phone number</strong>: ${phoneNumber ?? '---'}</li>
                        <li><strong>Email</strong>: ${email}</li>
                    </ul> </br>

                    ${message}
                </p>
            `,
        };

        const response = await fetch('api/contact', {
            method: 'POST',
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (data.msg === SERVER_ERRORS.SEND_EMAIL_SUCCESS) {
            actions.setSubmitting(false);

            toast({
                title: t('toasts.contact.success.title'),
                description: t('toasts.contact.success.description'),
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });
        } else {
            actions.setSubmitting(false);
            toast({
                title: t('toasts.contact.error.title'),
                description: t('toasts.contact.error.description'),
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            });
        }
    };

    return (
        <PageLayout title="Contact">
            <Container maxW="container.lg">
                <VStack spacing={12}>
                    <Heading size="2xl" textAlign="center">
                        {t('title')}
                    </Heading>
                    <Flex
                        w="100%"
                        flexDir={{ base: 'column', md: 'row' }}
                        justify={{ base: 'center' }}
                    >
                        <VStack
                            align={{ base: 'start', md: 'start' }}
                            w={{ base: 'full', md: 'sm' }}
                            mb={{ base: 12, md: 0 }}
                            maxW="100%"
                            spacing={6}
                        >
                            <VStack
                                align={{ base: 'center', md: 'start' }}
                                textAlign={{ base: 'center', md: 'left' }}
                                spacing={3}
                            >
                                <Box w="100%">
                                    <Box bg="gray.100" borderRadius="lg" w="45px" h="45px">
                                        <NextImage
                                            src="/images/icons/icon-map.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </Box>
                                </Box>
                                <Text> </Text>

                                <Box>
                                    <UnorderedList spacing={3} textAlign="left">
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_france')}:</b> 28
                                            Ter, Avenue de Versailles, <br /> 93220 GAGNY
                                        </ListItem>
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_senegal')}:</b>{' '}
                                            Avenue Bourguiba Amitié 1, en face du Parc DAKAR,
                                            SÉNÉGAL
                                        </ListItem>
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_guinea')}:</b>{' '}
                                            Station Métro Oil, Bambeto, Route le prince Conakry
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </VStack>
                            <VStack
                                align={{ base: 'center', md: 'start' }}
                                textAlign={{ base: 'center', md: 'left' }}
                                spacing={3}
                            >
                                <Box w="100%">
                                    <Box bg="gray.100" borderRadius="lg" w="45px" h="45px">
                                        <NextImage
                                            src="/images/icons/icon-call.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <UnorderedList spacing={1} textAlign="left">
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_france')}:</b>{' '}
                                            0033 607337387
                                        </ListItem>
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_senegal')}:</b>{' '}
                                            +221 77 712 05 05
                                        </ListItem>
                                        <ListItem>
                                            <b>{t('nav.footer.customer_service.tel_guinea')}:</b>{' '}
                                            +224 628 48 74 77
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </VStack>

                            <VStack
                                align={{ base: 'center', md: 'start' }}
                                textAlign={{ base: 'center', md: 'left' }}
                                spacing={3}
                            >
                                <Box w="100%">
                                    <Box bg="gray.100" borderRadius="lg" w="45px" h="45px">
                                        <NextImage
                                            src="/images/icons/icon-mail.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </Box>
                                </Box>

                                <Text>
                                    <Link href="mailto:contact@taftaf.net">contact@taftaf.net</Link>
                                </Text>
                            </VStack>
                        </VStack>

                        <Box boxShadow="card" w="2xl" maxW="100%" p={8} borderRadius="lg">
                            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                {(props) => (
                                    <Form>
                                        <VStack spacing={8}>
                                            <Field name="name">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.name && form.touched.name
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.fullname')}
                                                        </FormLabel>

                                                        <Input
                                                            {...field}
                                                            type="text"
                                                            placeholder={t('input_fields.fullname')}
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

                                            <Field name="email">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.email && form.touched.email
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>Email</FormLabel>

                                                        <Input
                                                            {...field}
                                                            type="email"
                                                            placeholder="Email"
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

                                            <Field name="phoneNumber">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.phoneNumber &&
                                                            form.touched.phoneNumber
                                                        }
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.phone_number')}
                                                        </FormLabel>

                                                        <Input
                                                            {...field}
                                                            type="tel"
                                                            placeholder={t(
                                                                'input_fields.phone_number'
                                                            )}
                                                            _focus={{
                                                                boxShadow: '0 0 0 1px #38A169',
                                                                borderColor: 'green.500',
                                                            }}
                                                        />
                                                        <FormErrorMessage>
                                                            {form.errors.phoneNumber}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="message">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.message &&
                                                            form.touched.message
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>Message</FormLabel>

                                                        <Textarea
                                                            {...field}
                                                            placeholder="Message"
                                                            _focus={{
                                                                boxShadow: '0 0 0 1px #38A169',
                                                                borderColor: 'green.500',
                                                            }}
                                                        />
                                                        <FormErrorMessage>
                                                            {form.errors.message}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Button
                                                type="submit"
                                                colorScheme="green"
                                                isLoading={props.isSubmitting}
                                            >
                                                {t('buttons.send')}
                                            </Button>
                                        </VStack>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Flex>
                </VStack>
            </Container>
        </PageLayout>
    );
};
