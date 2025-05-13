import React from 'react';
import './Career.css';

import { CareerBenefitsData, CareerTeamData } from '../../data/careerData';
import CareerForm from '../CareerForm/CareerForm';
import BackgroundImg from '../../assets/images/careergrowth.svg'

const Career = () => {

  return (
    <main>
      <section
        id="career-hero"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="career-content">
          <h1 className="career-title">Transform Tomorrow, Today</h1>
          <p className="career-description">
            At <span>Cospixare Technologies</span>, we're not just building software - we're crafting the future. 
            Join our dynamic team where innovation meets opportunity, and your ideas shape tomorrow's technology.
            We offer:
          </p>
          <ul className="career-benefits">
            {
                CareerBenefitsData.map((benefit, index) => (
                    <li key={index}>
                        <i className={benefit.icon}></i>
                        {benefit.name}
                    </li>
                ))
            }
          </ul>
          <div className="career-cta">
            <a href="#career-form-section" className="career-button primary">View Open Positions</a>
          </div>
          <div className="career-stats">
            {
                CareerTeamData.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <span className="number">{stat.number}</span>
                        <span className="label">{stat.description}</span>
                    </div>
                ))
            }
          </div>
        </div>
      </section>
      <section id="career-form-section" className="career-form-section">
        <div className="container-four">
          <h2>Apply for a Career at Cospixare Technologies</h2>
          <CareerForm />
        </div>
      </section>
    </main>
  );
};

export default Career;