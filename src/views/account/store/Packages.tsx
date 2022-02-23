import React from 'react';
import {
    Approval,
    MeDocument,
    MeQuery,
    Parcel,
    Status,
    Unit,
    useApproveShipmentMutation,
    useMeQuery,
} from '@taftaf/graphql';
import {
    VStack,
    Tag,
    Box,
    Container,
    Text,
    Heading,
    Flex,
    Button,
    useToast,
} from '@chakra-ui/react';
import { Empty, Loader } from '@taftaf/components';
import { AppLayout } from '@taftaf/layouts';
import { PackageStatusColors } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';

type PackageCardsProps = MeQuery;

type PackageCardProps = Parcel;

export const StorePackagesView = (): JSX.Element => {
    const { loading, data } = useMeQuery();

    const { translate: t } = useTranslator();

    return (
        <AppLayout title={t('parcels_title')}>
            <Container maxW="container.md" my={36}>
                <VStack spacing={10} w="100%">
                    <Heading as="h1" size="xl">
                        {t('parcels_title')}
                    </Heading>

                    {loading ? (
                        <Loader />
                    ) : data?.me?.parcels.length ? (
                        <PackageCards me={data?.me} />
                    ) : (
                        <Empty captionText={t('empty.store.parcels')} />
                    )}
                </VStack>
            </Container>
        </AppLayout>
    );
};

/**
 * Package Cards
 * @param props MeQuery
 * @returns
 */
const PackageCards = (props: PackageCardsProps) => (
    <VStack w="100%" spacing={14}>
        {props?.me?.parcels?.map(({ id, name, origin, weight, unit, status, approval }: Parcel) => (
            <PackageCard
                key={id}
                id={id}
                name={name}
                origin={origin}
                weight={weight}
                unit={unit}
                status={status}
                approval={approval}
            />
        ))}
    </VStack>
);

/**
 * Package Card
 * @param props Package
 * @returns
 */
const PackageCard = (props: PackageCardProps) => {
    const { id, name, origin, weight, unit, status, approval } = props;

    const { translate: t } = useTranslator();

    const toast = useToast();
    const [approveShipment, { loading }] = useApproveShipmentMutation();

    const onApproveShipment = async () => {
        try {
            const response = await approveShipment({
                variables: { id },

                update: (store, { data: { approveShipment } }) => {
                    const user = store.readQuery<MeQuery>({
                        query: MeDocument,
                    });

                    const currentParcelIndex = user.me.parcels.findIndex(
                        (parcel) => parcel.id === approveShipment.id
                    );

                    const parcels = [...user.me.parcels];

                    // make approve shipment as any because me type requires Parcel type instead of ParcelResponse
                    parcels.splice(currentParcelIndex, 1, ...(approveShipment as any));
                    const newUser = {
                        ...user.me,

                        parcels,
                    };

                    store.writeQuery({
                        query: MeDocument,
                        data: { me: newUser },
                    });
                },
            });

            if (response.data) {
                toast({
                    position: 'top-right',
                    title: `Shipment approved`,
                    description: `You can track the delivery progress in our tracking system.`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            throw Error(error);
        }
    };

    return (
        <Box
            boxShadow="card"
            w="100%"
            p={5}
            borderRadius="xl"
            key={id}
            border="1px solid"
            borderColor="gray.200"
        >
            <Flex
                align={{ base: 'flex-start', sm: 'center' }}
                justify="space-between"
                flexDir={{ base: 'column', sm: 'row' }}
            >
                <VStack align="start">
                    <Text>
                        <strong>{t('input_fields.product_name')}: </strong> {name}
                    </Text>

                    <Text>
                        <strong>{t('input_fields.origin')}: </strong> {origin}
                    </Text>

                    <Text>
                        <strong>{t('input_fields.weight')}: </strong> {weight}{' '}
                        {unit === Unit.M3 ? 'm' : unit.toLowerCase()}
                        {unit === Unit.M3 ? <sup>3</sup> : null}
                    </Text>

                    <Text>
                        <strong>Status: </strong>{' '}
                        <Tag
                            colorScheme={
                                status === Status.Received
                                    ? PackageStatusColors[Status.Received]
                                    : status === Status.InTransit
                                    ? PackageStatusColors[Status.InTransit]
                                    : PackageStatusColors[Status.Delivered]
                            }
                        >
                            {t(`parcel.${status}`)}
                        </Tag>
                    </Text>

                    {/* <Text>
                        <strong>{t('ShipmentApprovalText')}: </strong>{' '}
                        <Tag
                            colorScheme={
                                approval === Approval.Waiting
                                    ? ShipmentApprovalColors[Approval.Waiting]
                                    : ShipmentApprovalColors[Approval.Approved]
                            }
                        >
                            {t(approval)}
                        </Tag>
                    </Text> */}
                </VStack>
                <Button
                    colorScheme="green"
                    mt={{ base: 8, sm: 0 }}
                    disabled={approval === Approval.Approved}
                    isLoading={loading}
                    onClick={onApproveShipment}
                >
                    {approval === Approval.Approved
                        ? t('parcel.approved_button_text')
                        : t('parcel.approve_button_text')}
                </Button>
            </Flex>
        </Box>
    );
};
