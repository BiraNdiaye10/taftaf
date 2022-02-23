import { createContext, ReactNode } from 'react';
import { useMeQuery, User } from '@taftaf/graphql';
import { ApolloError } from '@apollo/client';

export type AuthProviderProps = {
    children: ReactNode;
};

export type AuthContextProps = {
    user: Partial<User>;
    loading: boolean;
    error: ApolloError;
};

export const AuthContext = createContext<AuthContextProps>({
    user: { firstName: '', lastName: '', role: null },
    loading: false,
    error: null,
});

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const { loading, error, data } = useMeQuery();

    return (
        <AuthContext.Provider value={{ user: data?.me, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};
