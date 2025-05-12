import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'
import './form.css';

import Loader from '../Loader/Loader';

const RegistrationForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    whatsnum: '',
    email: '',
    course: '',
    district: '',
  });

  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    try {
        await axios.post('http://localhost:3500/api/v1/course/sendEmail', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((success) => {
          console.log('Form submitted successfully', success.status)
          setFormData({
            fname: '',
            lname: '',
            number: '',
            whatsnum: '',
            email: '',
            course: '',
            district: '',
            })
            navigate('/thankyou')
        }).catch((err) => { console.log(err.message) })
        .finally(() => { setLoading(false) })
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="wrapper">
      <div className="registration_form">
        <div className="title">Registration Form</div>
        <form onSubmit={handleSubmit}>
          <div className="form_wrap">
            <div className="input_grp">
              <div className="input_wrap">
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder='First name'
                  required
                />
              </div>
              <div className="input_wrap">
                <input
                  type="text"
                  name="lname"
                  placeholder='Last name'
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input_wrap">
              <input
                type="tel"
                name="number"
                placeholder='Enter your mobile number'
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <input
                type="tel"
                name="whatsnum"
                placeholder='Enter your whatsapp number'
                value={formData.whatsnum}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="web">Full stack Web Development</option>
                <option value="app">Full stack App Development</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ml">Machine Learning</option>
              </select>
            </div>

            <div className="input_wrap">
              <input
                type="text"
                name="district"
                placeholder='Enter your district'
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <button className="submit_btn" type='submit'>Register Now</button>
            </div>
          </div>
        </form>
        {
            loading && <Loader />
        }
      </div>
    </div>
  );
};

export default RegistrationForm;
