import React from 'react';
import {
    Avatar,
    Container,
    Heading,
    HStack,
    VStack,
    Text,
    Tag,
    Box,
    Button,
    Link,
} from '@chakra-ui/react';
import { AdminLayout } from '@taftaf/layouts';
import { useRouter } from 'next/router';
import { Approval, Status, Unit, useUserQuery } from '@taftaf/graphql';
import { Loader } from '@taftaf/components';
import { PackageStatusColors, ShipmentApprovalColors } from '@taftaf/config';
import { Empty } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks';

export const SingleUserView = (): JSX.Element => {
    const { query } = useRouter();

    const { data, loading } = useUserQuery({ variables: { id: query.id as string } });

    const { translate: t } = useTranslator();

    return (
        <AdminLayout title={`${data?.user?.firstName} - ${data?.user?.lastName}`}>
            <Container maxW="container.md" mb={20}>
                {loading ? (
                    <Loader />
                ) : (
                    <VStack align="start" spacing={16} w="100%">
                        <HStack align="center">
                            <Avatar name={`${data?.user?.firstName} ${data?.user?.lastName}`} />

                            <strong>{data?.user?.customerId}</strong>
                        </HStack>

                        <VStack align="start" spacing={5}>
                            <Heading size="lg">{t('single_user.personal_infos_title')}</Heading>

                            <VStack align="start">
                                <Text>
                                    <strong>{t('input_fields.first_name')}: </strong>
                                    {data?.user?.firstName}
                                </Text>
                                <Text>
                                    <strong>{t('input_fields.last_name')}: </strong>
                                    {data?.user?.lastName}
                                </Text>

                                <Text>
                                    <strong>Profession: </strong> {data?.user?.profession}
                                </Text>
                            </VStack>
                        </VStack>

                        <VStack align="start" spacing={5}>
                            <Heading size="lg">{t('single_user.shipping_address_title')}</Heading>

                            <VStack align="start">
                                <Text>
                                    <strong>Email: </strong>
                                    {data?.user?.email}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.phone_number1')}: </strong>
                                    {data?.user?.phoneNumber1}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.phone_number2')}: </strong>{' '}
                                    {data?.user?.phoneNumber2 ?? '--'}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.address')}: </strong>{' '}
                                    {data?.user?.shippingAddress.street}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.postalCode')}: </strong>
                                    {data?.user?.shippingAddress.postalCode}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.city')}: </strong>{' '}
                                    {data?.user?.shippingAddress.city}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.country')}: </strong>{' '}
                                    {data?.user?.shippingAddress.country}
                                </Text>
                            </VStack>
                        </VStack>

                        <VStack align="start" spacing={5} w="100%">
                            <Heading size="lg">{t('single_user.parcels_title')}</Heading>
                            {data?.user?.parcels?.length ? (
                                <VStack w="100%" spacing={14}>
                                    {data?.user?.parcels?.map(
                                        ({ id, name, origin, weight, unit, status, approval }) => (
                                            <Box
                                                boxShadow="card"
                                                w="100%"
                                                p={5}
                                                borderRadius="xl"
                                                key={id}
                                                border="1px solid"
                                                borderColor="gray.200"
                                            >
                                                <VStack align="start">
                                                    <Text>
                                                        <strong>Name: </strong> {name}
                                                    </Text>

                                                    <Text>
                                                        <strong>Origin: </strong> {origin}
                                                    </Text>

                                                    <Text>
                                                        <strong>Weight: </strong>
                                                        {weight}
                                                        {unit === Unit.M3
                                                            ? 'm'
                                                            : unit.toLowerCase()}
                                                        {unit === Unit.M3 ? <sup>3</sup> : null}
                                                    </Text>

                                                    <Text>
                                                        <strong>Status: </strong>{' '}
                                                        <Tag
                                                            colorScheme={
                                                                status === Status.Received
                                                                    ? PackageStatusColors[
                                                                          Status.Received
                                                                      ]
                                                                    : status === Status.InTransit
                                                                    ? PackageStatusColors[
                                                                          Status.InTransit
                                                                      ]
                                                                    : status === Status.Delivered
                                                                    ? PackageStatusColors[
                                                                          Status.Delivered
                                                                      ]
                                                                    : null
                                                            }
                                                        >
                                                            {status}
                                                        </Tag>
                                                    </Text>

                                                    <Text>
                                                        <strong>Shipment approval: </strong>{' '}
                                                        <Tag
                                                            colorScheme={
                                                                approval === Approval.Waiting
                                                                    ? ShipmentApprovalColors[
                                                                          Approval.Waiting
                                                                      ]
                                                                    : ShipmentApprovalColors[
                                                                          Approval.Approved
                                                                      ]
                                                            }
                                                        >
                                                            waiting
                                                        </Tag>
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        )
                                    )}
                                </VStack>
                            ) : (
                                <Empty captionText={t('empty.admin.parcels')} />
                            )}
                        </VStack>

                        <VStack align="start" spacing={5} w="100%">
                            <Heading size="lg">{t('single_user.purchase_orders_title')}</Heading>

                            {data?.user?.orders?.length ? (
                                <VStack w="100%" spacing={14}>
                                    {data?.user?.orders?.map(({ id, name, link, description }) => (
                                        <VStack
                                            align="start"
                                            w="100%"
                                            spacing={3}
                                            boxShadow="card"
                                            p={5}
                                            borderRadius="xl"
                                            border="1px solid"
                                            borderColor="gray.200"
                                            key={id}
                                        >
                                            <Button
                                                as={Link}
                                                colorScheme="green"
                                                variant="link"
                                                href={link}
                                            >
                                                <Heading size="md">{name}</Heading>
                                            </Button>

                                            <Text>{description.slice(0, 80)}...</Text>
                                        </VStack>
                                    ))}
                                </VStack>
                            ) : (
                                <Empty captionText={t('empty.admin.orders')} />
                            )}
                        </VStack>
                    </VStack>
                )}
            </Container>
        </AdminLayout>
    );
};
