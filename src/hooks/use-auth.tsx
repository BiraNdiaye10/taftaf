import { Routes } from '@taftaf/config';
import { AuthContext, AuthContextProps } from '@taftaf/contexts/auth';
import { Role } from '@taftaf/graphql';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export const useAuth = (): AuthContextProps => useContext(AuthContext);

export const useAuthGuard = (role?: string): AuthContextProps => {
    const { user, loading, error } = useAuth();

    const router = useRouter();

    useEffect((): any => {
        if (!loading && !error) {
            if (!user) return router.push(Routes.login);

            if (role && user?.role !== Role.Admin) return router.push(Routes.login);
        }

        if (error) return router.push(Routes.login);
    }, [user, error, loading, router, role]);

    return { user, loading, error };
};
