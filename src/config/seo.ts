import { Routes } from './constants';

const title = 'Taftaf - Shipping and Reshipping platform';
const description = `Fast and Reliable Shipping and Reshipping platform`;

export const SEO = {
    title,
    description,
    canonical: `${Routes.base}`,
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: `${Routes.base}`,
        title,
        description,
    },
};

export default SEO;
