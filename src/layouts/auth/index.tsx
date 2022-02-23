import React from 'react';
import { Container, Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { PageLayout, PageLayoutProps } from '@taftaf/layouts';

type AuthLayoutProps = PageLayoutProps;

export const AuthLayout = ({ children, title }: AuthLayoutProps): JSX.Element => {
    return (
        <PageLayout title={title}>
            <Box bgImage="url('images/auth-bg.png')" bgSize="cover">
                <Container maxW="container.xl">
                    <Flex align="center" justify="center" h="100vh">
                        {children}
                    </Flex>
                </Container>
            </Box>
        </PageLayout>
    );
};
