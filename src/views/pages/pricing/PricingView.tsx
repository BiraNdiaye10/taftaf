import {
    Container,
    Heading,
    SimpleGrid,
    VStack,
    Text,
    Box,
    HStack,
    Button,
    Flex,
} from '@chakra-ui/react';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { PageLayout } from '@taftaf/layouts';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const PricingView = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const pricesData = {
        byAir: [
            [
                {
                    id: 1,
                    direction: t('pricing_title1'),
                    amount: 10,
                    currency: 'EUR',
                    timeLimit: t('by_air.time_limit'),
                },
                {
                    id: 2,
                    direction: t('pricing_title2'),
                    amount: 6650,
                    currency: 'CFA',
                    timeLimit: t('by_air.time_limit'),
                },
            ],
            [
                {
                    id: 3,
                    direction: t('pricing_title3'),
                    amount: 12,
                    currency: 'EUR',
                    timeLimit: t('by_air.time_limit'),
                },
                {
                    id: 4,
                    direction: t('pricing_title4'),
                    amount: 100000,
                    currency: 'FG',
                    timeLimit: t('by_air.time_limit'),
                },
            ],
        ],

        bySea: [
            [
                {
                    id: 5,
                    direction: t('pricing_title1'),
                    amount: 3,
                    currency: 'EUR',
                    timeLimit: '15 to 20 days after departure.',
                },
                {
                    id: 6,
                    direction: t('pricing_title2'),
                    amount: 2500,
                    currency: 'CFA',
                    timeLimit: '15 to 20 days after departure',
                },
            ],
            [
                {
                    id: 7,
                    direction: t('pricing_title3'),
                    amount: 5,
                    currency: 'EUR',
                    timeLimit: '25 to 30 days after departure',
                },
                {
                    id: 8,
                    direction: t('pricing_title4'),
                    amount: 50000,
                    currency: 'FG',
                    timeLimit: '25 to 30 days after departure',
                },
            ],
        ],
    };

    const [prices, setPrices] = useState({
        active: 'byAir',
        pricingPlan: pricesData.byAir,
    });

    const defaultPricingButton = {
        bg: 'gray.200',
        fontWeight: 'bold',
        _hover: { bg: 'gray.300' },
    };
    const activePricingButton = {
        bg: 'white',
        fontWeight: 'bold',
        color: 'gray.700',
        boxShadow: 'base',
        _hover: { bg: 'gray.50' },
    };

    return (
        <PageLayout title={t('title')}>
            <Container maxW="container.xl">
                <VStack spacing={12}>
                    <Heading size="2xl" textAlign="center">
                        {t('title')}
                    </Heading>

                    <VStack align="start" w="100%" spacing={16}>
                        {/* Switch pricings buttons */}
                        <Flex justify="center" w="100%">
                            <HStack
                                justify="center"
                                bg="gray.100"
                                p={3}
                                borderRadius="lg"
                                maxW="100%"
                            >
                                <Button
                                    size="lg"
                                    sx={
                                        prices.active === 'byAir'
                                            ? activePricingButton
                                            : defaultPricingButton
                                    }
                                    onClick={() => {
                                        setPrices({
                                            active: 'byAir',
                                            pricingPlan: pricesData.byAir,
                                        });
                                    }}
                                >
                                    {t('by_air_button')}{' '}
                                </Button>
                                <Button
                                    size="lg"
                                    sx={
                                        prices.active === 'bySea'
                                            ? activePricingButton
                                            : defaultPricingButton
                                    }
                                    onClick={() => {
                                        setPrices({
                                            active: 'bySea',
                                            pricingPlan: pricesData.bySea,
                                        });
                                    }}
                                >
                                    {t('by_sea_button')}{' '}
                                </Button>
                            </HStack>
                        </Flex>
                        {prices.active === 'byAir' ? <ByAirPricing /> : <BySeaPricing />}
                        {/* <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="100%">
                            {prices.pricingPlan.map((trips, index: number) => (
                                <HStack
                                    boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                                    spacing={0}
                                    borderRadius="lg"
                                    w="100%"
                                    key={index.toString()}
                                    align="start"
                                    flexDir={{ base: 'column', lg: 'row' }}
                                >
                                    {trips.map(({ id, amount, currency, direction, timeLimit }) => (
                                        <>
                                            <VStack align="start" key={id} p={6}>
                                                <Heading size="md">{direction}</Heading>
                                                <Text>
                                                    <Box as="strong" fontSize="3xl">
                                                        {new Intl.NumberFormat(locale, {
                                                            style: 'currency',
                                                            currency,
                                                        }).format(amount)}
                                                    </Box>{' '}
                                                    / kg
                                                </Text>

                                                <Text>
                                                    <Box as="strong">{t("timeLimit")}:</Box> {timeLimit}
                                                </Text>
                                            </VStack>
                                            {id % 2 !== 0 ? (
                                                <Divider orientation="vertical" />
                                            ) : null}
                                        </>
                                    ))}
                                </HStack>
                            ))}
                        </SimpleGrid> */}
                    </VStack>
                </VStack>
            </Container>
        </PageLayout>
    );
};

const ByAirPricing = () => {
    const { translate: t } = useTranslator();
    const { locale } = useRouter();

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="100%">
            <HStack
                boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                spacing={0}
                borderRadius="lg"
                w="100%"
                align="start"
                flexDir={{ base: 'column', lg: 'row' }}
            >
                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title1')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(10)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box> {t('by_air.time_limit')}
                    </Text>
                </VStack>

                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title2')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'CFA',
                            }).format(6650)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box> {t('by_air.time_limit')}
                    </Text>
                </VStack>
            </HStack>

            <HStack
                boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                spacing={0}
                borderRadius="lg"
                w="100%"
                align="start"
                flexDir={{ base: 'column', lg: 'row' }}
            >
                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title3')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(12)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box> {t('by_air.time_limit')}
                    </Text>
                </VStack>

                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title4')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'GFr',
                            }).format(100000)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box> {t('by_air.time_limit')}
                    </Text>
                </VStack>
            </HStack>
        </SimpleGrid>
    );
};

const BySeaPricing = () => {
    const { translate: t } = useTranslator();
    const { locale } = useRouter();

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="100%">
            <HStack
                boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                spacing={0}
                borderRadius="lg"
                w="100%"
                align="start"
                flexDir={{ base: 'column', lg: 'row' }}
            >
                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title1')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(3)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box>{' '}
                        {t('by_sea.time_limit_senegal_trip')}
                    </Text>
                </VStack>

                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title2')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'CFA',
                            }).format(2500)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box>{' '}
                        {t('by_sea.time_limit_senegal_trip')}
                    </Text>
                </VStack>
            </HStack>

            <HStack
                boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                spacing={0}
                borderRadius="lg"
                w="100%"
                align="start"
                flexDir={{ base: 'column', lg: 'row' }}
            >
                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title3')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(5)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box>{' '}
                        {t('by_sea.time_limit_guinea_trip')}
                    </Text>
                </VStack>

                <VStack align="start" p={6}>
                    <Heading size="md">{t('pricing_title4')}</Heading>
                    <Text>
                        <Box as="strong" fontSize="3xl">
                            {new Intl.NumberFormat(locale, {
                                style: 'currency',
                                currency: 'GFr',
                            }).format(50000)}
                        </Box>{' '}
                        / kg
                    </Text>

                    <Text>
                        <Box as="strong">{t('timeLimit')}:</Box>{' '}
                        {t('by_sea.time_limit_guinea_trip')}
                    </Text>
                </VStack>
            </HStack>
        </SimpleGrid>
    );
};
