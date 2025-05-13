import React from 'react'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CourseList.css'
import { CourseListData } from '../../data/CourseData'
import OverALLCourse from '../../assets/coursePdf/Over All Course Brochure.pdf'

const CourseList = () => {
    return(
        <>
             <main>
                  <section className="servicestwo" id="servicespage">
                    <h2 className="section-titletwo">Our Courses</h2>
                    <a href={OverALLCourse} download='OverAllCourse' className="cta-btn animate-btn">Download Now</a>
                    <div className="service-containertwo">
                        {
                            CourseListData.map((data, index) => (
                                <div
                                    className="service-cardtwo"
                                    data-aos="fade-up"
                                    data-aos-delay={1.3}
                                    key={index}
                                >
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={data.icon} beat size='sm' style={{ color: '#ffffff', }} />
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p style={{ textAlign: 'left' }}>{data.description}</p>
                                    <a className="btn" href={data.destination}>Read more →</a>
                                </div>
                            ))
                        }
                    </div>
                  </section>
                </main>
        </>
    )
}

export default CourseList