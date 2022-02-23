import { Routes } from '@taftaf/config';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSEO = () => {
    const { locale } = useRouter();

    const title =
        locale === 'fr'
            ? 'Taftaf - Envoi de Colis et Réexpédition de Shopping'
            : 'Taftaf - Parcel Sending and Purchase Reshipping';
    const description =
        locale === 'fr'
            ? 'Envoi de Colis et Réexpédition de Shopping'
            : 'Parcel Sending and Purchase Reshipping';

    const SEO = {
        title,
        description,
        canonical: `${Routes.base}`,
        openGraph: {
            type: 'website',
            locale,
            url: `${Routes.base}`,
            title,
            description,
            site_name: 'taftaf',
        },
    };

    return { SEO };
};
