import { Heading, Box, Avatar, Flex, VStack, Text, HStack } from '@chakra-ui/react';
import { Loader } from '@taftaf/components';
import { useMeQuery, useUserQuery } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { AppLayout } from '@taftaf/layouts';
import React from 'react';
import { EditProfileView } from './EditProfile';

export const ProfileView = (): JSX.Element => {
    const { data } = useMeQuery();

    const { data: profile, loading: queryingProfile } = useUserQuery({
        variables: { id: data?.me?.id },
    });

    const { translate: t } = useTranslator();

    return (
        <AppLayout title={`${profile?.user?.firstName} ${profile?.user?.lastName}`}>
            <Box w="lg" boxShadow="card" borderRadius="xl" p={5} maxW="100%" m="0 auto">
                {queryingProfile ? (
                    <Loader />
                ) : (
                    <VStack align="start" spacing={10}>
                        <Flex wrap="wrap" align="center" justify="space-between" w="100%">
                            <HStack align="start">
                                <Avatar name={`${data?.me.firstName} ${data?.me?.lastName}`} />

                                <VStack align="start" spacing={0.1}>
                                    <Text>
                                        <strong>{t('profile_name')}: </strong>
                                        {`${profile?.user?.firstName} ${profile?.user?.lastName}`}
                                    </Text>
                                    <Text>
                                        <strong>Email: </strong>
                                        {`${profile?.user?.email}`}
                                    </Text>
                                    <Text>
                                        <strong>Profession: </strong>
                                        {`${profile?.user?.profession ?? '---'}`}
                                    </Text>
                                </VStack>
                            </HStack>

                            <EditProfileView {...profile} />
                        </Flex>

                        <Box
                            borderRadius="xl"
                            p={3}
                            border="1px solid"
                            borderColor="gray.100"
                            w="100%"
                        >
                            <VStack align="start" spacing={3}>
                                <Heading size="md">{t('profile_online_address')}</Heading>

                                <VStack align="start" spacing={0.1}>
                                    <Text>
                                        <strong>{t('input_fields.address')}: </strong>
                                        {profile?.user?.onlineAddress.street}
                                    </Text>

                                    <Text>
                                        <strong>{t('profile_online_id')}: </strong>
                                        TAFTAF - {profile?.user?.customerId}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.postalCode')}: </strong>
                                        {profile?.user?.onlineAddress.postalCode}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.city')}: </strong>
                                        {profile?.user?.onlineAddress.city}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.country')}: </strong>
                                        {profile?.user?.onlineAddress.country}
                                    </Text>
                                </VStack>
                            </VStack>
                        </Box>

                        <Box
                            borderRadius="xl"
                            p={3}
                            border="1px solid"
                            borderColor="gray.100"
                            w="100%"
                        >
                            <VStack align="start" spacing={3}>
                                <Heading size="md">{t('profile_shipping_address')}</Heading>

                                <VStack align="start" spacing={0.1}>
                                    <Text>
                                        <strong>{t('input_fields.address')}: </strong>
                                        {profile?.user?.shippingAddress.street}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.postalCode')}: </strong>
                                        {profile?.user?.shippingAddress.postalCode}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.city')}: </strong>
                                        {profile?.user?.shippingAddress.city}
                                    </Text>

                                    <Text>
                                        <strong>{t('input_fields.country')}: </strong>
                                        {profile?.user?.shippingAddress.country}
                                    </Text>
                                </VStack>
                            </VStack>
                        </Box>
                    </VStack>
                )}
            </Box>
        </AppLayout>
    );
};
