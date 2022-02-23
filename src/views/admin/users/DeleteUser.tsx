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
import { useDeleteUserMutation, UsersDocument, UsersQuery } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';

type DeleteUserProps = {
    id: string;
};
export const DeleteUserView = ({ id: userId }: DeleteUserProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const cancelRef = React.useRef();

    const { translate: t } = useTranslator();

    const [deleteUser, { loading }] = useDeleteUserMutation();

    const toast = useToast();

    const onDelete = async () => {
        try {
            const response = await deleteUser({
                variables: { id: userId },
                update: (store, { data: { deleteUser } }) => {
                    const { users } = store.readQuery<UsersQuery>({
                        query: UsersDocument,
                    });

                    const filteredUsers = users.filter(({ id }) => id !== deleteUser.id);

                    store.writeQuery({
                        query: UsersDocument,
                        data: {
                            users: [...filteredUsers],
                        },
                    });
                },
            });

            if (response.data) {
                toast({
                    position: 'top-right',
                    title: t('toasts.user.delete'),
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <IconButton
                aria-label="delete  user"
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
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{t('modal.user.delete')}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{t('alert_delete_description')}</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            {t('buttons.cancel')}
                        </Button>
                        <Button colorScheme="red" ml={3} isLoading={loading} onClick={onDelete}>
                            {t('buttons.delete')}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
