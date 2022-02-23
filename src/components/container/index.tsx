import React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';

type ContainerProps = BoxProps;

export const Container = ({ children, ...restProps }: ContainerProps): JSX.Element => (
    <Box w="" {...restProps}>
        {children}
    </Box>
);
