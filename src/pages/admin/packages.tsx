import { Role } from '@taftaf/graphql';
import { useAuthGuard } from '@taftaf/hooks';
import { AdminPackagesView } from '@taftaf/views';

const PackagesPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <AdminPackagesView />;
};

export default PackagesPage;
