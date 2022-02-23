import React, { Fragment, useEffect, useState } from 'react';
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
    useDisclosure,
    IconButton,
    useToast,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { EditIcon } from '@chakra-ui/icons';
import {
    useParcelQuery,
    useUpdateParcelMutation,
    useUsersQuery,
    Unit,
    Status,
    ParcelInput,
    ParcelsDocument,
    ParcelsQuery,
} from '@taftaf/graphql';
import { Autocomplete, Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { TOAST_DURATION } from '@taftaf/config';
import { useValidators } from '@taftaf/hooks';

type UpdatePackageViewProps = {
    id: string;
};
export const UpdatePackageView = ({ id }: UpdatePackageViewProps): JSX.Element => {
    const firstField = React.useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const validators = useValidators();

    const { translate: t } = useTranslator();

    const { data } = useParcelQuery({
        variables: { id },
    });

    const [updatePackage, { loading }] = useUpdateParcelMutation();

    const { data: usersQuery, loading: isQueryingUsers } = useUsersQuery();

    const toast = useToast();

    const initialValues = {
        name: data?.parcel?.name,
        origin: data?.parcel?.origin,
        status: data?.parcel?.status,
        weight: data?.parcel?.weight,
    };

    const [unit, setUnit] = useState({
        label: '',
        value: '',
    });

    const [user, setUser] = useState({
        label: `${data?.parcel?.customer?.firstName} ${data?.parcel?.customer?.lastName} - ${data?.parcel?.customer?.customerId}`,
        value: data?.parcel?.customer?.id,
    });

    useEffect(() => {
        setUnit({
            label: data?.parcel?.unit.toLowerCase(),
            value: data?.parcel?.unit.toUpperCase(),
        });

        setUser({
            label: `${data?.parcel?.customer?.firstName} ${data?.parcel?.customer?.lastName} - ${data?.parcel?.customer?.customerId}`,
            value: data?.parcel?.customer?.id,
        });
    }, [
        data?.parcel?.customer?.customerId,
        data?.parcel?.customer?.firstName,
        data?.parcel?.customer?.id,
        data?.parcel?.customer?.lastName,
        data?.parcel?.unit,
    ]);
    const onSubmit = async (values: typeof initialValues) => {
        const data = { ...values, customer: user.value, unit: unit.value } as ParcelInput;

        const response = await updatePackage({
            variables: { id, ...data },

            update: (store, { data: { updateParcel } }) => {
                const data = store.readQuery<ParcelsQuery>({
                    query: ParcelsDocument,
                    variables: { id },
                });

                const parcels = data.parcels.filter(({ id }) => id !== updateParcel.id);

                store.writeQuery({
                    query: ParcelsDocument,
                    variables: { id },
                    data: {
                        parcels: [...parcels, updateParcel],
                    },
                });
            },
        });

        if (response.data) {
            toast({
                position: 'top-right',
                title: t('toasts.parcel.update'),
                status: 'success',
                duration: TOAST_DURATION,
                isClosable: true,
            });
        }
    };

    return (
        <Fragment>
            <IconButton
                aria-label="update package"
                icon={<EditIcon />}
                size="sm"
                onClick={onOpen}
            />
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
                                    {t('modal.parcel.update')}
                                </DrawerHeader>

                                <DrawerBody>
                                    {!usersQuery && isQueryingUsers ? (
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
                                                                defaultValue={data?.parcel?.weight}
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
                                                            options={usersQuery?.users?.map(
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
                                                            value={user}
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
