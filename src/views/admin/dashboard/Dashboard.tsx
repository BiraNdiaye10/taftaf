import { Heading } from '@chakra-ui/react';
import { AdminLayout } from '@taftaf/layouts/admin';

export const DashboardView = (): JSX.Element => {
    return (
        <AdminLayout title="Dashboard">
            <Heading>Dashboard View</Heading>;
        </AdminLayout>
    );
};

export default DashboardView;
