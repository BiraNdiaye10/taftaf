import React from 'react';
import NextImage from 'next/image';
import { Divider, Heading, VStack, useClipboard } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Alert, AlertIcon, Box, Button, Text } from '@chakra-ui/react';

import { TimelineBox } from '@taftaf/components';
import { CreateAccountMutation } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { Routes } from '@taftaf/config';

type ShowAddressProps = {
    data: CreateAccountMutation;
};
export const ShowAddress = ({ data }: ShowAddressProps): JSX.Element => {
    const { firstName, lastName, customerId, street, postalCode, city, country } =
        data.createAccount;

    const { translate } = useTranslator();
    const { hasCopied, onCopy } = useClipboard(`
        ${street}
        ${customerId}
        ${firstName}
        ${lastName}
        ${postalCode}
        ${city}
        ${country}
    `);

    return (
        <Box width="100%" maxW="100%" borderRadius="xl">
            <TimelineBox>
                <VStack align="center" mb={10}>
                    <Heading size="2xl" fontWeight="bold" textAlign="center">
                        {translate('signup_step3.card_title')}
                    </Heading>
                    <Heading size="md" textAlign="center">
                        {translate('signup_step3.card_subtitle')}
                    </Heading>
                </VStack>

                <VerticalTimeline animate={false}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'white',
                            color: '#2D3748',
                            borderRadius: '6px',
                            boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.15)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date={`01`}
                        icon={
                            <NextImage
                                src="/images/icons/icon-desktop.svg"
                                width="200px"
                                height="200px"
                            />
                        }
                        iconStyle={{
                            backgroundColor: '#EDF2F7',
                            color: '#718096',
                            boxShadow: 'none',
                        }}
                    >
                        <Heading lineHeight="tall" fontWeight="semibold" fontSize="md">
                            {translate('signup_step3.description_step1')}
                        </Heading>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'white',
                            color: '#2D3748',
                            borderRadius: '6px',
                            boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.15)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date={`02`}
                        icon={
                            <NextImage
                                src="/images/icons/icon-cart.svg"
                                width="200px"
                                height="200px"
                            />
                        }
                        iconStyle={{
                            backgroundColor: '#EDF2F7',
                            color: '#718096',
                            boxShadow: 'none',
                        }}
                    >
                        <VStack align="start">
                            <Heading lineHeight="tall" fontWeight="semibold" fontSize="md">
                                {translate('signup_step3.description_step2')}
                            </Heading>
                            <Divider />
                            <VStack align="start" spacing={10}>
                                <VStack align="start">
                                    <Text>
                                        <strong>{translate('input_fields.last_name')}:</strong>{' '}
                                        {lastName}
                                    </Text>

                                    <Text>
                                        <strong>{translate('input_fields.first_name')}:</strong>{' '}
                                        {firstName}
                                    </Text>

                                    <Text>
                                        <strong>{translate('input_fields.address')}:</strong>{' '}
                                        {street}
                                    </Text>

                                    <Text>
                                        <strong>
                                            {translate('signup_step3.additional_info')}:
                                        </strong>{' '}
                                        TAFTAF - {customerId}
                                    </Text>

                                    <Text>
                                        <strong>{translate('input_fields.postalCode')}:</strong>{' '}
                                        {postalCode}
                                    </Text>
                                    <Text>
                                        <strong>{translate('input_fields.city')}:</strong> {city}
                                    </Text>
                                    <Text>
                                        <strong>{translate('input_fields.country')}:</strong>{' '}
                                        {country}
                                    </Text>
                                </VStack>

                                <Alert status="info" borderRadius="xl">
                                    <AlertIcon />
                                    {translate('signup_step3.description_step2_alert', {
                                        customerId: customerId,
                                    })}
                                </Alert>

                                <Button onClick={onCopy}>
                                    {hasCopied
                                        ? translate('signup_step3.description_step2_button_state_2')
                                        : translate(
                                              'signup_step3.description_step2_button_state_1'
                                          )}
                                </Button>
                            </VStack>
                        </VStack>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <Box textAlign="center" mt={10}>
                    <Button
                        colorScheme="green"
                        size="lg"
                        onClick={() => {
                            if (window) window.location.href = Routes.storePackages;
                        }}
                    >
                        {translate('signup_step3.button_text')}
                    </Button>
                </Box>
            </TimelineBox>
        </Box>
    );
};
