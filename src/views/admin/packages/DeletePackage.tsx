import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { ParcelsDocument, ParcelsQuery, useDeleteParcelMutation } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';

type DeletePackageViewProps = {
    id: string;
};
export const DeletePackageView = ({ id }: DeletePackageViewProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const { translate: t } = useTranslator();
    const [deleteParcel, { loading }] = useDeleteParcelMutation();

    const cancelRef = React.useRef();

    const onDelete = async () => {
        const response = await deleteParcel({
            variables: { id },
            update: (store, { data: { deleteParcel } }) => {
                const data = store.readQuery<ParcelsQuery>({
                    query: ParcelsDocument,
                });

                const filteredParcels = data.parcels.filter(({ id }) => id !== deleteParcel.id);

                store.writeQuery({
                    query: ParcelsDocument,
                    data: {
                        parcels: [...filteredParcels],
                    },
                });
            },
        });

        if (response.data) {
            toast({
                position: 'top-right',
                title: t('toasts.parcel.delete'),
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <IconButton
                aria-label="delete  package"
                icon={<DeleteIcon />}
                size="sm"
                onClick={onOpen}
                colorScheme="red"
            />
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{t('modal.parcel.delete')}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{t('alert_delete_description')}</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            {t('buttons.cancel')}
                        </Button>
                        <Button colorScheme="red" isLoading={loading} ml={3} onClick={onDelete}>
                            {t('buttons.delete')}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
