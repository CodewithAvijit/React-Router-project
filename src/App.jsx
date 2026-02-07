import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import User from './pages/User'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/user/:id' element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
App