import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Github from '../Components/Github'
import Home from '../Components/home'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Home/>
            <About />
            <Skills/>
            <Projects/>
            <Github/>
            <ContactUs/>
        </>
    )
}

export default Homepage