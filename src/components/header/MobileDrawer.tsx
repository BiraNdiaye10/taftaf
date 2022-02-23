import NextLink from 'next/link';
import {
    Drawer,
    DrawerBody,
    CloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Link,
    Box,
    VStack,
    IconButton,
    Flex,
    Menu,
    HStack,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { AuthButtons } from '../auth-buttons';
import { Logo } from '../logo';
import { NavItem } from './header.types';
import { useIsActive } from '@taftaf/hooks/use-is-active';
import { FaBars } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';

import logo from '@taftaf/assets/images/logo.png';

type MobileDrawerProps = {
    navItems: NavItem[];
};

export const MobileDrawer = ({ navItems }: MobileDrawerProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isActive = useIsActive();

    const { translate: t } = useTranslator();

    return (
        <>
            <Box display={{ md: 'block', lg: 'none' }}>
                <IconButton aria-label="menu" icon={<FaBars size={20} />} onClick={onOpen} />
            </Box>

            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader>
                            <Flex justify="space-between">
                                <Logo image={logo as unknown as string} />
                                <CloseButton onClick={onClose} />
                            </Flex>
                        </DrawerHeader>

                        <DrawerBody>
                            <VStack spacing={0} align="start">
                                {navItems.map(({ path, label }, index: number) => {
                                    return path === '#' ? (
                                        <Menu isLazy={true} key={index}>
                                            <MenuButton
                                                borderBottom="1px solid"
                                                borderColor="gray.200"
                                                w="100%"
                                                as={Link}
                                                py={2}
                                                fontWeight="semibold"
                                                _hover={{ color: 'green' }}
                                                textTransform="uppercase"
                                                color={`${
                                                    isActive(Routes.parcelSending) ||
                                                    isActive(Routes.purchaseReshipping)
                                                        ? 'green'
                                                        : null
                                                }`}
                                            >
                                                <HStack>
                                                    <Box>{t('nav.main.services')}</Box>
                                                    <ChevronDownIcon />
                                                </HStack>
                                            </MenuButton>
                                            <MenuList>
                                                {/* MenuItems are not rendered unless Menu is open thanks to isLazy prop on Menu */}
                                                <MenuItem>
                                                    <NextLink href={Routes.parcelSending}>
                                                        <Link w="inherit" textTransform="uppercase">
                                                            {t(
                                                                'nav.dropdown.services.parcel_sending'
                                                            )}
                                                        </Link>
                                                    </NextLink>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NextLink href={Routes.purchaseReshipping}>
                                                        <Link w="inherit" textTransform="uppercase">
                                                            {t(
                                                                'nav.dropdown.services.purchase_reshipping'
                                                            )}
                                                        </Link>
                                                    </NextLink>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NextLink href={Routes.prices}>
                                                        <Link w="inherit" textTransform="uppercase">
                                                            {t('nav.dropdown.services.pricing')}
                                                        </Link>
                                                    </NextLink>
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    ) : (
                                        <NextLink href={path} key={index}>
                                            <Link
                                                fontWeight="semibold"
                                                _hover={{ color: 'green' }}
                                                textTransform="uppercase"
                                                color={`${isActive(path) ? 'green' : null}`}
                                                borderBottom="1px solid"
                                                borderColor="gray.200"
                                                w="100%"
                                                py={2}
                                            >
                                                {label}
                                            </Link>
                                        </NextLink>
                                    );
                                })}
                            </VStack>
                        </DrawerBody>

                        <DrawerFooter
                            display="flex"
                            justifyContent="flex-start"
                            w="100%"
                            maxW="100%"
                            overflow="auto"
                        >
                            <AuthButtons isDisplayed="inDrawer" />
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
