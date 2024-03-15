'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../lib/redux/store';
import { loginSuccess } from '../../lib/redux/authSlice';

export default function FormRegister() {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector(state => state.auth.loggedIn);

    function handleSubmit() {
        // Get the values from the form fields
        const firstnameElement: HTMLInputElement | null = document.querySelector('input[name="firstname"]');
        const lastnameElement: HTMLInputElement | null = document.querySelector('input[name="lastname"]');
        const usernameElement: HTMLInputElement | null = document.querySelector('input[name="username"]');
        const identificationElement: HTMLInputElement | null = document.querySelector('input[name="identification"]');
        const passwordElement: HTMLInputElement | null = document.querySelector('input[name="password"]');
        const dobElement: HTMLInputElement | null = document.querySelector('input[name="dob"]');
        const genderElement: HTMLInputElement | null = document.querySelector('input[name="gender"]:checked');

        const firstname = firstnameElement ? firstnameElement.value : '';
        const lastname = lastnameElement ? lastnameElement.value : '';
        const username = usernameElement ? usernameElement.value : '';
        const identification = identificationElement ? identificationElement.value : '';
        const password = passwordElement ? passwordElement.value : '';
        const dob = dobElement ? dobElement.value : '';
        const gender = genderElement ? genderElement.value : '';

        // Create an object with the form data
        const formData = {
            userProfileData: {
                firstname,
                lastname,
                username,
                email: identification,
                dateofbirth: dob,
                gender
            },
            credentialData: {
                password
            }
        };
    
        // Send the form data to the server
        fetch('http://localhost:3001/auth/register', {
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
                        Cookies.set('access_token', token);
                        dispatch(loginSuccess());
                        router.push('/user/confirm-role');
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className="w-auto px-8 bg-blue-50 rounded-md">
                <div className="form__header py-4">
                    <div className="form__header__title text-xl">
                        Đăng ký tài khoản
                    </div>
                    <label className="form__header__subtitle">Thật nhanh chóng và dễ dàng.</label>
                </div>
                <div className="form__body py-4">
                    <div className="form__body__fullname py-2">
                        <input type="text" placeholder="Tên" className="border-2 h-12 p-3 mr-4" name="firstname" />
                        <input type="text" placeholder="Họ đệm" className="border-2 h-12 p-3" name="lastname" />
                    </div>
                    <div className="form__body__username py-2">
                        <input type="text" placeholder="Username" className="border-2 h-12 p-3 w-full" name="username" />
                    </div>
                    <div className="form__body__identification py-2">
                        <input type="text" placeholder="Số điện thoại hoặc Email" className="border-2 h-12 p-3 w-full" name="identification" />
                    </div>
                    <div className="form__body__password py-2">
                        <input type="password" placeholder="Đặt mật khẩu" className="border-2 h-12 p-3 w-full" name="password" />
                    </div>
                    <div className="form__body__dob py-2">
                        <label>Ngày sinh</label>
                        <div className="form__body__dob_box">
                            <input type="date" className="border-2 h-12 p-3 w-full" name="dob" />
                        </div>
                    </div>
                    <div className="form__body__gender py-2">
                        <label>Giới tính</label>
                        <div className="form__body__gender__box flex justify-between w-full">
                            <div className="form__body__gender__type">
                                <label className='cursor-pointer'>
                                    Nam
                                    <input type="radio" name="gender" value='1'/>
                                </label>
                            </div>
                            <div className="form__body__gender__type">
                                <label className='cursor-pointer'>
                                    Nữ
                                    <input type="radio" name="gender" value='2'/>
                                </label>
                            </div>
                            <div className="form__body__gender__type">
                                <label className='cursor-pointer'>
                                    Khác
                                    <input type="radio" name="gender" value='3'/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form__footer py-4">
                    <div className="form__footer__cta">
                        <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng ký</button>
                    </div>
                </div>
            </div>
        </>
    );
};
