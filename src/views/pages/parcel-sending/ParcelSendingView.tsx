import NextImage from 'next/image';
import { Container, Heading, SimpleGrid, VStack, Text, Box, HStack } from '@chakra-ui/react';
import { PageLayout } from '@taftaf/layouts';
import React from 'react';
import { useTranslator } from '@taftaf/hooks/use-translator';

import airplane from '@taftaf/assets/images/taftaf-airplane.png';
import ship from '@taftaf/assets/images/taftaf-ship.png';

export const ParcelSendingView = (): JSX.Element => {
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
                        >
                            <Box w="100%">
                                <NextImage src={airplane} layout="intrinsic" placeholder="blur" />
                            </Box>

                            <VStack align="start" w="md" maxW="100%" spacing={6}>
                                <Heading>{t('by_air.title')}</Heading>
                                <VStack align="start" spacing={3}>
                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-airplane.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_air.content.item1')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-umbrella.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_air.content.item2')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-agenda.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_air.content.item3')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-customer-service.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_air.content.item4')}</Text>
                                        </HStack>
                                    </Box>
                                </VStack>
                            </VStack>
                        </SimpleGrid>
                    </VStack>

                    <VStack align="center" spacing={24}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacing={15}
                            justifyContent="space-between"
                        >
                            <VStack align="start" w="md" maxW="100%" spacing={6}>
                                <Heading>{t('by_sea.title')}</Heading>
                                <VStack align="start" spacing={3}>
                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-ship.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_sea.content.item1')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-umbrella.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_sea.content.item2')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-agenda.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_sea.content.item3')}</Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <HStack>
                                            <Box>
                                                <Box
                                                    bg="gray.100"
                                                    borderRadius="lg"
                                                    w="35px"
                                                    h="35px"
                                                >
                                                    <NextImage
                                                        src="/images/icons/icon-customer-service.svg"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </Box>
                                            </Box>
                                            <Text>{t('by_sea.content.item4')}</Text>
                                        </HStack>
                                    </Box>
                                </VStack>
                            </VStack>

                            <Box w="100%">
                                <NextImage src={ship} placeholder="blur" layout="intrinsic" />
                            </Box>
                        </SimpleGrid>
                    </VStack>
                </VStack>
            </Container>
        </PageLayout>
    );
};
