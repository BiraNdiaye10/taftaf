import { Role } from '@taftaf/graphql';
import { useAuthGuard } from '@taftaf/hooks';
import { SingleUserView } from '@taftaf/views';
import React from 'react';

const SingleUserPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <SingleUserView />;
};

export default SingleUserPage;
