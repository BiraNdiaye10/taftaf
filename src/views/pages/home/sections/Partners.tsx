import { Box, VStack, Heading, WrapItem, chakra, Wrap } from '@chakra-ui/react';
import { partners } from '@taftaf/data';
import { useTranslator } from '@taftaf/hooks';
import React from 'react';

export const Partners = (): JSX.Element => {
    const { translate: t } = useTranslator();

    return (
        <Box my={32}>
            <VStack align="center" mb={10}>
                <Heading size="2xl" textAlign="center">
                    {t('partners.title')}
                </Heading>
                <Heading as="h4" size="sm" fontWeight="normal" textAlign="center">
                    {t('partners.subtitle')}
                </Heading>
            </VStack>

            <Box as="section">
                <Wrap maxW="800px" mx="auto" justify="center" align="center" spacing="24px">
                    {partners
                        .filter((user) => user.image.includes('.'))
                        .map((user) => (
                            <WrapItem key={user.id} bg="white" p="5" rounded="md">
                                <chakra.img
                                    key={user.image}
                                    alt={user.name}
                                    h="24px"
                                    w="auto"
                                    src={user.image}
                                    loading="lazy"
                                />
                            </WrapItem>
                        ))}
                </Wrap>
            </Box>
        </Box>
    );
};
