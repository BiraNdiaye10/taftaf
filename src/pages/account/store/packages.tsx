import { useAuthGuard } from '@taftaf/hooks';
import { StorePackagesView } from '@taftaf/views';

const StorePackagesPage = (): JSX.Element => {
    useAuthGuard();

    return <StorePackagesView />;
};

export default StorePackagesPage;
