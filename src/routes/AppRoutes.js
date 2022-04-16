import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BlogScreen } from '../components/blog/BlogScreen'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <BlogScreen /> }/>
        </Routes>
    </Router>
  )
}
