import React from 'react';
import NextLink from 'next/link';
import {
    Avatar,
    Button,
    Heading,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { useUserQuery } from '@taftaf/graphql';
import { Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';

type UserModalProps = {
    id: string;
};

export const UserModal = ({ id }: UserModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();

    const { data, loading } = useUserQuery({ variables: { id } });

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
                    <ModalHeader>
                        {loading ? '---' : `${data?.user?.firstName} ${data?.user?.lastName}`}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {loading ? (
                            <Loader />
                        ) : (
                            <VStack align="start" spacing={8}>
                                <HStack align="center">
                                    <Avatar
                                        name={`${data?.user?.firstName} ${data?.user?.lastName}`}
                                    />

                                    <strong>{data?.user?.customerId}</strong>
                                </HStack>

                                <HStack spacing={5}>
                                    <NextLink href={`/admin/users/${data?.user?.id}`}>
                                        <Button>Parcels ({data?.user?.parcels?.length})</Button>
                                    </NextLink>
                                    <NextLink href={`/admin/users/${data?.user?.id}`}>
                                        <Button>Orders ({data?.user?.parcels?.length})</Button>
                                    </NextLink>
                                </HStack>

                                <VStack align="start" spacing={3}>
                                    <Heading size="md">Personal info</Heading>

                                    <VStack align="start">
                                        <Text>
                                            <strong>First name: </strong>
                                            {data?.user?.firstName}
                                        </Text>
                                        <Text>
                                            <strong>Last name: </strong>
                                            {data?.user?.lastName}
                                        </Text>

                                        <Text>
                                            <strong>Profession: </strong> {data?.user?.profession}
                                        </Text>
                                    </VStack>
                                </VStack>

                                <VStack align="start" spacing={3}>
                                    <Heading size="md">Shipping address</Heading>

                                    <VStack align="start">
                                        <Text>
                                            <strong>Email: </strong>
                                            {data?.user?.email}
                                        </Text>

                                        <Text>
                                            <strong>Phone number 1: </strong>
                                            {data?.user?.phoneNumber1}
                                        </Text>

                                        <Text>
                                            <strong>Phone number 2: </strong>{' '}
                                            {data?.user?.phoneNumber2 ?? '--'}
                                        </Text>

                                        <Text>
                                            <strong>Address: </strong>{' '}
                                            {data?.user?.shippingAddress.street}
                                        </Text>

                                        <Text>
                                            <strong>Postal code: </strong>
                                            {data?.user?.shippingAddress.postalCode}
                                        </Text>

                                        <Text>
                                            <strong>City: </strong>{' '}
                                            {data?.user?.shippingAddress.city}
                                        </Text>

                                        <Text>
                                            <strong>Country: </strong>{' '}
                                            {data?.user?.shippingAddress.country}
                                        </Text>
                                    </VStack>
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
