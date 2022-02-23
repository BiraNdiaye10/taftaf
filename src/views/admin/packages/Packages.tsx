import React from 'react';
import {
    Box,
    Container,
    Heading,
    HStack,
    Table,
    Tag,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
    Text,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    ButtonGroup,
    Button,
    TableCaption,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import { AdminLayout } from '@taftaf/layouts';
import { CreatePackageView } from './CreatePackage';
import { DeletePackageView } from './DeletePackage';
import { UpdatePackageView } from './UpdatePackage';
import { SinglePackageView } from './SinglePackage';
import { useParcelsQuery, Unit, Status, Approval } from '@taftaf/graphql';
import { Empty, Loader } from '@taftaf/components';
import { PackageStatusColors, ShipmentApprovalColors } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useState } from 'react';
import { usePagination } from '@taftaf/hooks';

/**
 * Users List View
 ***********************************************/
export const AdminPackagesView = (): JSX.Element => {
    const { data, loading } = useParcelsQuery();

    const [searchValue, setSearchValue] = useState('');
    const { translate: t } = useTranslator();

    const {
        currentData: parcels,
        isNextButtonDisabled,
        isPrevButtonDisabled,
        next,
        prev,
    } = usePagination(data?.parcels);

    return (
        <AdminLayout title={t('title')}>
            <Container maxW="container.xl">
                <VStack align="start" spacing={10}>
                    <VStack align="start" w="100%">
                        <Heading size="xl">{t('title')}</Heading>
                        <Flex align="center" justify="space-between" w="100%" flexWrap="wrap">
                            <InputGroup w="lg" my={{ base: 4, lg: 0 }}>
                                <InputLeftElement
                                    pointerEvents="none"
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<Search2Icon color="gray.300" />}
                                />
                                <Input
                                    type="text"
                                    placeholder={t('search')}
                                    _focus={{
                                        boxShadow: '0 0 0 1px #38A169',
                                        borderColor: 'green.500',
                                    }}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </InputGroup>
                            <CreatePackageView />
                        </Flex>
                    </VStack>

                    <Box
                        rounded="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        w="100%"
                        overflow="auto"
                    >
                        {loading ? (
                            <Loader />
                        ) : data?.parcels?.length ? (
                            <Table variant="simple">
                                <TableCaption py={6}>
                                    <Flex align="center" justify="space-between">
                                        <Text fontWeight="bold">
                                            {t('subtitle', {
                                                parcelsNumber: data?.parcels?.length,
                                            })}
                                        </Text>
                                        {data?.parcels?.length >= 1 ? (
                                            <ButtonGroup size="sm" variant="outline" spacing="4">
                                                <Button
                                                    disabled={isPrevButtonDisabled}
                                                    onClick={prev}
                                                >
                                                    {t('buttons.prev')}
                                                </Button>
                                                <Button
                                                    disabled={isNextButtonDisabled}
                                                    onClick={next}
                                                >
                                                    {t('buttons.next')}
                                                </Button>
                                            </ButtonGroup>
                                        ) : null}
                                    </Flex>
                                </TableCaption>

                                <Thead bg="gray.100">
                                    <Tr>
                                        <Th>{t('input_fields.product_name')}</Th>
                                        <Th>{t('input_fields.origin')}</Th>
                                        <Th>{t('input_fields.weight')}</Th>
                                        <Th>{t('input_fields.status')}</Th>
                                        <Th>{t('input_fields.shipmentApproval')}</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {parcels
                                        ?.filter((parcel) =>
                                            parcel.name
                                                .toLowerCase()
                                                .includes(searchValue.toLowerCase())
                                        )
                                        .map(
                                            ({
                                                id,
                                                name,
                                                origin,
                                                weight,
                                                unit,
                                                status,
                                                approval,
                                            }) => (
                                                <Tr key={id}>
                                                    <Td>{name}</Td>
                                                    <Td>{origin}</Td>

                                                    <Td>
                                                        {weight}
                                                        {unit === Unit.M3
                                                            ? 'm'
                                                            : unit.toLowerCase()}
                                                        {unit === Unit.M3 ? <sup>3</sup> : null}
                                                    </Td>

                                                    <Td>
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
                                                                    : PackageStatusColors[
                                                                          Status.Delivered
                                                                      ]
                                                            }
                                                        >
                                                            {t(`parcel.${status}`)}
                                                        </Tag>
                                                    </Td>
                                                    <Td>
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
                                                            {t(`parcel.${approval}`)}
                                                        </Tag>
                                                    </Td>
                                                    <Td>
                                                        <HStack>
                                                            <SinglePackageView id={id} />
                                                            <UpdatePackageView id={id} />
                                                            <DeletePackageView id={id} />
                                                        </HStack>
                                                    </Td>
                                                </Tr>
                                            )
                                        )}
                                </Tbody>
                            </Table>
                        ) : (
                            <Empty captionText={t('empty.admin.parcels')} />
                        )}
                    </Box>
                </VStack>
            </Container>
        </AdminLayout>
    );
};
