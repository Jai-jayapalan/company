import React from 'react'
import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader, PageLoader } from './utils'
import { NavBar, Footer } from './components'

import AppRoutes from './AppRoutes'

function App() {

  return (
    <PageLoader>
      <CustomCursor />
      <GoogleAnalytics />
      <NavBar />
      <AppRoutes />
      <Footer />
    </PageLoader>
  )
}

export default App
