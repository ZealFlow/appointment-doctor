"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSearchParams } from 'next/navigation';

export default function TimeSlot() {
  const [listTimeSlot, setListTimeSlot] = useState([]);
  const searchParams = useSearchParams();
  const tbl_id = searchParams.get('tbl_id');

  useEffect(() => {
    const doctor_id = Cookies.get('user_id');
    fetch('http://localhost:3001/schedule/timeslot/'+`${tbl_id}`, {
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
            setListTimeSlot(data);
          });
        }
      })
  }, []);

  function MappingUiData() {
    return listTimeSlot.map((timeSlot) => {
      return (
        <>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{timeSlot.time_slot_id}</th>
            <td className="px-4 py-3">{timeSlot.period}</td>
            <td className="px-4 py-3">{timeSlot.status.data}</td>
          </tr>
        </>
      )
    })
  }

  return (
    <>
      <div className="my-8 px-8 w-screen">
        <div>
          <div>
            <h1>Quản lý khung giờ khám</h1>
          </div>
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
                            Khung giờ khám
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
      </div >
    </>
  );
}
