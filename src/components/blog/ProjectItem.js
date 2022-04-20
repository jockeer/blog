import React from 'react'
import { TecnoItem } from './TecnoItem'

export const ProjectItem = ({title, demo, github, image, tecnos}) => {
    return (
        <div className="proyecto-item mt-5">
            <div className="projects__project" style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg')`,
                backgroundSize:'cover'
            }}>
            
                <div className="projects__back-project">
                    <a className='btn' href='https://github.com/jockeer' target='_blank' rel="noopener noreferrer">
                        View github code
                    </a>
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
