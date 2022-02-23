import {
    Box,
    Button,
    Container,
    Heading,
    Table,
    Tag,
    Tbody,
    Td,
    Th,
    Thead,
    Tooltip,
    Tr,
    VStack,
} from '@chakra-ui/react';
import { useTranslator } from '@taftaf/hooks';
import { PageLayout } from '@taftaf/layouts';
import { BsQuestion } from 'react-icons/bs';
import React from 'react';

export const ProhibitedItemsView = (): JSX.Element => {
    const { translate: t } = useTranslator();

    const items = [
        {
            id: 1,
            product: t('product1.name'),
            restrictions: t('product1.restriction'),
            prohibited: true,
        },
        {
            id: 2,
            product: t('product2.name'),
            restrictions: t('product2.restriction'),
            prohibited: true,
        },
        {
            id: 3,
            product: t('product3.name'),
            restrictions: t('product3.restriction'),
            description: t('product3.description'),
            prohibited: false,
        },
        {
            id: 4,
            product: t('product4.name'),
            restrictions: t('product4.restriction'),
            prohibited: true,
        },
        {
            id: 5,
            product: t('product5.name'),
            restrictions: t('product5.restriction'),
            description: t('product5.description'),
            prohibited: false,
        },
        {
            id: 6,
            product: t('product6.name'),
            restrictions: t('product6.restriction'),
            prohibited: true,
        },
        {
            id: 7,
            product: t('product7.name'),
            restrictions: t('product7.restriction'),
            prohibited: true,
        },
        {
            id: 8,
            product: t('product8.name'),
            restrictions: t('product8.restriction'),
            prohibited: true,
        },
        {
            id: 9,
            product: t('product9.name'),
            restrictions: t('product9.restriction'),
            description: t('product9.description'),
            prohibited: false,
        },
        {
            id: 10,
            product: t('product10.name'),
            restrictions: t('product10.restriction'),
            description: t('product10.description'),
            prohibited: false,
        },
        {
            id: 11,
            product: t('product11.name'),
            restrictions: t('product11.restriction'),
            description: t('product11.description'),
            prohibited: false,
        },
        {
            id: 12,
            product: t('product12.name'),
            restrictions: t('product12.restriction'),
            prohibited: true,
        },
        {
            id: 13,
            product: t('product13.name'),
            restrictions: t('product13.restriction'),
            prohibited: true,
        },
        {
            id: 14,
            product: t('product14.name'),
            restrictions: t('product14.restriction'),
            prohibited: true,
        },
        {
            id: 15,
            product: t('product15.name'),
            restrictions: t('product15.restriction'),
            prohibited: true,
        },
        {
            id: 16,
            product: t('product16.name'),
            restrictions: t('product16.restriction'),
            description: t('product16.description'),
            prohibited: false,
        },
        {
            id: 17,
            product: t('product17.name'),
            restrictions: t('product17.restriction'),
            prohibited: true,
        },
        {
            id: 18,
            product: t('product18.name'),
            restrictions: t('product18.restriction'),
            prohibited: true,
        },
    ];

    return (
        <PageLayout title="Prohibited items">
            <Container maxW="container.xl">
                <VStack align="center" mb={10} spacing={12}>
                    <Heading size="2xl" textAlign="center">
                        {t('title')}
                    </Heading>

                    <Box
                        w="md"
                        maxW="100%"
                        borderRadius="xl"
                        p={5}
                        borderColor="gray.200"
                        border="2px solid #E2E8F0"
                        overflow="auto"
                    >
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>{t('thead1')}</Th>
                                    <Th>{t('thead2')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {items.map(
                                    ({ id, product, restrictions, prohibited, description }) => (
                                        <Tr key={id}>
                                            <Td>{product}</Td>
                                            <Td>
                                                {prohibited ? (
                                                    <Tag colorScheme="red">{restrictions}</Tag>
                                                ) : (
                                                    <Tooltip
                                                        hasArrow
                                                        label={description}
                                                        bg="blue.500"
                                                        color="blue.50"
                                                    >
                                                        <Button
                                                            rightIcon={<BsQuestion />}
                                                            colorScheme="blue"
                                                            size="xs"
                                                            bg="blue.100"
                                                            color="blue.700"
                                                            _hover={{
                                                                bg: 'blue.100',
                                                                color: 'blue.700',
                                                            }}
                                                            _active={{
                                                                bg: 'blue.100',
                                                                color: 'blue.700',
                                                            }}
                                                        >
                                                            {restrictions}
                                                        </Button>
                                                    </Tooltip>
                                                )}
                                            </Td>
                                        </Tr>
                                    )
                                )}
                            </Tbody>
                        </Table>
                    </Box>
                </VStack>
            </Container>
        </PageLayout>
    );
};
