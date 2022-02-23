import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { APP_NAME, Routes } from '@taftaf/config';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

type AdminLayoutProps = {
    title?: string;
    path?: string;
    children: ReactNode;
};
export const AdminLayout = ({ title, path, children }: AdminLayoutProps): JSX.Element => {
    return (
        <Box>
            <NextSeo
                title={`${title || 'Dashboard'} – ${APP_NAME}`}
                canonical={`${Routes.base}/${path}`}
                openGraph={{
                    url: `${Routes.base}/${path}`,
                    title: `${title} – ${APP_NAME}`,
                }}
            />

            <Box>
                <Header />
                <Box as="main" overflow="hidden" mx={5}>
                    <Sidebar />
                    <Content>{children}</Content>
                </Box>

                {/* Footer */}
            </Box>
        </Box>
    );
};
