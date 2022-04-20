import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../../context/projects/ProjectContext'
import { ProjectItem } from './ProjectItem'

export const Projects = React.memo(() => {
    const {projects, obtenerProyectos} = useContext(ProjectContext)

    useEffect(() => {
       
        obtenerProyectos()

        
    }, [obtenerProyectos])
    
    return (
        <div className='container mt-5 mb-5'>
            <center>
                <h1><i><b>Projects</b> </i></h1>

            </center>
            <div className="projects d-flex justify-content-evenly flex-wrap">
                
                {projects.map(p => <ProjectItem key={p.id} {...p}/>)}
            
                
            </div>
        </div>
    )
})
