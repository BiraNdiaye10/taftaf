import { Box, BoxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TimelineBox = styled(Box)<BoxProps>`
    .vertical-timeline::before {
        background-color: #edf2f7;
    }

    /* @media only screen and (min-width: 600px) {
        .vertical-timeline-element-icon.vertical-timeline-element-icon--button .fab-button {
            width: 60px;
            height: 60px;
        }
    } */
`;
