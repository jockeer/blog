import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-5">
            <Link className="navbar__navItem" to={'/'} > <h2><b>Blog</b></h2> </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i className='fa-solid fa-bars'></i>
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Blog</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                        <h4><i className='fa-solid fa-xmark'></i></h4>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className='navbar-nav justify-content-end flex-grow-1'>
                        <Link className="navbar__navItem me-5" to={'/'} > <h5>About</h5> </Link>
                        <Link className="navbar__navItem me-5" to={'/'} > <h5>Projects</h5> </Link>
                        <Link className="navbar__navItem me-5" to={'/'} > <h5>Contact</h5> </Link>
                    </div>

                    {/* <ul className="navbar-nav justify-content-end flex-grow-1">
                        <li className="nav-item ">
                            <a className="navbar__navItem" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar__navItem" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar__navItem" href="/">Link</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    </nav>
  )
}
