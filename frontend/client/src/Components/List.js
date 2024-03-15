import React, { useEffect, useState } from 'react';
import '../Styles/List.css';

export default function List() {
  const [listDoctor, setListDoctor] = useState([]);
  const [listTimeSlot, setListTimeSlot] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/doctor/list')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setListDoctor(data.listDoctor);
      })

    fetch("http://localhost:3001/schedule/timeslot/3")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setListTimeSlot(data);
      })
  }, []);



  function Doctors() {
    return (
      <>
        {
          listDoctor.map((doctor) => {
            return (
              <div className="ProductItem">
                <div className="image">
                  <img className="avatar-image" src={"https://quoctesannhihaiphong.vn/wp-content/uploads/2020/12/BS-Diep-2.jpg"} />
                </div>
                <div className="middle aligned content">
                  <div className="description">
                    <div>{doctor.lastname} {doctor.firstname}</div>
                    <div>{doctor.email}</div>
                    <div>{doctor.province}</div>
                  </div>
                </div>
                <div>
                  <div className="container-schedule">
                    {
                      listTimeSlot.map((timeslot) => {
                        return (
                          <a  href={`/doctors/appointment/${doctor.user_id}/${timeslot.period}/${timeslot.time_slot_id}`}>
                            <div className="block-schedule">
                              <span>{timeslot.period}</span>
                            </div>
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    )
  };

  return (
    <div>
      <h1>Danh sách bác sĩ</h1>
      <Doctors />
    </div>
  );
}