import React from 'react';

import { VStack, Heading, Box, Text, HStack, Avatar } from '@chakra-ui/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslator } from '@taftaf/hooks';

SwiperCore.use([Autoplay]);

const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
        waitForTransition: false,
        delay: 4000,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
};

type TestimonialProps = {
    text: string;
    name: string;
};

const Testimonial = ({ text, name }: TestimonialProps): JSX.Element => {
    return (
        <Box bg="white" w="100%" borderRadius="lg" p={6} boxShadow="base" m={6}>
            <VStack align="start" w="100%">
                <Text>{text}</Text>

                <HStack>
                    <Avatar name={name} />

                    <Box align="start" spacing="0">
                        <Heading as="h3" size="sm">
                            {name}
                        </Heading>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
};

export const Testimonials = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const testimonials = [
        [
            {
                text: t('testimonials.content.text1'),
                name: 'Mamadou Diakité',
            },
            {
                text: t('testimonials.content.text2'),
                name: 'Ndeye Cissoko',
            },
        ],
        [
            {
                text: t('testimonials.content.text3'),
                name: 'Lamine Diop',
            },
            {
                text: t('testimonials.content.text4'),
                name: 'Ousmane Touré',
            },
        ],
        [
            {
                text: t('testimonials.content.text5'),
                name: 'Ibrahima Diallo',
            },
            {
                text: t('testimonials.content.text6'),
                name: 'Alpha Omar Sow',
            },
        ],
        [
            {
                text: t('testimonials.content.text7'),
                name: 'Maguette Mbaye',
            },
            {
                text: t('testimonials.content.text8'),
                name: 'Amy Ndiaye',
            },
        ],
        [
            {
                text: t('testimonials.content.text9'),
                name: 'Ibrahima Sory Diallo',
            },
            {
                text: t('testimonials.content.text10'),
                name: 'Aissata Soumah',
            },
        ],
    ];

    return (
        <Box w="100%" bg="gray.50" py={24}>
            <Box>
                <VStack align="center" mb={10}>
                    <Heading size="2xl" textAlign="center">
                        {t('testimonials.title')}
                    </Heading>
                    <Heading as="h4" size="sm" fontWeight="normal" textAlign="center">
                        {t('testimonials.subtitle')}
                    </Heading>
                </VStack>

                <Swiper {...testimonialCarousel}>
                    {testimonials.map((testimonial, index: number) => (
                        <SwiperSlide key={index}>
                            {testimonial.map(({ text, name }, index: number) => (
                                <Testimonial text={text} name={name} key={index} />
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};
