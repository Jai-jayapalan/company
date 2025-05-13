import React, { useState } from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaThreads } from 'react-icons/fa6';
import axios from 'axios';

import { SocialLinkData, QuickLinksData } from '../../data/FooterData';

const socialIcons = [
  <FaFacebookF />,
  <FaLinkedinIn />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaThreads />,
]

const Footer = () => {

  const [ email, setEmail ] = useState('')
  const navigate = useNavigate()

  const HandleSubscribeForm = async (e) => {
    e.preventDefault()
    try {
        await axios.post('http://localhost:3500/api/v1/subscribe/sendEmail', email, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          console.log('Form submitted successfully')
          window.alert('Thanks for subscribing')
          setEmail('')
          navigate('/')
        })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section about">
          <h2>About Company</h2>
          <p>
            We deliver innovative, scalable, and reliable technology solutions that drive your business forward.
          </p>
          <div className="social-icons">
            {
              SocialLinkData.map((item, index) => (
                <a href={item.destination} aria-label={item.label} key={index}>{socialIcons[index]}</a>
              ))
            }
          </div>
        </div>

        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            {
              QuickLinksData.map((item, index) => (
                <li key={index}>
                  <Link to={item.destination} target='_blank'>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <div className="subscribe-box">
            <form>
              <input 
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <button type="submit" className="cta-button">Subscribe</button>
            </form>
          </div>
          <p id="msg"></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Cospixare Technologies. All Rights Reserved.</p>
        <ul>
          <li>
            <Link to={'/terms'} style={{ textDecoration: 'none' }}>Terms & Conditions</Link>
          </li>
          <li>
            <Link to={'/career'} style={{ textDecoration: 'none' }}>Careers</Link>
          </li>
          <li>
            <Link to={'/policy'} style={{ textDecoration: 'none' }}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
