import NextLink from 'next/link';
import React from 'react';
import { Container, Box, Flex, HStack, Link } from '@chakra-ui/react';
import Sticky from 'react-stickynode';
import { Logo } from '@taftaf/components';
import { AuthButtons } from '@taftaf/components/auth-buttons';
import { HeaderContainer } from './HeaderContainer';
import { NavItem } from './header.types';
import { MobileDrawer } from './MobileDrawer';

import logo from '@taftaf/assets/images/logo.png';
import { useIsActive } from '@taftaf/hooks';

type HeaderProps = {
    navItems?: NavItem[];
};

export const Header = ({ navItems }: HeaderProps): JSX.Element => {
    const isActive = useIsActive();

    // const { translate: t } = useTranslator();

    return (
        <HeaderContainer>
            <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
                <Box py={5} bgColor="white" as="header">
                    <Container maxW="container.xl">
                        <Flex justify="space-between" align="center">
                            <Logo image={logo as unknown as string} />

                            <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
                                {navItems.length &&
                                    navItems.map(({ path, label }, index: number) => {
                                        return path !== '#' ? (
                                            <NextLink href={path} key={index}>
                                                <Link
                                                    fontWeight="semibold"
                                                    _hover={{ color: 'green' }}
                                                    textTransform="uppercase"
                                                    color={`${isActive(path) ? 'green' : null}`}
                                                >
                                                    {label}
                                                </Link>
                                            </NextLink>
                                        ) : null;
                                    })}
                            </HStack>
                            <Box display={{ base: 'none', lg: 'block' }}>
                                <AuthButtons />
                            </Box>
                            <MobileDrawer navItems={navItems} />
                        </Flex>
                    </Container>
                </Box>
            </Sticky>
        </HeaderContainer>
    );
};
