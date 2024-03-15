"use client";

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from 'react';

const Calendar = () => {
    const [dataAppointment, setDataAppointment] = useState([{ appointment_date: "" }]);
    const [dataDate, setDataDate] = useState([]);

    function handleEventClick(info: any) {
        alert('Event: ' + info.event.title);
    };

    function getAllAppointment() {
        fetch('http://localhost:3001/appointment/getall')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setDataAppointment(data);
            })
    };

    useEffect(() => {
        getAllAppointment();
    }, []);

    useEffect(() => {
        var dates: Array<any> = [];
        dataAppointment.forEach((item) => {
            const newDate = item.appointment_date.slice(0, -5);
            dates.push({
                title: 'Đã đặt lịch',
                description: "Hello",
                date: newDate
            });
        });

        setDataDate(dates);
    }, [dataAppointment]);

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={dataDate}
                eventTimeFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false }}
                eventClick={handleEventClick}
            />
        </>
    );
};

export default Calendar;

