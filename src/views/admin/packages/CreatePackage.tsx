import React, { Fragment, useState } from 'react';
import {
    FormLabel,
    Input,
    Button,
    VStack,
    FormControl,
    FormErrorMessage,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Select,
    useToast,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    HStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import {
    ParcelsDocument,
    ParcelsQuery,
    Status,
    Unit,
    useCreateParcelMutation,
    useUsersQuery,
} from '@taftaf/graphql';
import { Autocomplete, Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useValidators } from '@taftaf/hooks';

export const CreatePackageView = (): JSX.Element => {
    const firstField = React.useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const validators = useValidators();

    const [createParcel, { loading }] = useCreateParcelMutation();

    const { translate: t } = useTranslator();

    const { data, loading: isQueryingUsers } = useUsersQuery();

    const toast = useToast();

    const initialValues = {
        name: '',
        origin: '',
        weight: 1,
        customer: '',
        status: Status.Received,
    };

    const [unit, setUnit] = useState({
        label: 'g',
        value: Unit.G as Unit,
    });

    const onSubmit = async (values: typeof initialValues) => {
        const { status, ...restValues } = values;

        const response = await createParcel({
            variables: {
                status,
                unit: unit.value,
                ...restValues,
            },

            update: (store, { data: { createParcel } }) => {
                const data = store.readQuery<ParcelsQuery>({
                    query: ParcelsDocument,
                });

                store.writeQuery({
                    query: ParcelsDocument,
                    data: {
                        parcels: [...data?.parcels, createParcel],
                    },
                });
            },
        });

        if (response.data) {
            toast({
                position: 'top-right',
                title: t('toasts.parcel.create'),
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <Fragment>
            <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
                {t('create_text_text')}
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
                        onSubmit={onSubmit}
                        validationSchema={validators.createParcel}
                    >
                        <Form noValidate>
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader borderBottomWidth="1px">
                                    {t('modal.parcel.create')}
                                </DrawerHeader>

                                <DrawerBody>
                                    {isQueryingUsers ? (
                                        <Loader />
                                    ) : (
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
                                                            {t('input_fields.product_name')}
                                                        </FormLabel>

                                                        <Input
                                                            {...field}
                                                            size="lg"
                                                            type="text"
                                                            placeholder={t(
                                                                'input_fields.product_name'
                                                            )}
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

                                            <Field name="origin">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.origin &&
                                                            form.touched.origin
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.origin')}
                                                        </FormLabel>

                                                        <Input
                                                            {...field}
                                                            size="lg"
                                                            type="text"
                                                            placeholder={t('input_fields.origin')}
                                                            _focus={{
                                                                boxShadow: '0 0 0 1px #38A169',
                                                                borderColor: 'green.500',
                                                            }}
                                                        />
                                                        <FormErrorMessage>
                                                            {form.errors.origin}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="weight">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors.weight &&
                                                            form.touched.weight
                                                        }
                                                        isRequired
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.weight')}
                                                        </FormLabel>

                                                        <HStack align="center">
                                                            <NumberInput
                                                                onChange={(val) =>
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        +val
                                                                    )
                                                                }
                                                                size="lg"
                                                                defaultValue={1}
                                                                w="60%"
                                                            >
                                                                <NumberInputField
                                                                    _focus={{
                                                                        boxShadow:
                                                                            '0 0 0 1px #38A169',
                                                                        borderColor: 'green.500',
                                                                    }}
                                                                />
                                                                <NumberInputStepper>
                                                                    <NumberIncrementStepper />
                                                                    <NumberDecrementStepper />
                                                                </NumberInputStepper>
                                                            </NumberInput>

                                                            <Autocomplete
                                                                options={[
                                                                    {
                                                                        value: Unit.G as Unit,
                                                                        label: 'g',
                                                                    },
                                                                    {
                                                                        value: Unit.Kg as Unit,
                                                                        label: 'kg',
                                                                    },
                                                                    {
                                                                        value: Unit.M3 as Unit,
                                                                        label: 'm3',
                                                                    },
                                                                ]}
                                                                onChange={(value: {
                                                                    value: Unit;
                                                                    label: string;
                                                                }) => {
                                                                    setUnit(value);
                                                                }}
                                                                w="md"
                                                                value={unit}
                                                                maxW="40%"
                                                                isClearable
                                                                isLoading={loading}
                                                                placeholder={t(
                                                                    'input_fields.select_placeholder'
                                                                )}
                                                            />
                                                        </HStack>
                                                        <FormErrorMessage>
                                                            {form.errors.weight}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="customer">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isRequired
                                                        isInvalid={
                                                            form.errors.customer &&
                                                            form.touched.customer
                                                        }
                                                    >
                                                        <FormLabel>
                                                            {t('input_fields.customer')}
                                                        </FormLabel>
                                                        <Autocomplete
                                                            options={data?.users?.map(
                                                                ({
                                                                    firstName,
                                                                    lastName,
                                                                    id,
                                                                    customerId,
                                                                }) => ({
                                                                    value: id,
                                                                    label: `${firstName} ${lastName} - ${customerId}`,
                                                                })
                                                            )}
                                                            onChange={(data: {
                                                                value: string;
                                                                label: string;
                                                            }) => {
                                                                form.setFieldValue(
                                                                    field.name,
                                                                    data?.value
                                                                );
                                                            }}
                                                            w="100%"
                                                            maxW="100%"
                                                            isClearable
                                                            isLoading={isQueryingUsers}
                                                            placeholder={t(
                                                                'input_fields.select_placeholder'
                                                            )}
                                                        />
                                                        <FormErrorMessage>
                                                            {form.errors.customer}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="status">
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isRequired
                                                        isInvalid={
                                                            form.errors.status &&
                                                            form.touched.status
                                                        }
                                                    >
                                                        <FormLabel>Status</FormLabel>
                                                        <Select
                                                            {...field}
                                                            name="status"
                                                            id="status"
                                                            size="lg"
                                                            _focus={{
                                                                boxShadow: '0 0 0 1px #38A169',
                                                                borderColor: 'green.500',
                                                            }}
                                                        >
                                                            <option value={Status.Received}>
                                                                Recieved
                                                            </option>
                                                            <option value={Status.InTransit}>
                                                                In transit
                                                            </option>
                                                            <option value={Status.Delivered}>
                                                                Delivered
                                                            </option>
                                                        </Select>
                                                        <FormErrorMessage>
                                                            {form.errors.status}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </VStack>
                                    )}
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
