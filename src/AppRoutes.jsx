import React from 'react'
import { Routes, Route } from 'react-router'

import { Terms, ThankYou, Privacy, ApplyForm } from './utils'
import { Home, About, Contact, 
  Career, Service, DigitalMarketing, Team, 
  Cloud, Logo, Uiux, Software, Web, CourseList, WebDev, AIDev, AppDev, MLDev
} from './components'

const AppRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/career' element={<Career />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/terms' element={<Terms />} />
    <Route path='/policy' element={<Privacy />} />
    <Route path='/thankyou' element={<ThankYou />} />
    <Route path='/applyNow' element={<ApplyForm />} />
    <Route path='/team' element={<Team />} />

    {/* Services */}
    <Route path='/service' element={<Service />} />
    <Route path='/service/web_service' element={<Web />} />
    <Route path='/service/software_service' element={<Software />} />
    <Route path='/service/uiux_service' element={<Uiux />} />
    <Route path='/service/logo_service' element={<Logo />} />
    <Route path='/service/cloud_service' element={<Cloud />} />
    <Route path='/service/digitalmarketing_service' element={<DigitalMarketing />} />

    {/* Courses */}
    <Route path='/course' element={<CourseList />} />
    <Route path='/course/web-dev' element={<WebDev />} />
    <Route path='/course/ai' element={<AIDev />} />
    <Route path='/course/app' element={<AppDev />} />
    <Route path='/course/ml' element={<MLDev />} />
  </Routes>
  )
}

export default AppRoutes