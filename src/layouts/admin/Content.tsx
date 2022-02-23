import { Box, BoxProps } from '@chakra-ui/react';

type ContentProps = BoxProps;

export const Content = ({ children }: ContentProps): JSX.Element => {
    return (
        <Box
            mt={36}
            mb="50px"
            flex="1 1 auto"
            overflowY="auto"
            minH="100vh"
            px={10}
            ml={{ base: '0', md: '120px' }}
        >
            {children}
        </Box>
    );
};
