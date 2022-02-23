import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { locales } from '@taftaf/i18n';
import { global } from '@taftaf/i18n/global';

type Translator = {
    translate: (id: string, values?: any) => string;
};

type Messages = {
    messages: any;
    defaultLocale: string;
    locale: string;
    locales: typeof locales;
};

export const useTranslator = (): Translator => {
    const { formatMessage } = useIntl();

    const translate = (id: string, values?: any): string => formatMessage({ id }, values);

    return { translate };
};

export const useMessages = (): Messages => {
    const router = useRouter();
    const { locale, defaultLocale, pathname } = router;

    const content = locales[locale];

    let messages = content[pathname];
    const globalMessages = global[locale];

    console.log({ pathname });

    messages = {
        ...messages,
        ...globalMessages,
    };

    return { messages, defaultLocale, locale, locales };
};
