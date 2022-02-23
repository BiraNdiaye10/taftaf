import { Role } from '@taftaf/graphql';
import { useAuthGuard } from '@taftaf/hooks';
import { AdminOrdersView } from '@taftaf/views';

const AdminOrdersPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <AdminOrdersView />;
};

export default AdminOrdersPage;
