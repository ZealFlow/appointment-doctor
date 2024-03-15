'use client';

import { useEffect, useState } from "react";
import FormRegister from "../../../forms/formRegister";
import { useAppSelector } from "../../../../lib/redux/store";
import { useRouter } from 'next/navigation';

export default function signup () {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            router.push('/user/confirm-role');
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
                <FormRegister/>
            </div>
        </>
    );
};