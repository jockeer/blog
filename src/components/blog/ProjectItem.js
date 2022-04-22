import React from 'react'
import { TecnoItem } from './TecnoItem'

export const ProjectItem = ({title, demo, github, image, tecnos}) => {
    return (
        <div className="proyecto-item mt-5">
            <div className="projects__project" style={{
                backgroundImage: `url(${image})`,
                backgroundSize:'cover',
                backgroundPositionX:'center'
            }}>
            
                <div className="projects__back-project d-flex">
                    {github!=='' && 
                        <a className='btn mb-3' href={github} target='_blank' rel="noopener noreferrer">
                            View github code
                        </a>
                    }
                    
                    {demo!=='' && 
                        <a className='btn btn-info' href={demo} target='_blank' rel="noopener noreferrer">
                            View Demo
                        </a>
                    }
                </div>
            </div>
            <h3 className='mt-3 fw-bold'>{title}</h3>
            <hr />
            <div className="tecnologias d-flex flex-wrap">
                {tecnos.map((tec, i) => <TecnoItem key={i} tec={tec}/>)}
                
                

            </div>
        </div>
    )
}
