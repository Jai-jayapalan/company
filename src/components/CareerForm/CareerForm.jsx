import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

import './CareerForm.css'
import { Loader } from '../../utils';

const CareerForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        file: null,
        coverLetter: ''
      });
    
      const [loading, setLoading] = useState(false)
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: files ? files[0] : value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
          await axios.post('http://localhost:3500/api/v1/career/sendEmail', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((success) => { 
            console.log('form submitted successfully', success.status)
            navigate('/thankyou')
          } )
          .catch((err) => { console.log('error', err.message) })
          .finally(() => { setLoading(false) })
        } catch (error) {
            console.log(error.message)
        }
      };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >   
        <div className="form-groups">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-groups">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            pattern='\S+@\S+\.\S+'
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel"
            name="phone" 
            autoComplete="tel" 
            value={formData.phone}
            onChange={handleChange}
            pattern='^\d{10}$'
            required 
          />
        </div>
        <div className="form-groups">
            <label htmlFor="resume">Upload Resume (PDF/DOC):</label>
            <input 
              type="file" 
              name="file"
              className="file-upload"
              accept=".pdf, .doc, .docx"
              onChange={handleChange}
              required
            />
        </div>
            <div className="form-groups">
            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea
                name="coverLetter"
                rows="4"
                value={formData.coverLetter}
                onChange={handleChange}
                required
            ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
      {
          loading && <Loader />
      }
    </>
  )
}

export default CareerForm