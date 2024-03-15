'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAppSelector } from '../../../../lib/redux/store';

export default function ConfirmRole() {
    const router = useRouter();
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            router.push('/user/confirm-role');
            setLoading(false);
        }
        else {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    function handleRedirect() {
        const accessToken = Cookies.get('access_token');

        fetch('http://localhost:3001/auth/verifyrole', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({role: role})
        });

        switch (role) {
            case "customer":
                router.push('/');
                break;
            case "doctor":
                router.push('/user/portal');
                break;
            default:
                alert("Bạn vui lòng xác nhận vai trò của tài khoản, bạn muốn tạo ?");
        }
    };

    return (
        <>
            <div className="confirm-role">
                <header className="headerPage headerPage__user"></header>
                <div className="content flex justify-center" style={{ height: 'calc(100vh - 84px)' }}>
                    <div className="container flex-col items-center flex justify-center">
                        <div className="selectOption h-96 w-180 p-8">
                            <div className='selectOption__header'>
                                <h2>Bạn đăng ký dưới quyền người dùng nào ?</h2>
                            </div>
                            <div className='selectOption__content grid grid-flow-col'>
                                <div onClick={() => { setRole("customer") }} className="box-option-user w-35 h-20 flex flex-col items-center flex justify-center cursor-pointer">
                                    <FontAwesomeIcon icon={faUsers} className='awesome-icon' />
                                    <span>Người dùng</span>
                                </div>
                                <div onClick={() => { setRole("doctor") }} className="box-option-user w-35 h-20 flex flex-col items-center flex justify-center cursor-pointer">
                                    <FontAwesomeIcon icon={faUserDoctor} className='awesome-icon' />
                                    <span>Bác sĩ</span>
                                </div>
                            </div>
                            <div className='selectOption__footer'>
                                <button onClick={handleRedirect} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
