import { Container, Heading, Box, VStack, Text } from '@chakra-ui/react';
import { AdminLayout } from '@taftaf/layouts';
import React from 'react';
import { useAddressQuery } from '@taftaf/graphql';
import { UpdateAddress } from './UpdateAddress';
import { Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks';

export const SettingsView = (): JSX.Element => {
    const { data, loading } = useAddressQuery();

    const { translate: t } = useTranslator();

    return (
        <AdminLayout title="Settings">
            <Container
                maxW="container.xl"
                mt={8}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box w="lg" boxShadow="card" borderRadius="xl" p={5}>
                    {!data && loading ? (
                        <Loader />
                    ) : (
                        <VStack align="start" spacing={3}>
                            <Heading size="md">{t('title')}</Heading>

                            <VStack align="start">
                                <Text>
                                    <strong>{t('input_fields.postalCode')}: </strong>
                                    {data?.address.postalCode}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.address')}: </strong>
                                    {data?.address.street}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.city')}: </strong>
                                    {data?.address.city}
                                </Text>

                                <Text>
                                    <strong>{t('input_fields.country')}: </strong>
                                    {data?.address.country}
                                </Text>
                            </VStack>
                            <UpdateAddress address={data?.address} />
                        </VStack>
                    )}
                </Box>
            </Container>
        </AdminLayout>
    );
};
