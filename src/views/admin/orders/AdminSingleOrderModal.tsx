import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    IconButton,
    VStack,
    Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Loader } from '@taftaf/components';
import { useOrderQuery } from '@taftaf/graphql';
import { formatDate } from '@taftaf/utils/dates';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useRouter } from 'next/router';

type AdminSingleOrderModalProps = {
    id: string;
};

export const AdminSingleOrderModal = ({ id }: AdminSingleOrderModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();

    const { locale } = useRouter();

    const { data, loading } = useOrderQuery({ variables: { id } });
    return (
        <>
            <IconButton aria-label="view single user" icon={<FaEye />} size="sm" onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <ModalHeader>{data?.order.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack align="start">
                                    <NextLink
                                        href={`${Routes.adminUsers}/${data?.order?.customer?.id}`}
                                    >
                                        <Button>
                                            {data?.order?.customer?.firstName}{' '}
                                            {data?.order?.customer?.lastName}
                                        </Button>
                                    </NextLink>
                                    <Text>{data?.order?.description}</Text>

                                    <Text>
                                        <strong>
                                            {t('order_created_text')}{' '}
                                            {formatDate(data?.order?.createdAt, locale)}
                                        </strong>
                                    </Text>
                                </VStack>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={onClose}>
                                    {t('buttons.close')}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
