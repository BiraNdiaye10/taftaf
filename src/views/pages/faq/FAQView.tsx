import {
    VStack,
    Heading,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
    Button,
    HStack,
    Container,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { PageLayout } from '@taftaf/layouts';
import React from 'react';

export const FAQView = (): JSX.Element => {
    const { translate: t } = useTranslator();
    return (
        <PageLayout title={t('title')}>
            <Container maxW="container.xl">
                <VStack w="100%">
                    <VStack align="center" mb={10}>
                        <Heading size="2xl" textAlign="center">
                            {t('title')}
                        </Heading>
                    </VStack>

                    <HStack
                        align="start"
                        w="full"
                        maxW="100%"
                        justify="center"
                        flexDir={{ base: 'column-reverse', lg: 'row' }}
                    >
                        <VStack
                            align={{ base: 'center', lg: 'start' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                            spacing={3}
                            mt={{ base: 12, lg: 0 }}
                            w={{ base: 'full', lg: 'md' }}
                            maxW="100%"
                            mr={{ base: 0, lg: 12 }}
                        >
                            <Heading size="md">{t('contact_title')}</Heading>
                            <Text>{t('contact_info')}</Text>

                            <NextLink href={Routes.contact}>
                                <Button colorScheme="green">{t('button_text')}</Button>
                            </NextLink>
                        </VStack>

                        <Accordion
                            w={{ base: '100%', lg: 'lg' }}
                            maxW="100%"
                            style={{ marginInlineStart: 0 }}
                            allowToggle
                        >
                            <VStack spacing={3}>
                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq1.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq1.response')}</AccordionPanel>
                                </AccordionItem>

                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq2.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq2.response')}</AccordionPanel>
                                </AccordionItem>

                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq3.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq3.response')}</AccordionPanel>
                                </AccordionItem>

                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq4.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq4.response')}</AccordionPanel>
                                </AccordionItem>

                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq5.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq5.response')}</AccordionPanel>
                                </AccordionItem>

                                <AccordionItem
                                    w="100%"
                                    borderRadius="lg"
                                    border="1px solid #EDEFF2"
                                >
                                    <h2>
                                        <AccordionButton
                                            maxW="100%"
                                            p={5}
                                            _hover={{ bg: 'gray.50' }}
                                            borderRadius="lg"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="bold">
                                                {t('faq6.question')}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={5}>{t('faq6.response')}</AccordionPanel>
                                </AccordionItem>
                            </VStack>
                        </Accordion>
                    </HStack>
                </VStack>
            </Container>
        </PageLayout>
    );
};
