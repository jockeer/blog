
import React, { useCallback, useReducer } from 'react'
import { peticionSinToken } from '../../helpers/peticion'
import { types } from '../../types/types'
import { ProjectContext } from './ProjectContext'
import { projectReducer } from './projectReducer'

export const ProjectState = ({children}) => {
    const initialState = {
        projects: []
    }

    const [ state, dispatch ] = useReducer( projectReducer, initialState )

    const obtenerProyectos =  useCallback(async () => {
        const resp = await peticionSinToken('projects')

        const data = await resp.json()

        console.log(data);
        dispatch({
            type: types.prGetProjects,
            payload: data.proyectos
            
        })
    },[])

    return (
        <ProjectContext.Provider value={{
            projects: state.projects,
            obtenerProyectos
        }}>
            {children}
        </ProjectContext.Provider>
    )
}
