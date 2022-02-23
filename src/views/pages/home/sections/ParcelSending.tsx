import React from 'react';
import NextLink from 'next/link';
import { VStack, Heading, Box, Button, Link } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import NextImage from 'next/image';

// import { FaAddressCard, FaBell, FaLock } from 'react-icons/fa';

// import { GiPayMoney } from 'react-icons/gi';

import { TimelineBox } from '@taftaf/components';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useRouter } from 'next/router';

export const ParcelSending = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const { locale, defaultLocale } = useRouter();

    const you_shop_for_you = [
        {
            id: 1,
            title: t('services_description.parcel_sending.step_one'),
            icon: (
                <NextImage
                    src="/images/icons/icon-customer-service.svg"
                    width="200px"
                    height="200px"
                />
            ),
        },
        {
            id: 2,
            title: t('services_description.parcel_sending.step_two', {
                link_text: (
                    <NextLink href={Routes.prices}>
                        <Link color="green">{locale === defaultLocale ? 'ici' : 'here'}</Link>
                    </NextLink>
                ),
            }),
            icon: <NextImage src="/images/icons/icon-address.svg" width="200px" height="200px" />,
        },
        {
            id: 3,
            title: t('services_description.parcel_sending.step_three'),
            icon: <NextImage src="/images/icons/icon-cargo.svg" width="200px" height="200px" />,
        },
        {
            id: 4,
            title: t('services_description.parcel_sending.step_four'),
            icon: (
                <NextImage src="/images/icons/icon-call-center.svg" width="200px" height="200px" />
            ),
        },
    ];

    return (
        <TimelineBox my={32} id={Routes.parcelShipping}>
            <VStack align="center" mb={10}>
                <Heading size="2xl" textAlign="center">
                    {t('services_description.parcel_sending.title')}
                </Heading>
                <Heading as="h4" size="sm" fontWeight="light" textAlign="center">
                    {t('services_description.parcel_sending.subtitle')}
                </Heading>
            </VStack>

            <VerticalTimeline animate={false}>
                {you_shop_for_you.map(({ id, title, icon }) => (
                    <VerticalTimelineElement
                        key={id}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'white',
                            color: '#2D3748',
                            borderRadius: '6px',
                            boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.15)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date={`0${id}`}
                        iconStyle={{
                            backgroundColor: '#EDF2F7',
                            color: '#718096',
                            boxShadow: 'none',
                        }}
                        icon={icon}
                    >
                        <Heading lineHeight="tall" fontWeight="semibold" fontSize="lg">
                            {title}
                        </Heading>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <Box textAlign="center" mt={10}>
                <NextLink href={Routes.contact}>
                    <Button colorScheme="green" size="lg">
                        {t('services_description.parcel_sending.cta')}
                    </Button>
                </NextLink>
            </Box>
        </TimelineBox>
    );
};
