import React from 'react';

import './Contact.css'
import { contactInfoData } from '../../data/datas';
import FormSection from '../FormSection';

const Contact = () => {
  return (
    <main>
      <section id="contact-hero">
        <div className="overlay"></div>
        <div className="contact-content">
          <h1 className="contact-title">Let's Connect & Build Something Amazing</h1>
          <p className="contact-description" style={{ color: 'rgb(255, 238, 0)' }}>
            Whether you have a project in mind or just want to say hello, our team at<br/>
            <span>Cospixare Technologies</span> is here to help. Let's create the future together.
          </p>
          <a href="#contact-section" className="contact-button">Get in Touch</a>
        </div>
      </section>

      <section id="contact-section" className="contact-section-wrapper">
        <h3 className="contact-subtitle">Got a Question?</h3>
        <h1 className="contact-title">We are Here to Answer It!</h1>
        <p className="contact-description">
          Please send us information about your project. One of our project managers will evaluate your requirements
          and provide a formal proposal. Your details will help us assess your project accurately.
        </p>

        <div className="contact-container">
          <div className="contact-form">
            <FormSection />
          </div>
          <div className="contact-info">
            {
                contactInfoData.map((data, index) => (
                    <div className="info-box" key={index}>
                      <h3>{data.title}</h3>
                      <p>
                        {data.description}
                        {data.link && data.linkText && (
                          <a href={data.link} target="_blank" rel="noopener noreferrer">
                            {data.linkText}
                          </a>
                        )}
                      </p>
                    </div>
                ))
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;