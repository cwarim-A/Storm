import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </>
  )
}

export default App