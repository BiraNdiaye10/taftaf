import React from 'react';
import { Box, Divider, Icon, Stack, Text } from '@chakra-ui/react';
import { RiDashboardFill, RiLuggageCartLine, RiSettings3Line } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import { chakra, PropsOf, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaUserFriends } from 'react-icons/fa';
import { useTranslator } from '@taftaf/hooks/use-translator';

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
    href?: string;
    icon?: React.ReactElement;
};

const StyledLink = React.forwardRef(function StyledLink(
    props: PropsOf<typeof chakra.a> & { isActive?: boolean }
) {
    const { ref, isActive, ...rest } = props;

    return (
        <chakra.a
            aria-current={isActive ? 'page' : undefined}
            ref={ref}
            width="120px"
            display="flex"
            flexDir="column"
            alignItems="center"
            px="2"
            py={5}
            fontSize="sm"
            fontWeight="bold"
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            transition="all 0.2s"
            borderLeft="5px solid"
            borderColor="transparent"
            _hover={{
                bg: 'green.50',
                borderLeft: '5px solid',
                borderColor: 'green.500',
            }}
            _activeLink={{
                bg: 'green.50',
                borderLeft: '5px solid',
                borderColor: 'green.500',
            }}
            {...rest}
        />
    );
});

const SidebarLink = (props: SidebarLinkProps) => {
    const { href, children, ...rest } = props;

    const { pathname } = useRouter();

    const isActive = pathname.startsWith(href);

    return (
        <chakra.div
            userSelect="none"
            display="flex"
            width="full"
            alignItems="center"
            lineHeight="1.5rem"
            {...rest}
        >
            <NextLink href={href} passHref>
                <StyledLink isActive={isActive}>{children}</StyledLink>
            </NextLink>
        </chakra.div>
    );
};

export const Sidebar = (): JSX.Element => {
    const { translate } = useTranslator();

    const sidebarLinks = [
        {
            id: 1,
            icon: RiDashboardFill,
            text: translate('nav.admin.dashboard'),
            path: '/admin/dashboard',
        },
        {
            id: 2,
            icon: FaUserFriends,
            text: translate('nav.admin.users'),
            path: '/admin/users',
        },

        {
            id: 3,
            icon: GoPackage,
            text: translate('nav.admin.parcels'),
            path: '/admin/packages',
        },

        {
            id: 4,
            icon: RiLuggageCartLine,
            text: translate('nav.admin.orders'),
            path: '/admin/orders',
        },

        {
            id: 5,
            icon: RiSettings3Line,
            text: translate('nav.admin.settings'),
            path: '/admin/settings',
        },
    ];
    return (
        <Box
            as="aside"
            bg="white"
            pos="fixed"
            top="70px"
            left="0"
            w="120px"
            overflowY="auto"
            boxShadow="0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08)"
            height="calc(100vh - 70px)"
            zIndex="0"
            display={{
                base: 'none',
                md: 'flex',
            }}
            alignItems="center"
            justifyContent="center"
        >
            <Stack spacing={2}>
                {sidebarLinks.map(({ id, icon, path, text }, index) => (
                    <Box key={id}>
                        <SidebarLink
                            style={{ display: 'flex', flexDirection: 'column' }}
                            href={path}
                        >
                            <Icon boxSize={8} as={icon} />
                            <Text>{text}</Text>
                        </SidebarLink>
                        {index + 1 === sidebarLinks.length ? null : <Divider />}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};
