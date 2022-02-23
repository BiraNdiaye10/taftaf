import { useAuthGuard } from '@taftaf/hooks/use-auth';
import { StoreTrackerView } from '@taftaf/views';

const StoreTrackerPage = (): JSX.Element => {
    useAuthGuard();

    return <StoreTrackerView />;
};

export default StoreTrackerPage;
