"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function TimeTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  interface Schedule {
    medicine_schedule_id: number;
    datework: string;
    starttime: string;
    endtime: string;
    cost: number;
  }

  const [listSchedule, setListSchedule] = useState<Schedule[]>([]);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createSchedule = async () => {
    const dateworkInput: HTMLInputElement | null = document.querySelector('input[name="datework"]');
    const starttimeInput: HTMLInputElement | null = document.querySelector('input[name="starttime"]');
    const endtimeInput: HTMLInputElement | null = document.querySelector('input[name="endtime"]');
    const costInput: HTMLInputElement | null = document.querySelector('input[name="cost"]');
    const peroidInput: HTMLInputElement | null = document.querySelector('input[name="peroid"]');


    if (!dateworkInput || !starttimeInput || !endtimeInput || !costInput || !peroidInput) {
      console.error("One or more input fields are missing.");
      return;
    }

    const datework = dateworkInput.value;
    const starttime = starttimeInput.value;
    const endtime = endtimeInput.value;
    const cost = costInput.value;
    const peroid = peroidInput.value;
    const doctor_id = Cookies.get('user_id');

    const formData = {
      datework,
      starttime,
      endtime,
      cost,
      peroid,
      doctor_id
    };

    try {
      const response = await fetch('http://localhost:3001/schedule/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Refresh the schedule list
        fetchSchedule();
      } else {
        console.error("Failed to create schedule.");
      }
    } catch (error) {
      console.error("Error while creating schedule:", error);
    }
  };

  const fetchSchedule = async () => {
    const doctor_id = Cookies.get('user_id');

    try {
      const response = await fetch(`http://localhost:3001/schedule/${doctor_id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setListSchedule(data);
      } else {
        console.error("Failed to fetch schedule.");
      }
    } catch (error) {
      console.error("Error while fetching schedule:", error);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  const MappingUiData = () => {
    return listSchedule.map((schedule) => (
      <tr key={schedule.medicine_schedule_id} className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{schedule.medicine_schedule_id}</th>
        <td className="px-4 py-3">{schedule.datework}</td>
        <td className="px-4 py-3">{schedule.starttime}</td>
        <td className="px-4 py-3">{schedule.endtime}</td>
        <td className="px-4 py-3">{schedule.cost}</td>
        <td className="px-4 py-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              window.location.href = `/doctor/timetable/timeslot?tbl_id=${schedule.medicine_schedule_id}`;
            }}
          >
            Xem giờ khám
          </button>
        </td>
        <td className="px-4 py-3 flex items-center justify-end">
          <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
              </li>
            </ul>
            <div className="py-1">
              <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="my-8 px-8 w-screen">
        <div>
          <div>
            <h1>Quản lý kế hoạch khám bệnh</h1>
          </div>
          <button
            onClick={toggleModal}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Tạo lịch khám
          </button>
          {isModalOpen && (
            <div id="crud-modal" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl relative w-full max-w-md">
                <div className="p-6">
                  <div className="flex justify-between items-center border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Tạo lịch khám bệnh</h3>
                    <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Ngày thứ
                        </label>
                        <input
                          type="date"
                          name="datework"
                          id="datework"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product name"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="starttime"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Thời gian bắt đầu
                        </label>
                        <input
                          type="time"
                          name="starttime"
                          id="starttime"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Thời gian kết thúc
                        </label>
                        <input
                          type="time"
                          name="endtime"
                          id="endtime"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Số tiền khám
                        </label>
                        <input
                          type="number"
                          name="cost"
                          id="cost"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Khoảng thời gian
                        </label>
                        <input
                          type="number"
                          name="peroid"
                          id="peroid"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={createSchedule}
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Khởi tạo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="max-w-screen-xl">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            ID
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Ngày làm việc
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Thời gian bắt đầu
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Thời gian kết thúc
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Giá tiền khám
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Trạng thái
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <MappingUiData />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
