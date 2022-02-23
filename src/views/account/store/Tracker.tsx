import { Heading, VStack, Container } from '@chakra-ui/react';
import { useMeQuery } from '@taftaf/graphql';
import { AppLayout } from '@taftaf/layouts';

import React, { useState } from 'react';
import { TrackingStepper } from './TrackingStepper';
import { Autocomplete, Empty } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';

export const StoreTrackerView = (): JSX.Element => {
    const { data: user, loading } = useMeQuery();

    const [parcel, setParcel] = useState(null);

    const { translate } = useTranslator();

    const options = user?.me?.parcels?.map(({ id, name }) => ({ value: id, label: name }));

    return (
        <AppLayout title="Tracker">
            {/* Select input */}
            <Container maxW="container.lg" my={36}>
                <VStack w="100%" spacing={10}>
                    <Heading size="xl">{translate('tracking_title')}</Heading>

                    <Autocomplete
                        options={options}
                        placeholder={translate('input_fields.track_parcel_placeholder')}
                        w="md"
                        maxW="100%"
                        isClearable
                        isLoading={loading}
                        onChange={(data: { value: string; label: string }) => {
                            if (data.value) {
                                setParcel(user?.me?.parcels.find(({ id }) => data.value === id));
                            } else {
                                setParcel(null);
                            }
                        }}
                    />

                    {parcel ? (
                        <TrackingStepper parcel={parcel} />
                    ) : (
                        <Empty captionText={translate('choose_parcel_msg')} />
                    )}
                </VStack>
            </Container>
        </AppLayout>
    );
};
