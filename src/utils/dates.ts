export const formatDate = (date: number | Date, locale = 'en'): string => {
    const dateFormatter = new Intl.DateTimeFormat(locale);

    return dateFormatter.format(new Date(date));
};
