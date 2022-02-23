import { Role } from '@taftaf/graphql';
import { useAuthGuard } from '@taftaf/hooks';
import { UsersView } from '@taftaf/views';

const UsersPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <UsersView />;
};

export default UsersPage;
