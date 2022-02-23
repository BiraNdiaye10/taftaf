import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: "'HK Grotesk', sans-serif",
        body: "'HK Grotesk', sans-serif",
    },

    shadows: {
        card: '0px 0px 25px rgba(54, 91, 125, 0.2)',
    },

    styles: {
        global: () => ({
            scrollBehavior: 'smooth',
        }),
    },
});
