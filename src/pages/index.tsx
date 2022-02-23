import { Routes } from '@taftaf/config';
import { HomeLoginView, HomeView } from '@taftaf/views';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

const HomePage: NextPage = (): JSX.Element => {
    // const { push } = useRouter();

    // useEffect(() => {
    //     push(Routes.login);
    // }, [push]);

    return (
        <>
            <ScrollToTop
                smooth
                color="#38A169"
                style={{
                    background: 'white',
                    padding: '10px',
                    width: '45px',
                    height: '45px',
                    boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.2)',
                }}
            />
            <HomeView />
        </>
    );
};



// export const HomePage: NextPage = () => <HomeLoginView />;

 export default HomePage;
