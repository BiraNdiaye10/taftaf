import { Role } from '@taftaf/graphql';
import { useAuthGuard } from '@taftaf/hooks';
import { SettingsView } from '@taftaf/views';

const SettingsPage = (): JSX.Element => {
    useAuthGuard(Role.Admin);

    return <SettingsView />;
};

export default SettingsPage;
