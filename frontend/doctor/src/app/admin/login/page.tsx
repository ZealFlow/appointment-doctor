'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { loginSuccess } from '../../../../lib/redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../lib/redux/store';

export default function Login() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            router.push('/admin');
        }
        else {
            setLoading(false);
        }
    }, [isAuthenticated, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    function handleLogin() {
        const usernameInput: HTMLInputElement | null = document.querySelector('input[name="username"]');
        const passwordInput: HTMLInputElement | null = document.querySelector('input[name="password"]');

        if (usernameInput !== null && passwordInput !== null) {
            const username = usernameInput.value;
            const password = passwordInput.value;

            const formData = {
                username,
                password
            };

            fetch('http://localhost:3001/auth/login', { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        response.json().then(data => {
                            const token = data.token;
                            //Save session
                            Cookies.set('access_token', token);
                            dispatch(loginSuccess());
                            router.push('/admin');
                        });
                    }
                })
        }
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        Admin HeathHub
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc123" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
