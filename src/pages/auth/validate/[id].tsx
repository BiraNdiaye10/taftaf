import { Box, Heading, Text, Icon, VStack, Spinner, useToast } from '@chakra-ui/react';
import { TiArrowForward } from 'react-icons/ti';
import { Routes } from '@taftaf/config';

import { useValidateAccountMutation } from '@taftaf/graphql';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslator } from '@taftaf/hooks';

const ValidatePage = (): JSX.Element => {
    const [validateAccount] = useValidateAccountMutation();
    const router = useRouter();

    const { translate: t } = useTranslator();

    const toast = useToast();

    useEffect(() => {
        const query = router.query;

        const runValidateAccountQuery = async () => {
            try {
                const response = await validateAccount({
                    variables: { token: query.id as string },
                });

                if (response.data) {
                    toast({
                        title: t('toasts.account_validation.success.title'),
                        description: t('toasts.signup.success.description'),
                        status: 'success',
                        duration: 150000,
                        isClosable: true,
                        position: 'top-right',
                    });
                    router.push(Routes.storePackages, undefined, { shallow: true });
                }
            } catch (error) {
                toast({
                    title: t('toasts.account_validation.error.title'),
                    description: t('toasts.signup.user_registered.description'),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                });
                router.push(Routes.login);
            }
        };

        runValidateAccountQuery();
    }, [router, t, toast, validateAccount]);

    const ValidateAccountLoader = () => (
        <>
            <Icon as={TiArrowForward} boxSize={10} />
            <Heading size="md">{t('account_validation.title')}</Heading>
            <Text>{t('account_validation.description')}</Text>
            <Spinner color="green.500" thickness="4px" />
        </>
    );

    return (
        <Box
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW="90%"
            m="0 auto"
            w="100%"
        >
            <Box w="lg" boxShadow="card" borderRadius="lg" textAlign="center" p={8}>
                <VStack>
                    <ValidateAccountLoader />
                </VStack>
            </Box>
        </Box>
    );
};

export default ValidatePage;
/*

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<any> => {
    const { id } = ctx.query;

    const client = initializeApollo();

    const response = await client.mutate({
        mutation: ValidateAccountDocument,
        variables: { validationAccountLinkId: id },
    });

    if (response.data) {
        const { accessToken, refreshToken } = response.data.validateUserAccount;

        nookies.set(ctx, 'refreshToken', refreshToken, {
            httpOnly: false,
            maxAge: 60 * 60 * 24 * 90 * 1000,
            secure: process.env['NODE_ENV'] === 'production',
            sameSite: 'lax',
            path: '/',
            domain: 'api-taftaf.herokuapp.com',
        });

        nookies.set(ctx, 'accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30 * 1000,
            secure: process.env['NODE_ENV'] === 'production',
            sameSite: 'lax',
            path: '/',
            domain: 'api-taftaf.herokuapp.com',
        });

        return {
            redirect: {
                destination: Routes.storePackages,
                statusCode: 302,
            },
        };
    }

    return {
        redirect: {
            destination: '/',
            statusCode: 302,
        },
    };
};
*/
