import React from 'react';
import NextLink from 'next/link';
import {
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
    Text,
    Tag,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { Approval, Status, Unit, useParcelQuery } from '@taftaf/graphql';
import { PackageStatusColors, ShipmentApprovalColors } from '@taftaf/config';
import { Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';

type SinglePackageViewProps = {
    id: string;
};
export const SinglePackageView = ({ id }: SinglePackageViewProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();

    const { data, loading } = useParcelQuery({ variables: { id } });

    return (
        <>
            <IconButton aria-label="view single user" icon={<FaEye />} size="sm" onClick={onOpen} />
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{data?.parcel?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {!data && loading ? (
                            <Loader />
                        ) : (
                            <VStack align="start" spacing={8}>
                                <VStack spacing={5}>
                                    <NextLink href={`/admin/users/${data?.parcel?.customer?.id}`}>
                                        <Button>{`${data?.parcel?.customer?.firstName} ${data?.parcel?.customer?.lastName}`}</Button>
                                    </NextLink>
                                </VStack>

                                <VStack align="start">
                                    <Text>
                                        <strong>{t('input_fields.origin')}: </strong>
                                        {data?.parcel?.origin}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.weight')}: </strong>
                                        {data?.parcel?.weight}{' '}
                                        {data?.parcel?.unit === Unit.M3
                                            ? 'm'
                                            : data?.parcel?.unit.toLowerCase()}
                                        {data?.parcel?.unit === Unit.M3 ? <sup>3</sup> : null}
                                    </Text>

                                    <Text>
                                        <strong>Status: </strong>
                                        <Tag
                                            colorScheme={
                                                data?.parcel?.status === Status.Received
                                                    ? PackageStatusColors[Status.Received]
                                                    : data?.parcel?.status === Status.InTransit
                                                    ? PackageStatusColors[Status.InTransit]
                                                    : data?.parcel?.status === Status.Delivered
                                                    ? PackageStatusColors[Status.Delivered]
                                                    : null
                                            }
                                        >
                                            {t(`parcel.${data?.parcel?.status}`)}
                                        </Tag>
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.shipmentApproval')}: </strong>
                                        <Tag
                                            colorScheme={
                                                data?.parcel?.approval === Approval.Waiting
                                                    ? ShipmentApprovalColors[Approval.Waiting]
                                                    : ShipmentApprovalColors[Approval.Approved]
                                            }
                                        >
                                            {t(`parcel.${data?.parcel?.approval}`)}
                                        </Tag>
                                    </Text>
                                </VStack>
                            </VStack>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            {t('buttons.close')}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
