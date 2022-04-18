import React from 'react'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Jumbotron } from './Jumbotron'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Skills } from './Skills'

export const BlogScreen = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Jumbotron />
      </div>
        <Skills />
        <Projects />
        <br />
        <br />
        <div className="container">
          <Contact />
        </div>
        <Footer/> 
    </>
  )
}
