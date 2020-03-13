import React from 'react';
import logo from '../../images/bist_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Teachers Info Hacked!</h1>
                    <p className="lead">Welcome to BIST Teachers Info Hacked Community. We know a lot of you want to know your teacher's income and want to express your anger against their lab, assignment and presentation torture. After knowing these secrets you would be able to blackmail your teachers.</p>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/some">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/somenavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus">About Us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="KHOJ The Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;