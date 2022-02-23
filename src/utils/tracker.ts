import { Status } from '@taftaf/graphql';

const months = [
    'Jan',
    'Feb.',
    'Mars',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
];

const monthsFrench = [
    'Jan.',
    'Fév.',
    'Mars',
    'Avr.',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
];

export const getTimelineDate = (date: string, language: string): string => {
    console.log({ date, updatedAt: new Date(date) });
    return `${(language === 'en' ? months : monthsFrench)[new Date(date).getMonth()]} ${new Date(
        date
    ).getDate()}`;
};

export const currentDate = (language: string): string => {
    return `${
        (language === 'en' ? months : monthsFrench)[new Date().getMonth()]
    } ${new Date().getDate()}`;
};

export const getActiveStep = (status: string): number => {
    let activeStep = 0;

    if (status === Status.Received) {
        activeStep = 0;
    } else if (status === Status.InTransit) {
        activeStep = 1;
    } else {
        activeStep = 3;
    }

    return activeStep;
};
