import {
    Container,
    Heading,
    SimpleGrid,
    VStack,
    Text,
    Box,
    ListItem,
    OrderedList,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { PageLayout } from '@taftaf/layouts';
import React from 'react';
import { useTranslator } from '@taftaf/hooks/use-translator';

export const PurchaseReshippingView = (): JSX.Element => {
    const { translate: t } = useTranslator();
    return (
        <PageLayout title={t('title')}>
            <Container maxW="container.lg">
                <VStack spacing={26}>
                    <VStack align="center" spacing={{ base: 8, md: 24 }}>
                        <Heading size="2xl" textAlign="center">
                            {t('title')}
                        </Heading>

                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacing={15}
                            justifyContent="space-between"
                            w="100%"
                        >
                            <Box w="100%">
                                <NextImage
                                    src="/images/services/illustrator1.svg"
                                    width={400}
                                    height={400}
                                    layout="intrinsic"
                                />
                            </Box>

                            <VStack align="start" w="md" maxW="100%">
                                <Heading>{t('you_buy.title')}</Heading>
                                <Text>
                                    <OrderedList spacing={4}>
                                        <ListItem>{t('you_buy.content.item1')}</ListItem>
                                        <ListItem>{t('you_buy.content.item2')}</ListItem>
                                        <ListItem>{t('you_buy.content.item3')}</ListItem>
                                        <ListItem>{t('you_buy.content.item4')}</ListItem>
                                    </OrderedList>
                                </Text>
                            </VStack>
                        </SimpleGrid>
                    </VStack>

                    <VStack align="center" spacing={24}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacing={15}
                            justifyContent="space-between"
                            w="100%"
                        >
                            <VStack align="start" w="md" maxW="100%">
                                <Heading>{t('we_buy.title')}</Heading>
                                <Text>
                                    <OrderedList spacing={4}>
                                        <ListItem>{t('we_buy.content.item1')}</ListItem>
                                        <ListItem>{t('we_buy.content.item2')}</ListItem>
                                        <ListItem>{t('we_buy.content.item3')}</ListItem>
                                        <ListItem>{t('we_buy.content.item4')}</ListItem>
                                    </OrderedList>
                                </Text>
                            </VStack>

                            <Box w="100%">
                                <NextImage
                                    src="/images/services/illustrator2.svg"
                                    width={400}
                                    height={400}
                                    layout="intrinsic"
                                />
                            </Box>
                        </SimpleGrid>
                    </VStack>
                </VStack>
            </Container>
        </PageLayout>
    );
};
