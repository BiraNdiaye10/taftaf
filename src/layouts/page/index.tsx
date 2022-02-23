import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { APP_NAME, Routes } from '@taftaf/config';
import { Footer, Header } from '@taftaf/components';
// import { useTranslator } from '@taftaf/hooks/use-translator';
import { useRouter } from 'next/router';

export type PageLayoutProps = {
    title?: string;
    path?: string;
    children: ReactNode;
};
export const PageLayout = ({ title, path, children }: PageLayoutProps): JSX.Element => {
    const { pathname } = useRouter();

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

            <Header navItems={[]} />

            <Box as="main" my={pathname === Routes.home ? 0 : 24}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
};
