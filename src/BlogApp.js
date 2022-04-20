import React from 'react'
import { ProjectState } from './context/projects/ProjectState'


import { AppRoutes } from './routes/AppRoutes'

export const BlogApp = () => {
  return (
        <ProjectState>
          <AppRoutes />

        </ProjectState>

      
    
  )
}