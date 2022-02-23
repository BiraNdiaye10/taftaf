import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';

import { theme } from '@taftaf/theme';
import { useApollo } from '@taftaf/config';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '@taftaf/contexts/auth';

import 'react-vertical-timeline-component/style.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/swiper-bundle.min.css';

import { useMessages } from '@taftaf/hooks/use-translator';
import { GlobalStyles } from '@taftaf/components';
import { useSEO } from '@taftaf/hooks';

type MyAppProps = AppProps;

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
    const apolloClient = useApollo(pageProps);

    const { defaultLocale, locale, messages } = useMessages();

    const { SEO } = useSEO();

    console.log({ locale, messages });

    return (
        <ApolloProvider client={apolloClient}>
            <ChakraProvider theme={theme} resetCSS>
                <GlobalStyles />

                <DefaultSeo
                    {...SEO}
                    twitter={{
                        handle: '@taftaf',
                        site: '@taftaf',
                        cardType: 'summary_large_image',
                    }}
                />

                <IntlProvider
                    locale={locale}
                    defaultLocale={defaultLocale}
                    messages={flatten(messages)}
                >
                    <AuthProvider>
                        <Component {...pageProps} />
                    </AuthProvider>
                </IntlProvider>
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default MyApp;
