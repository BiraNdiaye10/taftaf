import { Container, Heading, Select, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { PageLayout } from '@taftaf/layouts';
import React, { useState } from 'react';
import { useTranslator } from '@taftaf/hooks';

export const LocationsView = (): JSX.Element => {
    const [office, setOffice] = useState({
        center: [48.878437, 2.537381],
    });

    const Map = dynamic(() => import('@taftaf/components/map/Map'), { ssr: false });

    const { translate: t } = useTranslator();

    return (
        <PageLayout>
            <Container maxW="container.xl">
                <VStack>
                    <VStack align="center" mb={10} spacing={8} maxW="100%">
                        <Heading size="2xl" textAlign="center">
                            {t('title')}
                        </Heading>

                        <Select
                            defaultValue={JSON.stringify(office)}
                            size="lg"
                            onChange={(value: any): any => {
                                const { coordinates } = JSON.parse(value.target.value);

                                setOffice({ center: coordinates });
                            }}
                        >
                            <option
                                value={JSON.stringify({
                                    coordinates: [48.878437, 2.537381],
                                })}
                            >
                                {t('nav.footer.customer_service.tel_france')}
                            </option>
                            <option
                                value={JSON.stringify({
                                    coordinates: [14.705058, -17.461465],
                                })}
                            >
                                {t('nav.footer.customer_service.tel_senegal')}
                            </option>
                            <option
                                value={JSON.stringify({
                                    coordinates: [9.589097, -13.629824],
                                })}
                            >
                                {t('nav.footer.customer_service.tel_guinea')}
                            </option>
                        </Select>
                    </VStack>
                    {/* cast string to numbers */}
                    <Map center={office.center} />
                </VStack>
            </Container>
        </PageLayout>
    );
};
