import { useAuthGuard } from '@taftaf/hooks';
import { StoreOrdersView } from '@taftaf/views';

const StoreOrdersPage = (): JSX.Element => {
    useAuthGuard();

    return <StoreOrdersView />;
};

export default StoreOrdersPage;
