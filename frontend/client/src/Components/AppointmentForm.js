import React, { useState } from 'react';
import '../Styles/AppointmentForm.css';
import { useParams } from 'react-router-dom';

const AppointmentForm = () => {
  const { did, time, tslid } = useParams();

  function AppointmentDoctor() {
    fetch('http://localhost:3001/appointment/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...formData, did, time, tslid })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.paymentUrl);
        window.open(data.paymentUrl);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstname: '',
      lastname: '',
      dob: '',
      gender: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      email: '',
      description: '',
    });

    AppointmentDoctor();

    fetch('http://localhost:3001/payment/vnpay', {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.paymentUrl);
        window.location.href = data.paymentUrl;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Appointment Booking Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label className="label">First Name:</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="">Select</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Province:</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label className="label">Mô tả bệnh (nếu có):</label>
          <input
            type=""
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="info-container">
          <div className="info-item">
            <span className="info-label">Giá khám:</span>
            <span className="info-value">100</span>
          </div>
          <div className="info-item">
            <span className="info-label">Thời gian khám:</span>
            <span className="info-value">20h</span>
          </div>
        </div>
        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
