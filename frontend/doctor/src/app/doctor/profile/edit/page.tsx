"use client";

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


export default function Edit() {

    const [profile, setProfile] = useState({ user: { firstname: '', lastname: '', email: '' }, userProfile: { enity_user: { organize: '' } } });

    useEffect(() => {
        const doctor_id = Cookies.get('user_id');
        console.log(doctor_id);
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

    const [formData, setFormData] = useState({
        idDoctor: '',
        'first-name': '',
        'last-name': '',
        email: '',
        phone: '',
        dob: '',
        sex: '',
        identifyCode: '',
        ethnic: '',
        province: '',
        district: '',
        commune: '',
        residence_address: '',
        permanent_address: '',
        organize: '',
        province_medical: '',
        district_medical: '',
        commune_medical: '',
        medical_address: '',
        specialize: '',
        academic_degree: '',
        position_organize: '',
        clinic_address: '',
        service: '',
        type_medical: '',
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        const doctor_id = Cookies.get('user_id');
        event.preventDefault();
        console.log(formData);
        // const response = await fetch(`http://localhost:3001/profile/update/${doctor_id}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // });
        // if (!response.ok) {
        //     throw new Error('Failed to update profile');
        // }
    };

    const [dataCountry, setDataCountry] = useState([{ name: { common: '' } }]);
    const [dataEthnic, setDataEthinic] = useState([{ name: '' }]);
    const [dataDistrict, setDataDistrict] = useState([{ name: '' }]);
    const [dataProvince, setDataProvince] = useState([{ name: '' }]);
    const [dataCommune, setDataCommune] = useState([{ name: '' }]);
    const [dataMedicalService, setDataMedicalService] = useState([{ checkup_detail: { specialize: { data: [] } }, checkup_name: '' }]);

    useEffect(() => {
        getApiCountry();
        getApiEthnic();
        getApiDistrict();
        getApiProvince();
        getApiCommune();
        getApiMedicalService();
    }, []);

    //Get API Medical Service
    const getApiMedicalService = () => {
        fetch('http://localhost:3001/medical_service/detail')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.detailService);
                setDataMedicalService(data.detailService);
            })
    };

    //Get API Country
    const getApiCountry = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataCountry(data);
            })
    };

    //Get API Ethnic
    const getApiEthnic = () => {
        fetch('https://api.nosomovo.xyz/ethnic/getalllist?_gl=1*kwh0is*_ga*MTk2NzM2ODcyLjE3MTAwODI3ODM.*_ga_XW6CMNCYH8*MTcxMDA4Mjc4Mi4xLjEuMTcxMDA4Mjc5NS4wLjAuMA..')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataEthinic(data);
            })
    };

    //Get API District
    const getApiDistrict = () => {
        fetch('https://api.nosomovo.xyz/district/getalllist/805?_gl=1*cw3oq1*_ga*MTk2NzM2ODcyLjE3MTAwODI3ODM.*_ga_XW6CMNCYH8*MTcxMDA4NDY2OC4yLjAuMTcxMDA4NDY2OC4wLjAuMA..')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataDistrict(data);
            })
    };

    //Get API Province
    const getApiProvince = () => {
        fetch('https://api.nosomovo.xyz/province/getalllist/193?_gl=1*1rcyxbf*_ga*MTk2NzM2ODcyLjE3MTAwODI3ODM.*_ga_XW6CMNCYH8*MTcxMDA4NDY2OC4yLjAuMTcxMDA4NDY2OC4wLjAuMA..')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataProvince(data);
            })
    };

    //Get API Commune
    const getApiCommune = () => {
        fetch('https://api.nosomovo.xyz/commune/getalllist/80519?_gl=1*e4uj0l*_ga*MTk2NzM2ODcyLjE3MTAwODI3ODM.*_ga_XW6CMNCYH8*MTcxMDA4NjYwMi4zLjEuMTcxMDA4NjYzMS4wLjAuMA..')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataCommune(data);
            })
    };

    function ComponentDataCountry() {
        return (
            <>
                {
                    dataCountry.map((country) => {
                        return (
                            <>
                                <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
                            </>
                        )
                    })
                }
            </>
        );
    };

    function ComponentDataEthnic() {
        return (
            <>
                {
                    dataEthnic.map((ethnic) => {
                        return (
                            <>
                                <option value={ethnic.name}>{ethnic.name}</option>
                            </>
                        )
                    })
                }
            </>
        );
    };

    function ComponentDataDistrict() {
        return (
            <>
                {
                    dataDistrict.map((district) => {
                        return (
                            <>
                                <option value={district.name}>{district.name}</option>
                            </>
                        )
                    })
                }
            </>
        );
    };

    function ComponentDataProvince() {
        return (
            <>
                {
                    dataProvince.map((province) => {
                        return (
                            <>
                                <option value={province.name}>{province.name}</option>
                            </>
                        )
                    })
                }
            </>
        );
    };

    function ComponentDataCommune() {
        return (
            <>
                {
                    dataCommune.map((commune) => {
                        return (
                            <>
                                <option value={commune.name}>{commune.name}</option>
                            </>
                        )
                    })
                }
            </>
        );
    };

    function ComponentDataMedicalSpecialize() {
        return (
            <>
                <select
                    onChange={handleChange}
                    id="specialize"
                    name="specialize"
                    autoComplete="specialize-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {
                        dataMedicalService.map((service) => {
                            return (
                                service.checkup_detail.specialize.data.map((item) => {
                                    return (
                                        <>
                                            <option>{item}</option>
                                        </>
                                    )
                                })
                            )
                        })
                    }
                </select>
            </>
        );
    };

    function ComponentDataSerivces() {
        return (
            <>
                <select
                    onChange={handleChange}
                    id="Serivce"
                    name="Serivce"
                    autoComplete="Serivce-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {
                        dataMedicalService.map((service) => {
                            return (
                                <option>{service.checkup_name}</option>
                            )
                        })
                    }
                </select>
            </>
        );
    };

    function handleTypeChange(event: { target: { name: any; value: any; checked: any; }; }) {
        const { name, value, checked } = event.target;

        setProfile(prevProfile => ({
            ...prevProfile,
            userProfile: {
                ...prevProfile.userProfile,
                enity_user: {
                    ...prevProfile.userProfile.enity_user,
                    [name]: name === "type_offline" || name === "type_online" ? checked : value
                }
            }
        }));
    };

    return (
        <>
            <div>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-6 text-gray-900">Profile Edit</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                {/* Mã bác sĩ */}
                                <div className="col-span-full">
                                    <label htmlFor="idDoctor" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mã bác sĩ
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="idDoctor"
                                            name="idDoctor"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Họ đệm */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Họ đệm
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={(event) => {
                                                handleChange(event);
                                                profile.user.lastname = event.target.value;
                                            }}
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            value={profile.user.lastname}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Tên */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tên
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={(event) => {
                                                handleChange(event);
                                                profile.user.firstname = event.target.value;
                                            }}
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            value={profile.user.firstname}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-span-full">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={profile.user.email}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-span-full">
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                        Số điện thoại
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={profile.user.phone}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Date of birth */}
                                <div className="col-span-full">
                                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ngày sinh
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="dob"
                                            name="dob"
                                            type="date"
                                            value={profile.user.dateofbirth}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Sex */}
                                <div className="col-span-full">
                                    <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">
                                        Giới tính
                                    </label>
                                    <div className='flex justify-between'>
                                        <div>
                                            <input
                                                onChange={handleChange}
                                                id="sex"
                                                name="sex"
                                                type="radio"
                                                value={1}
                                                checked={profile.user.gender === 1}
                                            />
                                            <label htmlFor="sex">
                                                Nam
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                onChange={handleChange}
                                                id="sex"
                                                name="sex"
                                                type="radio"
                                                value={2}
                                                checked={profile.user.gender === 2}
                                            />
                                            <label htmlFor="sex">
                                                Nữ
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                onChange={handleChange}
                                                id="sex"
                                                name="sex"
                                                type="radio"
                                                value={3}
                                                checked={profile.user.gender === 3}
                                            />
                                            <label htmlFor="sex">
                                                Khác
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* identifyCode */}
                                <div className="col-span-full">
                                    <label htmlFor="identifyCode" className="block text-sm font-medium leading-6 text-gray-900">
                                        CMND/CCCD
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="identifyCode"
                                            name="identifyCode"
                                            type="text"
                                            value={profile.user.indentifyCode}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Quốc tịch
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="country"
                                            name="country"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataCountry />
                                        </select>
                                    </div>
                                </div>

                                {/* Dân tộc */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="ethnic" className="block text-sm font-medium leading-6 text-gray-900">
                                        Dân tộc
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="ethnic"
                                            name="ethnic"
                                            autoComplete="ethnic-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataEthnic />
                                        </select>
                                    </div>
                                </div>

                                {/* Tỉnh */}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tỉnh
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="province"
                                            name="province"
                                            autoComplete="province-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataProvince />
                                        </select>
                                    </div>
                                </div>

                                {/* Huyện */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                                        Huyện
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="district"
                                            name="district"
                                            autoComplete="district-name"
                                            value={profile.user.district}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataDistrict />
                                        </select>
                                    </div>
                                </div>

                                {/* Thị xã */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="commune" className="block text-sm font-medium leading-6 text-gray-900">
                                        Thị xã
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={(event) => {
                                                handleChange(event);
                                            }}
                                            id="commune"
                                            name="commune"
                                            autoComplete="commune-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataCommune />
                                        </select>
                                    </div>
                                </div>

                                {/* Địa chỉ họ khẩu */}
                                <div className="col-span-full">
                                    <label htmlFor="residence_address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Địa chỉ hộ khẩu
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="residence_address"
                                            id="residence_address"
                                            autoComplete="residence_address"
                                            value={profile.user.residence_address}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Địa chỉ thưởng trú */}
                                <div className="col-span-full">
                                    <label htmlFor="permanent_address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Địa chỉ thường trú
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="permanent_address"
                                            id="permanent_address"
                                            autoComplete="permanent_address"
                                            value={profile.user.permanent_Address}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">General Profile</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                {/* Đơn vị công tác */}
                                <div className="col-span-full">
                                    <label htmlFor="organize" className="block text-sm font-medium leading-6 text-gray-900">
                                        Đơn vị công tác
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="organize"
                                            id="organize"
                                            autoComplete="organize"
                                            value={profile.userProfile.enity_user.organize}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {/* Tỉnh */}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tỉnh
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="province_medical"
                                            name="province_medical"
                                            autoComplete="province_medical-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataProvince />
                                        </select>
                                    </div>
                                </div>

                                {/* Huyện */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="district_medical" className="block text-sm font-medium leading-6 text-gray-900">
                                        Huyện
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="district_medical"
                                            name="district_medical"
                                            autoComplete="district_medical-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataDistrict />
                                        </select>
                                    </div>
                                </div>

                                {/* Thị xã */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="commune_medical" className="block text-sm font-medium leading-6 text-gray-900">
                                        Thị xã
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            id="commune_medical"
                                            name="commune_medical"
                                            autoComplete="commune_medical-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <ComponentDataCommune />
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="organize_address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Địa chỉ
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="organize_address"
                                            id="organize_address"
                                            autoComplete="organize_address"
                                            value={profile.userProfile.enity_user.organize_address}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="specialize" className="block text-sm font-medium leading-6 text-gray-900">
                                        Chuyên khoa
                                    </label>
                                    <div className="mt-2">
                                        <ComponentDataMedicalSpecialize />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="academic_degree" className="block text-sm font-medium leading-6 text-gray-900">
                                        Học vị
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleChange}
                                            name="academic_degree"
                                            id="academic_degree"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="Bác sĩ">Bác sĩ</option>
                                            <option value="Thạc sĩ">Thạc sĩ</option>
                                            <option value="Tiến sĩ">Tiến sĩ</option>
                                            <option value="Phó giáo sư">Phó giáo sư</option>
                                            <option value="Giáo sư">Giáo sư</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="position_organize" className="block text-sm font-medium leading-6 text-gray-900">
                                        Chức vụ
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="position_organize"
                                            id="position_organize"
                                            autoComplete="position_organize"
                                            value={profile.userProfile.enity_user.position_organize}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="clinic_address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Vị trí khám
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="clinic_address"
                                            id="clinic_address"
                                            autoComplete="clinic_address"
                                            value={profile.userProfile.enity_user.clinic_address}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
                                        Dịch vụ khám
                                    </label>
                                    <div className="mt-2">
                                        <ComponentDataSerivces />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="type_medical" className="block text-sm font-medium leading-6 text-gray-900">
                                        Hình thức khám
                                    </label>
                                    <div className='flex justify-between'>
                                        <div>
                                            <input
                                                onChange={handleTypeChange}
                                                id="type_offline"
                                                name="type_offline"
                                                type="checkbox"
                                                value="offline"
                                                checked={profile.userProfile.enity_user.type_offline}
                                            />
                                            <label htmlFor="type_online">
                                                Khám trực tiếp tại cơ sở y tế
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                onChange={handleTypeChange}
                                                id="type_online"
                                                name="type_online"
                                                type="checkbox"
                                                value="online"
                                                checked={profile.userProfile.enity_user.type_online}
                                            />
                                            <label htmlFor="type_medical">
                                                Chẩn đoán trực tuyến
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form >
            </div >
        </>
    );
};
