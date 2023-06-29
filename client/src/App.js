import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import { Navbar, Footer } from './components'
import HomePage from './HomePage'
import {Register, Login, Summary, Paragraph, Chatbot, JSconverter, ScifiImage} from './pages'

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/summary' element = {<Summary />} />
        <Route path = '/paragraph' element = {<Paragraph />} />
        <Route path = '/chatbot' element = {<Chatbot />} />
        <Route path = '/js-converter' element = {<JSconverter />} />
        <Route path = '/scifi-image' element = {<ScifiImage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App