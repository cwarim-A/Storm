import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import PrivacyPage from './pages/PrivacyPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/faq' element={<FaqPage/>}/>
            <Route path="/privacy-policy" element={<PrivacyPage/>}/>
        </Routes>
    </>
  )
}

export default App