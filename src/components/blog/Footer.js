import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='container mt-5 mb-5'>
        <div className="d-flex justify-content-between">
            <h3 className='fw-bold'>Blog</h3>
            <div className="footer__redes">
            <a className='ms-5' href="https://www.instagram.com/dan_gorianz/" target='_blank' rel="noopener noreferrer" >
                <i className="fa-brands fa-instagram footer__icon"></i>
            </a>
            <a className='ms-5' href="https://github.com/jockeer" target='_blank' rel="noopener noreferrer" >
                <i className="fa-brands fa-github footer__icon"></i>
            </a>
            <a className='ms-5' href="https://www.facebook.com/danielgorianz10/" target='_blank' rel="noopener noreferrer" >
                <i className="fa-brands fa-facebook footer__icon"></i>
            </a>
            <a className='ms-5' href="www.linkedin.com/in/daniel-guillermo-gorianz-ferrufino-296511184" target='_blank' rel="noopener noreferrer" >
                <i className="fa-brands fa-linkedin footer__icon"></i>
            </a>
            </div>
        </div>
        <br />
        <h6 className='fw-bold'> &copy; Blog {date}</h6>
        <br /><br />
    </footer>
  )
}
