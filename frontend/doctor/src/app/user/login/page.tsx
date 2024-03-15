'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FormLogin from "../../../forms/formLogin";
import { useAppSelector } from '../../../../lib/redux/store';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            if (Cookies.get('role') === '1')
                router.push('/');
            if (Cookies.get('role') === '2')
                router.push('/doctor');
        }
        else {
            setLoading(false);
        }
    }, [isAuthenticated, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <FormLogin/>
            </div>
        </>
    );
};
