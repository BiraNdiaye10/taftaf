import { useAuthGuard } from '@taftaf/hooks/use-auth';
import { ProfileView } from '@taftaf/views';

const ProfilePage = (): JSX.Element => {
    useAuthGuard();

    return <ProfileView />;
};

export default ProfilePage;
