import React, { useState } from 'react';

import { Box, Flex, Heading, Icon, Tag, useToast, VStack } from '@chakra-ui/react';
import { SERVER_ERRORS } from '@taftaf/config';
import { Formik, Form } from 'formik';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ShowAddress } from './ShowAddress';
import { SignupForm } from './SignupForm';
import { FaBook, FaUserAlt, FaRegAddressCard } from 'react-icons/fa';
import { Locale, useCreateAccountMutation } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useRouter } from 'next/router';
import { useValidators } from '@taftaf/hooks';

export const Stepper = (): JSX.Element => {
    const [step, setStep] = useState(0);

    const validators = useValidators();

    const { translate } = useTranslator();
    const { locale } = useRouter();
    const [createAccount, { data, loading }] = useCreateAccountMutation();

    const { translate: t } = useTranslator();

    const toast = useToast();

    const initialValues = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber1: '',
        phoneNumber2: '',
        street: '',
        postalCode: '',
        profession: '',
        city: '',
        country: '',
    };

    const handleSubmit = async (values: typeof initialValues) => {
        try {
            const response = await createAccount({
                variables: {
                    locale: locale.toUpperCase() as Locale,
                    ...values,
                },
            });

            if (response.data) {
                setStep(step + 1);

                toast({
                    title: t('toasts.signup.success.title'),
                    description: t('toasts.signup.success.description'),
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        } catch (error) {
            if (error.message === SERVER_ERRORS.USER_REGISTERED) {
                toast({
                    title: t('toasts.signup.user_registered.title'),
                    description: t('toasts.signup.user_registered.description'),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            }
        }
    };

    const getBoxColor = (currentStep: number) => {
        // make show address automatically completed because there's no step further

        return step === currentStep && step < 2
            ? 'blue.500'
            : step > currentStep || step === 2
            ? 'green.500'
            : 'gray.500';
    };

    const getIconColor = (currentStep: number) => {
        // make show address automatically completed because there's no step further
        return step === currentStep && step < 2
            ? 'blue.50'
            : step > currentStep || step === 2
            ? 'green.50'
            : 'gray.50';
    };

    const getTagColorSchema = (currentStep: number) => {
        // make show address automatically completed because there's no step further
        return step === currentStep && step < 2
            ? 'blue'
            : step > currentStep || step === 2
            ? 'green'
            : 'gray';
    };

    const getTagText = (currentStep: number) => {
        // make show address automatically completed because there's no step further
        return step === currentStep && step < 2
            ? translate('signup_label2')
            : step > currentStep || step === 2
            ? translate('signup_label3')
            : translate('signup_label1');
    };

    return (
        <Box width="100%">
            <Flex justify="space-between" mb={20}>
                <Box flex="1">
                    <VStack align="center">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg={getBoxColor(0)}
                            p={4}
                            borderRadius="full"
                        >
                            <Icon as={FaBook} w="30px" h="30px" color={getIconColor(0)} />
                        </Box>
                        <Heading size="sm">{translate('signup_step1.subtitle')}</Heading>
                        <Heading size="md" textAlign="center">
                            {translate('signup_step1.title')}
                        </Heading>
                        <Tag colorScheme={getTagColorSchema(0)} size="lg">
                            {getTagText(0)}
                        </Tag>
                    </VStack>
                </Box>

                <Box flex="1">
                    <VStack align="center">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderColor="gray.500"
                            bg={getBoxColor(1)}
                            p={4}
                            borderRadius="full"
                        >
                            <Icon as={FaUserAlt} w="30px" h="30px" color={getIconColor(1)} />
                        </Box>
                        <Heading size="sm">{translate('signup_step2.subtitle')}</Heading>
                        <Heading size="md" textAlign="center">
                            {translate('signup_step2.title')}
                        </Heading>
                        <Tag colorScheme={getTagColorSchema(1)} size="lg">
                            {getTagText(1)}
                        </Tag>
                    </VStack>
                </Box>

                <Box flex="1">
                    <VStack>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderColor="gray.500"
                            bg={getBoxColor(2)}
                            p={4}
                            borderRadius="full"
                        >
                            <Icon as={FaRegAddressCard} w="30px" h="30px" color={getIconColor(2)} />
                        </Box>
                        <Heading size="sm">{translate('signup_step3.subtitle')}</Heading>
                        <Heading size="md" textAlign="center">
                            {translate('signup_step3.title')}
                        </Heading>
                        <Tag colorScheme={getTagColorSchema(2)} size="lg">
                            {getTagText(2)}
                        </Tag>
                    </VStack>
                </Box>
            </Flex>
            {/* <HStack>
                <Button onClick={() => setStep(step - 1)}>Prev</Button>
                <Button onClick={() => setStep(step + 1)}>Next</Button>
            </HStack> */}

            <Formik
                initialValues={initialValues}
                validationSchema={
                    step === 0 ? validators.signIn : step === 1 ? validators.account : null
                }
                onSubmit={async (values) => {
                    if (step === 1) {
                        return await handleSubmit(values);
                    } else {
                        setStep(step + 1);
                    }
                }}
            >
                <Form noValidate>
                    <Flex justify="center">
                        {step === 0 ? (
                            <SignupForm />
                        ) : step === 1 ? (
                            <PersonalInfoForm loading={loading} />
                        ) : (
                            <ShowAddress data={data} />
                        )}
                    </Flex>
                </Form>
            </Formik>
        </Box>
    );
};
