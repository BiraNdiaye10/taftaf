import { DeleteIcon } from '@chakra-ui/icons';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
    useToast,
} from '@chakra-ui/react';
import { OrdersDocument, OrdersQuery, useDeleteOrderMutation } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';
import React from 'react';

type AdminDeleteOrderModalProps = {
    id: string;
};

export const AdminDeleteOrderModal = ({ id }: AdminDeleteOrderModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    const { translate: t } = useTranslator();

    const [deleteOrder, { loading }] = useDeleteOrderMutation();
    const toast = useToast();

    const onDelete = async () => {
        const response = await deleteOrder({
            variables: { id },
            update: (store, { data: { deleteOrder } }) => {
                const data = store.readQuery<OrdersQuery>({
                    query: OrdersDocument,
                });

                const orders = data.orders.filter((order) => order.id !== deleteOrder.id);

                store.writeQuery<OrdersQuery>({
                    query: OrdersDocument,
                    data: { orders: [...orders] },
                });
            },
        });

        if (response.data) {
            onClose();

            toast({
                position: 'top-right',
                title: t('toasts.order.delete'),
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <IconButton
                aria-label="delete order"
                icon={<DeleteIcon />}
                size="sm"
                colorScheme="red"
                onClick={() => setIsOpen(true)}
            />

            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {t('modal.order.delete')}
                        </AlertDialogHeader>

                        <AlertDialogBody>{t('alert_delete_description')}</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                {t('buttons.cancel')}
                            </Button>
                            <Button colorScheme="red" onClick={onDelete} ml={3} isLoading={loading}>
                                {t('buttons.delete')}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};
