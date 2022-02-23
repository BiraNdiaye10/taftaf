import React from 'react';
import { PageLayout } from '@taftaf/layouts';
import { Container, Heading, VStack } from '@chakra-ui/react';

import { Stepper } from './Stepper';
import { useTranslator } from '@taftaf/hooks/use-translator';

export const SignupView = (): JSX.Element => {
    const { translate } = useTranslator();

    return (
        <PageLayout title={translate('document_title')}>
            <Container maxW="container.xl">
                <VStack align="center" spacing={20} w="100%">
                    <Heading>{translate('signup_title')}</Heading>

                    <Stepper />
                </VStack>
            </Container>
        </PageLayout>
    );
};
