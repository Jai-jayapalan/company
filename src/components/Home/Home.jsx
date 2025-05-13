import React from 'react';
import './Home.css';

import { homeData, servicesData, whoweareData } from '../../data/datas';
import herowrapperImg from '../../assets/images/hero-wrapper.svg'
import team1Img from '../../assets/images/team1.jpg'
import team2Img from '../../assets/images/team2.jpg'
import whyChooseUs from '../../assets/images/why-choose-us.jpg'

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Great <span>Product</span> is <br />built by <span>great teams</span></h1>
          <p>We help build and manage a team of world-class developers to bring your vision to life.</p>
          <a href="/contact" className="btn">Let's get started!</a>
        </div>
        <img src={herowrapperImg} alt="Team Illustration" className="hero-image" />
      </section>

      <section className="who-we-are">
        <div className="who-we-are-text">
          <h2>Innovators in Technology <br /> Creators of Digital Excellence</h2>
          <p>We're more than just a tech company – we're your digital transformation partners. With a blend of creativity, technical expertise, and business acumen, we deliver solutions that drive real impact and sustainable growth.</p>
          <a href="/about" className="who-we-are-btn">Discover Our Story <i className="fas fa-arrow-right"></i></a>
          <div className="who-we-are-icons">
            {
                whoweareData.map((item, index) => (
                    <div className="icon-card" key={index}>
                      <i className={item.icons}></i> {item.data}
                    </div>
                ))
            }
          </div>
        </div>
        <div className="who-we-are-images">
          <img src={team1Img} alt="Teamwork" />
          <img src={team2Img} alt="Collaboration" />
        </div>
      </section>

      <section className="services">
        <h2 className="section-titleone">Services we offer</h2>
        <div className="services-slider">
          <div className="services-container">
            {
                servicesData.map((item, index) => (
                    <div className="service-card" key={index}>
                      <img src={item.image} alt={item.title} />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </section>

      <section className="why-choose-usindex">
        <div className="contentindex">
          <h3 className="section-title"><span>WHY</span> CHOOSE US</h3>
          <h2 className="main-title">Empowering Businesses with <br /><span className="gradient-text">Cutting-Edge IT Solutions</span></h2>
          <p className="description">
            We provide scalable, reliable, and innovative technology solutions tailored to your business needs.
          </p>
          <div className="features">
            {
                homeData.map((item, index) => (
                    <div className="feature-box" key={index}>
                        <i className="icon">{item.icon}</i>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="image-sectionindex">
          <div className="image-containerindex">
            <img src={whyChooseUs} alt="Why Choose Us" />
            <div className="overlay-text">
              <span>4+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;