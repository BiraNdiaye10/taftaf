import styled from '@emotion/styled';
import { Box, BoxProps } from '@chakra-ui/react';

export const HeaderContainer = styled(Box)<BoxProps>`
    .is-sticky {
        header {
            background-color: white;
            box-shadow: 0px 0px 25px rgba(54, 91, 125, 0.1);
            /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06); */
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }
`;
