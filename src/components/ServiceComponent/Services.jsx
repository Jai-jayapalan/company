import React from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { servicesData } from '../../data/careerData';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

const ServicesPage = () => {

    console.log(servicesData)

  return (
    <main>
      <section className="herotwo">
        <div className="overlay"></div>
          <div className="hero-contenttwo">
            <h1 className="animate-text">
              <span>Empower Your Business</span> with <br /> Cutting-Edge <span>Technology</span>
            </h1>
            <p className="animate-text">
              Unlock new possibilities with our AI-driven solutions, custom software development, 
              and comprehensive digital strategies tailored to your needs.
            </p>
            <a href="#servicespage" className="cta-btn animate-btn">Discover Our Services</a>
          </div>
        <div className="parallax-bg"></div>
      </section>

      <section className="servicestwo" id="servicespage">
        <h2 className="section-titletwo">Our Services</h2>
        <div className="service-containertwo">
          {
          servicesData.map((service, index) => (
            <div 
              className="service-cardtwo"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-icon">
                <FontAwesomeIcon icon={service.dataIcon} beat size='sm' style={{ color: '#ffffff', }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="btn">Learn More →</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;