import React from 'react'

import './CourseLandingPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faQuestionCircle, faTabletAlt, faCertificate } from '@fortawesome/free-solid-svg-icons'

const includes = [
    { icon: faFileAlt, text: 'One project file' },
    { icon: faQuestionCircle, text: '3 chapter quizzes' },
    { icon: faTabletAlt, text: 'Access on tablet and phone' },
    { icon: faCertificate, text: 'Certificate of completion' },
]

// heading, description, techs

const CourseLandingPage = ({ heading, overview, description, techs=[], ListAllUses, ImageProfile, price, duration, dimension, CoursePdf, pdfName }) => {

  return (
    <>
        <div className='sectionj'>
            <div className='text-elementj'>
                <h1>
                    {heading}
                </h1>
                <p>Product Cospixare</p>
                <p>Duration {duration}</p>
                <p>Price {price}</p>
                <h5>{overview}</h5>
                <div className='containerj'>
                    {
                        techs.map((tech, index) => (
                            <p key={index}>{tech}</p>
                        ))
                    }
                </div>
                <div className="buttonsj">
                    <div className="btn1j">
                        <a href='/applyNow'>Apply Now</a>
                    </div>
                    <div className="btn2j">
                        <a href={CoursePdf} download={pdfName}>Download Course Detail</a>
                    </div>
                </div>
            </div>
            <div className='image-elementj'>
                {
                    dimension? (
                        <img src={ImageProfile} width={dimension} height={dimension} alt="sample image" />
                    ) : (
                        <img src={ImageProfile} alt="sample image" />
                    )
                }
            </div>
        </div>
        <div className="course-sectionj">
            <h2 className="section-headingj">What's included</h2>
            <div className="includes-gridj">
                {includes.map((item, index) => (
                <div className="include-cardj" key={index}>
                    <FontAwesomeIcon icon={item.icon} className="iconj" />
                    <p>{item.text}</p>
                </div>
                ))}
            </div>

            <div className="course-descriptionj">
                <h2>Course description</h2>
                <p>
                {description}
                </p>
            </div>
            <div className="learn-sectionj">
                <h2>What you will learn</h2>
                <ul className="learn-listj">
                    {ListAllUses.map((item, index) => (
                    <li key={index} className="learn-itemj">
                        ✅ {item}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default CourseLandingPage