import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Header/Header.css';
import logo from '../Components/images/logo-gun.png';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-all">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='ms-5'>
                        <img src={logo} className='w-50 ' alt="" />
                    </div>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item  fw-bolder">
                                <Link className="nav-link active text-danger" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Comodities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Feautures</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Notation</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;