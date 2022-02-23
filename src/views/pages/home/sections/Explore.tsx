import NextImage from 'next/image';
import NextLink from 'next/link';
import { Box, VStack, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import React from 'react';
// import { FaLock, FaAddressCard, FaGifts } from 'react-icons/fa';

export const Explore = (): JSX.Element => {
    const { translate } = useTranslator();

    return (
        <Box mb={32} mt={20}>
            <VStack align="start" spacing={16} w="100%">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Box p={4} boxShadow="card" borderRadius="lg">
                        <VStack align="start" spacing={5}>
                            <Box bg="gray.100" borderRadius="full" w="50px" h="50px">
                                <NextImage
                                    src="/images/icons/icon-user.svg"
                                    width="50px"
                                    height="50px"
                                />
                            </Box>
                            <Heading fontSize="1.6rem">{translate('explore.signup.title')}</Heading>
                            <Text>{translate('explore.signup.text')}</Text>
                        </VStack>
                    </Box>

                    <Box py={5} px={5} boxShadow="card" borderRadius="lg">
                        <VStack align="start" spacing={5}>
                            <Box bg="gray.100" borderRadius="full" w="50px" h="50px">
                                <NextImage
                                    src="/images/icons/icon-cart.svg"
                                    width="50px"
                                    height="50px"
                                />
                            </Box>
                            <Heading fontSize="1.6rem">{translate('explore.order.title')}</Heading>
                            <Text>{translate('explore.order.text')}</Text>
                        </VStack>
                    </Box>

                    <Box py={5} px={5} boxShadow="card" borderRadius="lg">
                        <VStack align="start" spacing={5}>
                            <Box bg="gray.100" borderRadius="full" w="50px" h="50px">
                                <NextImage
                                    src="/images/icons/icon-box.svg"
                                    width="50px"
                                    height="50px"
                                />
                            </Box>
                            <Heading fontSize="1.6rem">
                                {translate('explore.combine.title')}
                            </Heading>
                            <Text>{translate('explore.combine.text')}</Text>
                        </VStack>
                    </Box>
                </SimpleGrid>

                <Box textAlign="center" mt={10} w="100%">
                    <NextLink href={Routes.inscription}>
                        <Button colorScheme="green" size="lg">
                            {translate('explore.button')}
                        </Button>
                    </NextLink>
                </Box>
            </VStack>
        </Box>
    );
};
