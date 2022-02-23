import { useRouter } from 'next/router';

export const useIsActive = (): ((path: string) => boolean) => {
    const { pathname } = useRouter();

    return (path: string) => path === pathname;
};
