import React from 'react';
import { DashboardView } from '@taftaf/views';
import { useAuthGuard } from '@taftaf/hooks';
import { Role } from '@taftaf/graphql';

const DashoboardPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <DashboardView />;
};

export default DashoboardPage;
