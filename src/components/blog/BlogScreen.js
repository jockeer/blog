import React from 'react'
import { Jumbotron } from './Jumbotron'
import { Navbar } from './Navbar'
import { Skills } from './Skills'

export const BlogScreen = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Jumbotron />
      </div>
        <Skills />
    </>
  )
}
