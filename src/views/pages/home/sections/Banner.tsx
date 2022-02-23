import React from 'react';
import NextImage from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, SimpleGrid, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { useTranslator } from '@taftaf/hooks/use-translator';
import hero from '@taftaf/assets/hero.png';

export const Banner = (): JSX.Element => {
    const { translate } = useTranslator();

    const services = [
        {
            id: 1,
            text: translate('nav.services.by_air'),
            buttonText: translate('services.button_text'),
            path: 'parcel-shipping',
        },

        {
            id: 2,
            text: translate('nav.services.by_sea'),
            buttonText: translate('services.button_text'),
            path: 'parcel-shipping',
        },

        {
            id: 3,
            text: translate('nav.services.we_shop_for_you'),
            buttonText: translate('services.button_text'),
            path: 'we-shop',
        },

        {
            id: 4,
            text: translate('nav.services.you_shop_for_you'),
            buttonText: translate('services.button_text'),
            path: 'you-shop',
        },
    ];

    return (
        <Box as="section" bg="#FBFBFD" py={20}>
            <Container maxW="container.xl">
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={10}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box>
                        <VStack align="start" spacing={10}>
                            <Heading
                                wordBreak="normal"
                                size="2xl"
                                lineHeight="normal"
                                color="gray.700"
                            >
                                {translate('intro')}
                            </Heading>
                            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10} w="100%">
                                {services.map(({ id, text, path, buttonText }) => (
                                    <VStack
                                        w="100%"
                                        boxShadow="0px 0px 25px rgba(54, 91, 125, 0.1)"
                                        bg="white"
                                        p={5}
                                        borderRadius="lg"
                                        spacing={5}
                                        key={id}
                                    >
                                        <Text
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            textAlign="center"
                                            color="gray.700"
                                        >
                                            {text}
                                        </Text>

                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            rightIcon={<ArrowForwardIcon />}
                                            href={`#${path}`}
                                        >
                                            {buttonText}
                                        </Button>
                                    </VStack>
                                ))}
                            </SimpleGrid>
                        </VStack>
                    </Box>

                    <Box as="figure">
                        <NextImage src={hero} alt="Hero" placeholder="blur" />
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};
