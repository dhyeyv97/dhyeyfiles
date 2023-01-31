import React from 'react'
import { Link } from 'react-router-dom'
import { useTitle } from './App'

const Navbar = () => {

        useTitle("Spotify - Home")

function myFun() {
    var navCollapse = document.getElementById("navbarNav");
    navCollapse.classList.remove("show");
} 

    return (
        <nav className="navbar navbar-expand-lg text-white">
            <div className='container-fluid nav-con'>
                <div><i className="fa-brands fa-spotify"></i></div>
                <Link className="navbar-brand barNav"  onClick={myFun} to="/">Spotify</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <button id='navId'>Nav</button> */}
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i className="fas fa-stream navbar-toggler-icon"></i>
                </button>


                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                    <ul className="navbar-nav menu-navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={myFun} >
                            <Link className="nav-link link-nav " id='navId' role="button" to="/premium">Premium</Link>
                        </li>
                        <li className="nav-item" onClick={myFun}>
                            <Link className="nav-link link-nav " id='navId' role="button" to="/support">Support</Link>
                        </li>
                        <li className="nav-item" onClick={myFun}>
                            <Link className="nav-link link-nav " id='navId' role="button"  to="/download">Download</Link>
                        </li>
                        <li className="nav-item">
                            <i className="fa-solid fa-slash"></i>
                        </li>
                        <li className="nav-item">
                            <ul className='nav-log'>
                                <li className="nav-item">
                                    <Link className="nav-link link-nav" to="/">Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link-nav" to="/">Log in</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>



    )
}

export default Navbar