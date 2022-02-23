import { Box, Image, VStack, Text } from '@chakra-ui/react';

type EmptyProps = {
    captionText: string;
};
export const Empty = ({ captionText }: EmptyProps): JSX.Element => (
    <Box my={6}>
        <VStack>
            <Image src="/images/empty.svg" />
            <Text textAlign="center">{captionText}</Text>
        </VStack>
    </Box>
);
