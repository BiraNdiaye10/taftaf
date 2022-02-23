import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    HStack,
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    MenuDivider,
    VStack,
    Box,
} from '@chakra-ui/react';
import { initializeApollo, Routes } from '@taftaf/config';
import { Role, useLogoutMutation } from '@taftaf/graphql';
import { useAuth } from '@taftaf/hooks/use-auth';
import { useTranslator } from '@taftaf/hooks/use-translator';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { UsaFlag, FranceFlag } from '@taftaf/components';

import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BiStore } from 'react-icons/bi';
import { RiAdminLine } from 'react-icons/ri';

type AuthButtonsProps = {
    isDisplayed?: 'inDrawer';
};

export const AuthButtons = ({ isDisplayed }: AuthButtonsProps): JSX.Element => {
    const { loading: authLoading, user } = useAuth();

    const { translate } = useTranslator();
    const { locale, pathname, push } = useRouter();

    const client = initializeApollo();

    const [logout] = useLogoutMutation();

    const changeLanguage = () => {
        push(pathname, pathname, { locale: locale === 'en' ? 'fr' : 'en' });
    };

    return (
        <HStack spacing={5} align={locale === 'fr' ? 'flex-end' : ''}>
            <HStack align="flex-end" spacing={6}>
                {authLoading ? (
                    <Menu>
                        <MenuButton
                            colorScheme="green"
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            isLoading={authLoading}
                        >
                            {translate('nav.dropdown.account')}
                        </MenuButton>{' '}
                    </Menu>
                ) : user ? (
                    <Menu>
                        <MenuButton colorScheme="green" as={Button} rightIcon={<ChevronDownIcon />}>
                            {translate('nav.dropdown.account')}
                        </MenuButton>
                        <MenuList>
                            <NextLink href={Routes.profile}>
                                <MenuItem icon={<CgProfile />}>
                                    {translate('nav.dropdown.profile')}
                                </MenuItem>
                            </NextLink>

                            <NextLink href={Routes.storePackages}>
                                <MenuItem icon={<BiStore />}>
                                    {translate('nav.dropdown.store')}
                                </MenuItem>
                            </NextLink>

                            {user.role === Role.Admin && (
                                <NextLink href={Routes.adminDashboard}>
                                    <MenuItem icon={<RiAdminLine />}>
                                        {translate('nav.dropdown.admin')}
                                    </MenuItem>
                                </NextLink>
                            )}
                            <MenuDivider />

                            <MenuItem
                                icon={<CgLogOut />}
                                onClick={async () => {
                                    try {
                                        const response = await logout();

                                        if (response.data.logout) {
                                            client.cache.reset().then(() => {
                                                push('/');
                                            });
                                        }
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}
                            >
                                {translate('nav.dropdown.logout')}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <Box>
                        {isDisplayed === 'inDrawer' ? (
                            <VStack spacing={4} align="start">
                                <NextLink href="/login">
                                    <Button variant="outline">{translate('nav.sign_in')}</Button>
                                </NextLink>

                                <NextLink href={Routes.inscription}>
                                    <Button colorScheme="green">{translate('nav.sign_up')}</Button>
                                </NextLink>
                            </VStack>
                        ) : (
                            <HStack spacing={3}>
                                <NextLink href="/login">
                                    <Button variant="outline">{translate('nav.sign_in')}</Button>
                                </NextLink>

                                <NextLink href={Routes.inscription}>
                                    <Button colorScheme="green">{translate('nav.sign_up')}</Button>
                                </NextLink>
                            </HStack>
                        )}
                    </Box>
                )}

                <Button
                    leftIcon={
                        locale === 'en' ? <FranceFlag boxSize="20px" /> : <UsaFlag boxSize="20px" />
                    }
                    onClick={changeLanguage}
                >
                    {locale === 'en' ? 'FR' : 'EN'}
                </Button>
            </HStack>
        </HStack>
    );
};
