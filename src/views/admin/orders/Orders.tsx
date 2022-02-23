import React, { useState } from 'react';
import { Order, OrdersQuery, useOrdersQuery, User } from '@taftaf/graphql';
import {
    VStack,
    Container,
    Text,
    Heading,
    Link,
    Flex,
    SimpleGrid,
    Input,
    InputGroup,
    InputLeftElement,
    HStack,
    Box,
    ButtonGroup,
    Button,
} from '@chakra-ui/react';
import { Empty, Loader } from '@taftaf/components';
import { AdminLayout } from '@taftaf/layouts';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Search2Icon } from '@chakra-ui/icons';

import { useRouter } from 'next/router';
import { formatDate } from '@taftaf/utils/dates';
import { AdminSingleOrderModal } from './AdminSingleOrderModal';
import { AdminDeleteOrderModal } from './AdminDeleteOrderModal';
import { AdminCreateOrderModal } from './AdminCreateOrderModal';
import { AdminUpdateOrderModal } from './AdminUpdateOrderModal';
import { usePagination } from '@taftaf/hooks';

type OrderCardsProps = { searchValue: string; data: OrdersQuery };

type OrderCardProps = Order;

export const AdminOrdersView = (): JSX.Element => {
    const { loading, data } = useOrdersQuery();

    const [searchValue, setSearchValue] = useState('');

    const { translate: t } = useTranslator();

    return (
        <AdminLayout title={t('title')}>
            <Container maxW="container.xl">
                <VStack spacing={16} w="100%">
                    <Flex
                        w="100%"
                        align="center"
                        justify="space-between"
                        flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                    >
                        <VStack align="start">
                            <Heading size="xl">{t('title')}</Heading>
                            <Text>{t('subtitle', { ordersNumber: data?.orders?.length })}</Text>
                        </VStack>

                        <InputGroup w="lg" my={{ base: 4, lg: 0 }}>
                            <InputLeftElement
                                pointerEvents="none"
                                // eslint-disable-next-line react/no-children-prop
                                children={<Search2Icon color="gray.300" />}
                            />
                            <Input
                                type="tel"
                                placeholder={t('input_fields.search_orders_placeholder')}
                                _focus={{
                                    boxShadow: '0 0 0 1px #38A169',
                                    borderColor: 'green.500',
                                }}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </InputGroup>
                        {/* <CreatePurchaseOrderView /> */}
                        <AdminCreateOrderModal />
                    </Flex>
                    {loading ? (
                        <Loader />
                    ) : data?.orders.length ? (
                        <OrderCards data={data} searchValue={searchValue} />
                    ) : (
                        <Empty captionText={t('empty.admin.orders')} />
                    )}
                </VStack>
            </Container>
        </AdminLayout>
    );
};

/**
 * Package Cards
 * @param props MeQuery
 * @returns
 */
const OrderCards = ({ data, searchValue }: OrderCardsProps) => {
    const { translate: t } = useTranslator();

    const {
        currentData: orders,
        isNextButtonDisabled,
        isPrevButtonDisabled,
        next,
        prev,
    } = usePagination(data?.orders);

    return (
        <VStack w="100%" spacing={14}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
                {orders
                    ?.filter((order) =>
                        order.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map(({ id, name, link, description, createdAt, customer }) => (
                        <OrderCard
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            link={link}
                            customer={customer as unknown as User}
                            createdAt={createdAt}
                        />
                    ))}
            </SimpleGrid>

            <ButtonGroup size="sm" variant="outline" spacing="4">
                <Button disabled={isPrevButtonDisabled} onClick={prev}>
                    {t('buttons.prev')}
                </Button>
                <Button disabled={isNextButtonDisabled} onClick={next}>
                    {t('buttons.next')}
                </Button>
            </ButtonGroup>
        </VStack>
    );
};

/**
 * Package Card
 * @param props Package
 * @returns
 */
const OrderCard = (props: OrderCardProps) => {
    const { id, name, link, description, createdAt, customer } = props;

    const textLength = description?.length;

    const { translate: t } = useTranslator();

    const { locale } = useRouter();

    return (
        <VStack align="start" w="sm" maxW="100%" p="5" borderWidth="1px" rounded="lg" spacing={4}>
            <Box as="article">
                <Box as="time" dateTime={new Date(createdAt).toUTCString()}>
                    {t('order_created_text')} {formatDate(createdAt, locale)}{' '}
                </Box>
                <Heading size="md" my="2">
                    <Link href="#">{name}</Link>
                </Heading>
                <Text>
                    {description.slice(0, 80)} {textLength > 80 ? '...' : ''}
                </Text>
            </Box>

            <HStack>
                <AdminSingleOrderModal id={id} />
                <AdminUpdateOrderModal
                    id={id}
                    name={name}
                    link={link}
                    description={description}
                    customer={customer}
                />
                <AdminDeleteOrderModal id={id} />
            </HStack>
        </VStack>
    );
};
