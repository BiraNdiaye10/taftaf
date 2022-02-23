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
    Box,
} from '@chakra-ui/react';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { formatDate } from '@taftaf/utils/dates';
import { useRouter } from 'next/router';
import React from 'react';
import { FaEye } from 'react-icons/fa';

type StoreSingleOrderModalProps = {
    name: string;
    description: string;
    createdAt: number;
};

export const StoreSingleOrderModal = ({
    name,
    description,
    createdAt,
}: StoreSingleOrderModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { translate: t } = useTranslator();

    const { locale } = useRouter();
    return (
        <>
            <IconButton
                aria-label="view single purchase order"
                icon={<FaEye />}
                size="sm"
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack align="start">
                            <Text>{description}</Text>

                            <Box as="time" dateTime={new Date(createdAt).toUTCString()}>
                                {t('order_created_text')} {formatDate(createdAt, locale)}{' '}
                            </Box>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            {t('buttons.close')}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
