import React from 'react'

import {Routes,Route} from "react-router-dom"


import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Education from '../Pages/Education'
import Home from '../Pages/Home'
import Project from '../Pages/Project'
import Skills from '../Pages/Skills'


const AllRoutes = () => {
  return (
    

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
       
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
        </Routes>



  
  )
}

export default AllRoutes