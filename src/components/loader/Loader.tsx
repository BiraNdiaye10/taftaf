import { VStack, Spinner, Text } from '@chakra-ui/react';

export const Loader = (): JSX.Element => (
    <VStack align="center" my={6}>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.500" size="lg" />
        <Text>Loading...</Text>
    </VStack>
);
