import React from 'react';
import {
    Box,
    Container,
    Heading,
    HStack,
    Table,
    Tag,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
    Text,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    TableCaption,
    ButtonGroup,
    Button,
    // ButtonGroup,
    // Button,
    // TableCaption,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import { AdminLayout } from '@taftaf/layouts';
import { CreateUserView } from './CreateUser';
import { UserModal } from './UserModal';
import { UpdateUserView } from './UpdateUser';
import { DeleteUserView } from './DeleteUser';
import { Role, useUsersQuery } from '@taftaf/graphql';
import { Empty, Loader } from '@taftaf/components';
import { useTranslator } from '@taftaf/hooks/use-translator';
import { useState } from 'react';
import { usePagination } from '@taftaf/hooks';

/**
 * Users List View
 ***********************************************/

export const UsersView = (): JSX.Element => {
    const { loading, data } = useUsersQuery();

    const [searchValue, setSearchValue] = useState('');
    const { translate: t } = useTranslator();

    const {
        currentData: users,
        isNextButtonDisabled,
        isPrevButtonDisabled,
        next,
        prev,
    } = usePagination(data?.users);

    return (
        <AdminLayout title={t('users_title')}>
            <Container maxW="container.xl">
                <VStack align="start" spacing={10}>
                    <VStack align="start" w="100%">
                        <Heading size="xl">{t('users_title')}</Heading>
                        <Flex align="center" justify="space-between" w="100%" flexWrap="wrap">
                            <InputGroup w="lg" my={{ base: 4, lg: 0 }}>
                                <InputLeftElement
                                    pointerEvents="none"
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<Search2Icon color="gray.300" />}
                                />
                                <Input
                                    type="tel"
                                    placeholder={t('input_fields.search_users_placeholder')}
                                    _focus={{
                                        boxShadow: '0 0 0 1px #38A169',
                                        borderColor: 'green.500',
                                    }}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </InputGroup>

                            <CreateUserView />
                        </Flex>
                    </VStack>

                    <Box
                        rounded="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        w="100%"
                        overflow="auto"
                    >
                        {loading ? (
                            <Loader />
                        ) : data?.users.length ? (
                            <Table size="lg" variant="simple" colorScheme="gray">
                                <TableCaption py={6}>
                                    <Flex align="center" justify="space-between">
                                        <Text fontWeight="bold">
                                            {t('users_subtitle', {
                                                usersNumber: data?.users?.length,
                                            })}
                                        </Text>

                                        <ButtonGroup size="sm" variant="outline" spacing="4">
                                            <Button disabled={isPrevButtonDisabled} onClick={prev}>
                                                {t('buttons.prev')}
                                            </Button>
                                            <Button disabled={isNextButtonDisabled} onClick={next}>
                                                {t('buttons.next')}
                                            </Button>
                                        </ButtonGroup>
                                    </Flex>
                                </TableCaption>

                                <Thead bg="gray.100">
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>{t('input_fields.last_name')}</Th>
                                        <Th>{t('input_fields.first_name')}</Th>
                                        <Th>Email</Th>
                                        <Th>{t('input_fields.role')}</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {users
                                        ?.filter((user) =>
                                            user.customerId
                                                .toLowerCase()
                                                .includes(searchValue.toLowerCase())
                                        )
                                        .map(
                                            ({
                                                id,
                                                firstName,
                                                lastName,
                                                role,
                                                email,
                                                customerId,
                                            }) => (
                                                <Tr key={id}>
                                                    <Td>{customerId}</Td>
                                                    <Td>{firstName}</Td>
                                                    <Td>{lastName}</Td>
                                                    <Td>{email}</Td>
                                                    <Td>
                                                        <Tag
                                                            colorScheme={
                                                                role === Role.Admin
                                                                    ? 'green'
                                                                    : 'blue'
                                                            }
                                                        >
                                                            {role}
                                                        </Tag>
                                                    </Td>
                                                    <Td>
                                                        <HStack spacing={3}>
                                                            <UserModal id={id} />
                                                            <UpdateUserView id={id} />
                                                            <DeleteUserView id={id} />
                                                        </HStack>
                                                    </Td>
                                                </Tr>
                                            )
                                        )}
                                </Tbody>
                            </Table>
                        ) : (
                            <Empty captionText={t('empty.admin.users')} />
                        )}
                    </Box>
                </VStack>
            </Container>
        </AdminLayout>
    );
};
