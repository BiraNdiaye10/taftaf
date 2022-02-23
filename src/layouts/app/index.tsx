import React, { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { APP_NAME, Routes } from '@taftaf/config';
import { Footer, Header } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';

export type AppLayoutProps = {
    title?: string;
    path?: string;
    children: ReactNode;
};
export const AppLayout = ({ title, path, children }: AppLayoutProps): JSX.Element => {
    const { translate } = useTranslator();

    const navItems = [
        {
            path: Routes.storePackages,
            label: translate('nav.account.parcel'),
        },

        {
            path: Routes.storeOrders,
            label: translate('nav.account.orders'),
        },

        {
            path: Routes.storeTracker,
            label: translate('nav.account.tracking'),
        },
    ];

    return (
        <Box display="flex" flexDir="column" height="100vh" justifyContent="space-between">
            <NextSeo
                title={`${title || 'Home'} – ${APP_NAME}`}
                canonical={`${Routes.base}/${path}`}
                openGraph={{
                    url: `${Routes.base}/${path}`,
                    title: `${title} – ${APP_NAME}`,
                }}
            />

            <Header navItems={navItems} />

            <Container maxW="container.xl" my={24}>
                {children}
            </Container>

            <Footer />
        </Box>
    );
};
