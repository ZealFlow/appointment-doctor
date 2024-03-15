"use client";

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Profile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const doctor_id = Cookies.get('user_id');
        fetch(`http://localhost:3001/profile/get/${doctor_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                // 'Authorization': `Bearer ${accessToken}`
            },
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        console.log(data);
                        setProfile(data);
                    });
                }
            })
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isModalExpertOpen, setIsModalExpertOpen] = useState(false);

    const openExpertModal = () => {
        setIsModalExpertOpen(true);
    };

    const closeExpertModal = () => {
        setIsModalExpertOpen(false);
    };

    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
                                    </img>
                                    {/* <h1 className="text-xl font-bold">{profile.user && `${profile.user.firstname} ${profile.user.lastname}`}</h1>
                                    <p className="text-gray-700">Chuyên khoa: {profile.userProfile && `${profile.userProfile.enity_user.specialization}`}</p> */}
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="profile/edit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Chỉnh sửa</a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Thông tin cơ bản</span>
                                    {/* <ul>
                                        <li className="mb-2">Hàm vị: {profile.userProfile && `${profile.userProfile.enity_user.academicDegree}`}</li>
                                        <li className="mb-2">Email: {profile.user && `${profile.user.email}`}</li>
                                        <li className="mb-2">Số điện thoại: N.A</li>
                                        <li className="mb-2">Giới tính: {profile.user && `${profile.user.gender}`}</li>
                                        <li className="mb-2">Ngày sinh: N.A</li>
                                        <li className="mb-2">Chức vụ: {profile.userProfile && `${profile.userProfile.enity_user.position}`}</li>
                                        <li className="mb-2">Đơn vị công tác: {profile.userProfile && `${profile.userProfile.enity_user.organization}`}</li>
                                        <li className="mb-2">Địa chỉ công tác: {profile.userProfile && `${profile.userProfile.enity_user.clinicAddress}`}</li>
                                        <li className="mb-2">Nơi cư trú: N.A</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className='flex justify-between'>
                                    <h2 className="text-xl font-bold mb-4">Giới thiệu</h2>
                                    <button
                                        onClick={openModal}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Cập nhật
                                    </button>

                                    {isModalOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-4 rounded-md w-100">
                                                <h2 className="text-xl font-bold mb-4">Cập nhật giới thiệu bản thân</h2>
                                                <div>
                                                    <textarea name="info-user" id="info-user" cols="45" rows="10" className='w-200'></textarea>
                                                </div>
                                                <div>
                                                    <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                                        Hủy
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                                        Cập nhật
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p>

                                <div className='flex justify-between'>
                                    <h2 className="text-xl font-bold mb-4">Kinh nghiệm làm việc</h2>
                                    <button onClick={openExpertModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Cập nhật
                                    </button>

                                    {isModalExpertOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-4 rounded-md w-100">
                                                <h2 className="text-xl font-bold mb-4">Cập nhật giới thiệu bản thân</h2>
                                                <div>
                                                    <input name='position' type="text" placeholder='Vị trí làm việc' />
                                                    <input  name='' type="text" placeholder='Tên đơn vị' />
                                                    <input type="text" placeholder='Từ năm - đến năm' />
                                                    <textarea name="info-user" id="info-user" cols="45" rows="10" className='w-200' placeholder='Mô tả công việc'></textarea>
                                                </div>
                                                <div>
                                                    <button onClick={closeExpertModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                                        Hủy
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                                        Cập nhật
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span className="text-gray-700 mr-2">at ABC Company</span>
                                            <span className="text-gray-700">2017 - 2019</span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                        suscipit.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span className="text-gray-700 mr-2">at ABC Company</span>
                                            <span className="text-gray-700">2017 - 2019</span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                        suscipit.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span className="text-gray-700 mr-2">at ABC Company</span>
                                            <span className="text-gray-700">2017 - 2019</span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                        suscipit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
