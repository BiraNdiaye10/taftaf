import React from 'react';
import { Box, Container, Flex, HStack, IconButton, Link, Text } from '@chakra-ui/react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer = (): JSX.Element => {
    // const { translate: t } = useTranslator();

    return (
        <Box as="footer" bg="gray.50" borderTop="1px solid" borderColor="gray.100" py="8">
            {/* <Container maxW="container.xl" pb={12}>
                <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={10}>
                    <Box>
                        <VStack align="start" spacing={5}>
                            <Heading
                                as="h4"
                                color="gray.100"
                                fontSize="xl"
                                fontWeight="semibold"
                                textTransform="uppercase"
                            >
                                {t('nav.services.title')}
                            </Heading>

                            <VStack align="start">
                                <NextLink href={Routes.parcelSending}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.dropdown.services.parcel_sending')}
                                    </Link>
                                </NextLink>

                                <NextLink href={Routes.purchaseReshipping}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.dropdown.services.purchase_reshipping')}
                                    </Link>
                                </NextLink>
                                <NextLink href={Routes.prices}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.dropdown.services.pricing')}
                                    </Link>
                                </NextLink>
                            </VStack>
                        </VStack>
                    </Box>

                    <Box>
                        <VStack align="start" spacing={5}>
                            <Heading
                                as="h4"
                                color="gray.100"
                                fontSize="xl"
                                fontWeight="semibold"
                                textTransform="uppercase"
                            >
                                {t('nav.footer.help.title')}
                            </Heading>

                            <VStack align="start">
                                <NextLink href={Routes.faq}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.footer.help.faq')}
                                    </Link>
                                </NextLink>
                                <NextLink href={Routes.prohibitedItems}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.footer.help.prohibited_items')}
                                    </Link>
                                </NextLink>
                            </VStack>
                        </VStack>
                    </Box>

                    <Box>
                        <VStack align="start" spacing={5}>
                            <Heading
                                as="h4"
                                color="gray.100"
                                fontSize="xl"
                                fontWeight="semibold"
                                textTransform="uppercase"
                            >
                                {t('nav.footer.locations.title')}
                            </Heading>

                            <VStack align="start">
                                <NextLink href={Routes.locations}>
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.footer.locations.werehouse_locations')}
                                    </Link>
                                </NextLink>

                                <NextLink href="#">
                                    <Link color="gray.100" textTransform="uppercase" fontSize="sm">
                                        {t('nav.footer.locations.relay_points')}
                                    </Link>
                                </NextLink>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack align="start" spacing={5}>
                            <Heading
                                as="h4"
                                color="gray.100"
                                fontSize="xl"
                                fontWeight="semibold"
                                textTransform="uppercase"
                            >
                                {t('nav.footer.customer_service.title')}
                            </Heading>

                            <List spacing={3}>
                                <ListItem color="gray.100" display="flex" alignItems="center">
                                    <ListIcon boxSize={3} as={FaEnvelope} />
                                    <Box as="span" textTransform="uppercase" fontSize="sm">
                                        Email:
                                    </Box>{' '}
                                    <Link href="mailto:contact@taftaf.net">contact@taftaf.net</Link>
                                </ListItem>

                                <ListItem
                                    color="gray.100"
                                    display="flex"
                                    alignItems="center"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                >
                                    <ListIcon boxSize={3} as={FaPhoneAlt} />
                                    {t('nav.footer.customer_service.tel_france')}: 0033 607337387
                                </ListItem>
                                <ListItem
                                    color="gray.100"
                                    display="flex"
                                    alignItems="center"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                >
                                    <ListIcon boxSize={3} as={FaPhoneAlt} />
                                    {t('nav.footer.customer_service.tel_senegal')}: +221 77 712 05
                                    05
                                </ListItem>
                                <ListItem
                                    color="gray.100"
                                    display="flex"
                                    alignItems="center"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                >
                                    <ListIcon boxSize={3} as={FaPhoneAlt} />
                                    {t('nav.footer.customer_service.tel_guinea')}: +224 628 48 74 77
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container> */}

            {/* Bottom footer */}
            <Box>
                <Container maxW="container.xl">
                    <Flex
                        flexDir={{ base: 'column', md: 'row' }}
                        align="center"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Text color="gray.700">
                            © {new Date().getFullYear()} taftaf - All Rights Reserved
                        </Text>
                        <HStack spacing={5} justify={{ base: 'center', md: 'flex-end' }}>
                            <Link href="https://www.facebook.com/taftaf.net/" target="_blank">
                                <IconButton
                                    aria-label="Facebook Icon"
                                    size="sm"
                                    icon={<FaFacebookF />}
                                />
                            </Link>

                            <Link href="https://wa.me/+33607337387">
                                <IconButton
                                    aria-label="Whatsapp Icon"
                                    size="sm"
                                    icon={<FaWhatsapp />}
                                />
                            </Link>

                            <Link href="https://www.instagram.com/taftaf_net/?hl=en">
                                <IconButton
                                    aria-label="Instagram Icon"
                                    size="sm"
                                    icon={<FaInstagram />}
                                />
                            </Link>
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
};
