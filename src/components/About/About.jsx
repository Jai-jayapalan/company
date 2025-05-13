import React, { useState } from 'react';
import './About.css';

import AboutProfileImage from '../../assets/images/about-cospixare.png'

import Team from '../Team/Team'

import { valuesData, technologiesData } from '../../data/datas';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : valuesData.length - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev < valuesData.length - 1 ? prev + 1 : 0));
  };

  return (
    <main>
      <section id="about-hero">
        <div className="hero-content-about">
          <h1 className="hero-title-about">Innovate. Elevate. Transform.</h1>
          <p className="hero-description-about">
            At <span>Cospixare Technologies</span>, we build cutting-edge software solutions to power the future of technology. From AI-driven platforms to seamless user experiences, we push boundaries to create something extraordinary.
          </p>
          <a href="#about-cospixare" className="cta-button-about">Learn More</a>
        </div>
      </section>

      <section id="about-cospixare">
        <div className="text-container-cospixare">
          <h3 className="small-heading-cospixare">We're Cospixare Technologies</h3>
          <h1 className="main-heading-cospixare">A world of talent<br />at your fingertips</h1>
          <p className="paragraph-cospixare">
            We assemble senior-level, dedicated teams of developers to help fast-growing startups 
            and innovative enterprises drive impact and achieve their goals.
          </p>
          <p className="paragraph-cospixare">
            With over a decade of experience, we have grown into a truly global operation. 
            While our clients focus on business, we ensure their projects are executed seamlessly.
          </p>
          <a href="/contact" className="button-cospixare">Let's work together <span>→</span></a>
        </div>
        
        <div className="image-container-cospixare">
          <img src={AboutProfileImage} alt="Team Collaboration" />
        </div>
      </section>

      <section id="values-section">
        <div className="values-header">
          <h3 className="values-subtitle">The Values We Share</h3>
          <h1 className="values-title">Core principles that drive our company</h1>
          <p className="values-description">We believe in strong ethical values that build trust and innovation.</p>
        </div>

        <div className="values-tabs">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {`0${index + 1} ${value.title}`}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(activeTab + 1) * (100 / valuesData.length)}%` }}
          ></div>
        </div>

        <div className="values-slider">
          <div className="slide active">
            <div className="image-container">
              <img src={valuesData[activeTab].image} alt={valuesData[activeTab].title} />
            </div>
            <div className="text-container">
              <h2>{valuesData[activeTab].title}</h2>
              <p>{valuesData[activeTab].description}</p>
            </div>
          </div>
        </div>

        <div className="values-navigation">
          <button id="prev" onClick={handlePrev}>←</button>
          <span id="slide-number">{activeTab + 1} / {valuesData.length}</span>
          <button id="next" onClick={handleNext}>→</button>
        </div>
      </section>

      <section id="tech-section">
        <h2 className="tech-title">Technologies We Use</h2>
        <div className="tech-grid">
          {technologiesData.map((tech, index) => (
            <div className="tech-card" key={index}>
              <img src={tech.image} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Team />
    </main>
  );
};

export default About;