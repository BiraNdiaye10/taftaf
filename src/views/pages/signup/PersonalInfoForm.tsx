import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    SimpleGrid,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { useTranslator } from '@taftaf/hooks/use-translator';

type PersonalInfoFormProps = {
    loading: boolean;
};

export const PersonalInfoForm = ({ loading }: PersonalInfoFormProps): JSX.Element => {
    const { translate } = useTranslator();

    return (
        <Box borderRadius="xl" boxShadow="card" p={{ base: 6, md: 8 }} w="lg" maxW="100%">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
                <Field name="lastName">
                    {({ field, form }) => (
                        <FormControl
                            isInvalid={form.errors.lastName && form.touched.lastName}
                            isRequired
                        >
                            <FormLabel>{translate('input_fields.last_name')}</FormLabel>

                            <Input
                                {...field}
                                type="text"
                                placeholder={translate('input_fields.last_name')}
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
                            <FormLabel>{translate('input_fields.first_name')}</FormLabel>

                            <Input
                                {...field}
                                type="text"
                                placeholder={translate('input_fields.first_name')}
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

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
                <Field name="phoneNumber1">
                    {({ field, form }) => (
                        <FormControl
                            isRequired
                            isInvalid={form.errors.phoneNumber1 && form.touched.phoneNumber1}
                        >
                            <FormLabel>{translate('input_fields.phone_number1')}</FormLabel>
                            <Input
                                {...field}
                                type="tel"
                                placeholder={translate('input_fields.phone_number1')}
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
                            <FormLabel>{translate('input_fields.phone_number2')}</FormLabel>
                            <Input
                                {...field}
                                type="tel"
                                placeholder={translate('input_fields.phone_number2')}
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

            <Field name="profession">
                {({ field, form }) => (
                    <FormControl
                        mb={8}
                        isInvalid={form.errors.profession && form.touched.profession}
                    >
                        <FormLabel>{translate('input_fields.profession')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={translate('input_fields.profession')}
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        />
                        <FormErrorMessage>{form.errors.profession}</FormErrorMessage>
                    </FormControl>
                )}
            </Field>

            <Field name="street">
                {({ field, form }) => (
                    <FormControl
                        mb={8}
                        isRequired
                        isInvalid={form.errors.street && form.touched.street}
                    >
                        <FormLabel>{translate('input_fields.address')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={translate('input_fields.address')}
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
                {({ field }) => (
                    <FormControl mb={8}>
                        <FormLabel>{translate('input_fields.postalCode')}</FormLabel>
                        <Input
                            {...field}
                            type="text"
                            placeholder={translate('input_fields.postalCode')}
                            _focus={{
                                boxShadow: '0 0 0 1px #38A169',
                                borderColor: 'green.500',
                            }}
                        />
                    </FormControl>
                )}
            </Field>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Field name="city">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.city && form.touched.city} isRequired>
                            <FormLabel>{translate('input_fields.city')}</FormLabel>
                            <Input
                                {...field}
                                type="text"
                                placeholder={translate('input_fields.city')}
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
                            <FormLabel>{translate('input_fields.country')}</FormLabel>
                            <Input
                                {...field}
                                type="text"
                                placeholder={translate('input_fields.country')}
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

            <Button
                isLoading={loading}
                w="100%"
                type="submit"
                variant="solid"
                colorScheme="green"
                mt={8}
            >
                {translate('signup_step2.card_button')}
            </Button>
        </Box>
    );
};
