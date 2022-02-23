import React from 'react';
import NextLink from 'next/link';
import { VStack, Heading, Box, Button } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import NextImage from 'next/image';

// import { FaAddressCard, FaBell, FaLock } from 'react-icons/fa';

// import { GiPayMoney } from 'react-icons/gi';

import { TimelineBox } from '@taftaf/components';
import { Routes } from '@taftaf/config';
import { useTranslator } from '@taftaf/hooks/use-translator';

export const Youshop = (): JSX.Element => {
    const { translate } = useTranslator();

    const you_shop_for_you = [
        {
            id: 1,
            title: translate('services_description.you_shop_for_you.step_one'),
            icon: <NextImage src="/images/icons/icon-user.svg" width="200px" height="200px" />,
        },
        {
            id: 2,
            title: translate('services_description.you_shop_for_you.step_two'),
            icon: <NextImage src="/images/icons/icon-address.svg" width="200px" height="200px" />,
        },
        {
            id: 3,
            title: translate('services_description.you_shop_for_you.step_three'),
            icon: <NextImage src="/images/icons/icon-bell.svg" width="200px" height="200px" />,
        },
        {
            id: 4,
            title: translate('services_description.you_shop_for_you.step_four'),
            icon: <NextImage src="/images/icons/icon-cargo.svg" width="200px" height="200px" />,
        },
    ];

    return (
        <TimelineBox mb={32} id={Routes.youShopForYou}>
            <VStack align="center" mb={10}>
                <Heading size="2xl" textAlign="center">
                    {translate('services_description.you_shop_for_you.title')}
                </Heading>
                <Heading as="h4" size="sm" fontWeight="light" textAlign="center">
                    {translate('services_description.you_shop_for_you.subtitle')}
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
                <NextLink href={Routes.inscription}>
                    <Button colorScheme="green" size="lg">
                        {translate('services_description.you_shop_for_you.cta')}
                    </Button>
                </NextLink>
            </Box>
        </TimelineBox>
    );
};
