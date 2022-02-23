import React from 'react';
import { Container } from '@chakra-ui/react';

import { PageLayout } from '@taftaf/layouts/page';
import { Banner, Explore, ParcelSending, Testimonials, Weshop, Partners, Brands } from './sections';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Youshop } from './sections/Youshop';

export const HomeView = (): JSX.Element => {
    const { translate } = useTranslator();

    return (
        <PageLayout title={translate('nav.main.home')}>
            <Banner />
            <Container maxW="container.xl">
                <Explore />

                <Youshop />

                <Weshop />

                <Brands />

                <ParcelSending />

                <Partners />
            </Container>

            <Testimonials />
        </PageLayout>
    );
};
