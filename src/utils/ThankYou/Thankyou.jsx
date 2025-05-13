import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';

import './Thankyou.css';
import ThankYouImage from '../../assets/images/thank-you.png'
import { socialIcons } from '../../data/careerData'

const ThankYouIcons = [
  <FaFacebookF />,
  <FaLinkedinIn />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaThreads />
]

const ThankYou = () => {
  return (
    <main>
      <section id="thank-you-section">
        <div className="thank-you-card">
          <img 
            src={ThankYouImage}
            alt="Thank You"
            className="thank-you-image"
          />
          
          <h2 className="thank-you-title">
            🎉 Thank You for Reaching Out!
          </h2>
          
          <p className="thank-you-message">
            Your message has been successfully received. We're excited to explore potential 
            collaborations and will get back to you within 24-48 hours.
          </p>

          <div className="social-icons">
            {
              socialIcons.map((data, index) => (
                <a
                  href={data.link}
                  title={data.title}
                  aria-label={data.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={index}
                >
                  {ThankYouIcons[index]}
                </a>
              ))
            }
          </div>

          <div className="message-box">
            <p>🚀 While you're here, why not:</p>
            <ul>
              <li>Explore our latest tech insights on social media</li>
              <li>Subscribe to our newsletter for updates</li>
              <li>Check out our portfolio of successful projects</li>
            </ul>
            <p>Need immediate assistance? Call us at <strong>+91 8637498271</strong></p>
          </div>

          <div className="action-buttons">
            <a href="/" className="home-button primary-btn">Return to Homepage</a>
            <a href="/service" className="portfolio-button secondary-btn">View Our Services</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;