import NextLink from 'next/link';
import Image from 'next/image';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import React from 'react';

type LogoProps = {
    image: string;
};
export const Logo = ({ image }: LogoProps): JSX.Element => (
    <LinkBox>
        <NextLink href="https://taftaf.net" passHref>
            <LinkOverlay width={109} height={33}>
                <Image
                    src={image as any}
                    layout="intrinsic"
                    width={150}
                    height={28}
                    placeholder="blur"
                    alt="taftaf"
                />
            </LinkOverlay>
        </NextLink>
    </LinkBox>
);
