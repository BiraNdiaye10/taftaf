import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { AuthButtons, Logo } from '@taftaf/components';

import logo from '@taftaf/assets/images/logo.png';

export const Header = (): JSX.Element => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding={9}
            as="header"
            height="80px"
            bg="white"
            position="fixed"
            width="100%"
            zIndex="10"
            boxShadow="card"
        >
            <Logo image={logo as unknown as string} />
            {/* Search */}
            <Flex>
                <AuthButtons />
            </Flex>
        </Box>
    );
};
