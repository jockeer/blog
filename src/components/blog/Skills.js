import React from 'react'

export const Skills = () => {
  return (
    <div className='skills__bg pt-5 pb-5'>
        <div className="container">
            <center>
                <h1><u><i><b>Technologies</b> </i> </u></h1>
            </center>
            
            <br />
            <br />
            <div className="skills__tecnologias d-flex flex-wrap justify-content-center">
                <i className='fa-brands fa-react me-4' style={{color:'#00D8FF'}}></i>
                <i className="fa-brands fa-html5 me-4" style={{color:'#F25320'}}></i>
                <i className="fa-brands fa-css3-alt me-4" style={{color:'#0C73B8'}}></i>
                <i className="fa-brands fa-js me-4" style={{color:'#F7DF1E'}}></i>
                <i className='fa-brands fa-bootstrap me-4' style={{color:'#8412FA'}}></i>
                <i className='fa-brands fa-git-alt me-4' style={{color:'#F05033'}}></i>
                <i className='fa-brands fa-github me-4' style={{color:'#000'}}></i>
                <img className='me-4' src="https://image.shutterstock.com/image-vector/cogwheel-icon-api-sign-web-260nw-1791940115.jpg" alt="api" />
                <img className='me-4' src="http://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png" alt="postgreSQL" />
                <img className='me-4' src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="Mongo" />
                <img className='me-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="node"/>
                <img className='me-4' src="https://logowik.com/content/uploads/images/flutter5786.jpg" alt="flutter"/>
                <img  className='me-4'src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="typescript"/>

    

            </div>

        </div>
    </div>
  )
}
