import React from 'react';
import { MeQuery, Order, useMeQuery } from '@taftaf/graphql';
import {
    VStack,
    Container,
    Text,
    Heading,
    Link,
    Flex,
    SimpleGrid,
    HStack,
    Box,
} from '@chakra-ui/react';
import { Empty, Loader } from '@taftaf/components';
import { AppLayout } from '@taftaf/layouts';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { CreatePurchaseOrderView } from './CreateOrder';
import { formatDate } from '@taftaf/utils/dates';
import { StoreSingleOrderModal } from './StoreSingleOrderModal';
import { StoreUpdateOrderModal } from './StoreUpdateOrderModal';
import { useRouter } from 'next/router';

type OrderCardsProps = MeQuery;

type OrderCardProps = Order;

export const StoreOrdersView = (): JSX.Element => {
    const { loading, data } = useMeQuery();

    const { translate } = useTranslator();

    return (
        <AppLayout title={translate('orders_title')}>
            <Container maxW="container.lg" my={36}>
                <VStack spacing={16} w="100%">
                    <Flex
                        w="100%"
                        align="center"
                        justify="space-between"
                        flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                    >
                        <Heading as="h1" size="xl">
                            {translate('orders_title')}
                        </Heading>
                        <CreatePurchaseOrderView />
                    </Flex>
                    {loading ? (
                        <Loader />
                    ) : data?.me?.orders.length ? (
                        <OrderCards me={data?.me} />
                    ) : (
                        <Empty captionText={translate('empty.store.orders')} />
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
const OrderCards = (props: OrderCardsProps) => (
    <VStack w="100%" spacing={14}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8} w="100%">
            {props.me?.orders?.map(({ id, name, link, description, createdAt }) => (
                <OrderCard
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    link={link}
                    createdAt={createdAt}
                />
            ))}
        </SimpleGrid>
    </VStack>
);

/**
 * Package Card
 * @param props Package
 * @returns
 */
const OrderCard = (props: OrderCardProps) => {
    const { id, name, link, description, createdAt } = props;

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

            <Flex>
                <HStack>
                    <StoreSingleOrderModal
                        name={name}
                        description={description}
                        createdAt={createdAt}
                    />
                    <StoreUpdateOrderModal
                        id={id}
                        name={name}
                        link={link}
                        description={description}
                    />
                </HStack>
            </Flex>
        </VStack>
    );

    /* 
            <VStack
            spacing={8}
            boxShadow="card"
            w="100%"
            p={5}
            borderRadius="xl"
            key={id}
            border="1px solid"
            borderColor="gray.200"
        >
        <VStack align="start" w="100%" maxW="100%">
                <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
                    <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
                        13 days ago
                        </Box>
                    <Heading size="md" my="2">
                    <LinkOverlay href="#">
                    New Year, New Beginnings: Smashing Workshops & Audits
                    </LinkOverlay>
                    </Heading>
                    <Text>
                        Catch up on what’s been cookin’ at Smashing and explore some of the most
                        popular community resources.
                    </Text>
                </LinkBox>

                <LinkBox as={Heading} size="md" _hover={{ color: 'green.500' }}>
                    <LinkOverlay href={link} target="_blank">
                        {name}
                        </LinkOverlay>
                </LinkBox>
                
                <Text>{description.slice(0, 80)}...</Text>
            </VStack>
            
            <Flex align="center" justify="space-between" w="100%">
                <Text>
                <strong>
                        {t('order_created_text')} {formatDate(createdAt, locale)}{' '}
                        </strong>
                </Text>
                <HStack>
                    <StoreSingleOrderModal
                        name={name}
                        description={description}
                        createdAt={createdAt}
                        />
                        <StoreUpdateOrderModal
                        id={id}
                        name={name}
                        link={link}
                        description={description}
                        />
                        </HStack>
                        </Flex>
                        </VStack>
                        );

                */
};
