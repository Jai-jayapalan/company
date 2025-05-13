import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import './Team.css';

import { teamMembers } from '../../data/Teammembers'

const socialIcons = [
  <FaFacebookF />,
  <FaLinkedinIn />,
  <FaInstagram />,
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState(teamMembers[0].backgroundColor);

  const handleClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setBgColor(teamMembers[index].backgroundColor);
    }
  };

  useEffect(() => {
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.background = ` #0079d1`;
  }, [bgColor]);

  return (
    <div className='teamjs' id='ourTeam'>
      <div className="team-sliderjt">
        <div className="team-contentjt animated-border-alt">
            <div className="data1jt">
              <div className="blob" style={{
                background: `linear-gradient(135deg, ${teamMembers[activeIndex].backgroundColor}, #0079d1)`
              }}></div>
              <h1 className="team-namejt">
                {teamMembers[activeIndex].name.split(' ')[0]}{' '}
                <span>{teamMembers[activeIndex].name.split(' ')[1]}</span>
              </h1>
              <h3 className="team-rolejt">{teamMembers[activeIndex].role}</h3>
              <p className="team-descriptionjt">{teamMembers[activeIndex].description}</p>
              <div className="team-socialsjt">
                {
                  teamMembers[activeIndex].socials.length === 3? (
                    teamMembers[activeIndex].socials.map((platform, idx) => (
                      <a href={platform} key={idx}>
                        {socialIcons[idx]}
                      </a>
                    ))
                  ) : (
                    <a href={teamMembers[activeIndex].socials[0]}>
                      {socialIcons[0]}
                    </a>
                  )
                }
              </div>
              <div className="circle-navigationjt">
                {
                  teamMembers.map((_, index) => (
                  <div 
                    key={index}
                    className={`circle ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                    style={{ 
                      backgroundColor: teamMembers[index].backgroundColor,
                      boxShadow: index === activeIndex ? `0 0 20px ${_.backgroundColor}` : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="data2jt neon-border">
              <img
                src={teamMembers[activeIndex].ProfileImg || teamMembers[activeIndex].image}
                alt={teamMembers[activeIndex].name}
                loading='lazy'
                className="portrait-image"
              />
            </div>
        </div>
        
        <div className="team-carousel">
          <svg className="thread-connections" width="100%" height="100%">
            <line 
              x1="50%"
              y1="50%"
              x2="30%"
              y2="30%"
              stroke="white"
              strokeWidth="5"
            />
            <line
              x1="50%" 
              y1="50%" 
              x2="70%" 
              y2="30%" 
              stroke="white" 
              strokeWidth="5"
            />
          </svg>
          
          {teamMembers.map((member, index) => {
            let className = 'team-cardjt';
            if (index === activeIndex) {
              className += ' active neon-border';
            } else if (index === (activeIndex + 1) % teamMembers.length) {
              className += ' next';
            } else if (index === (activeIndex - 1 + teamMembers.length) % teamMembers.length) {
              className += ' prev';
            } else {
              className += ' hidden';
            }
            
            return (
              <div
                key={index}
                className={className}
                onClick={() => handleClick(index)}
                style={{ borderColor: member.backgroundColor }}
              >
                <img src={member.image} loading='eager' alt={member.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;