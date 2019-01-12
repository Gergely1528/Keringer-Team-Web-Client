import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../css/header.css';
import logo from '../kde_logo.png'
const Header = props => {
    return(

    <header className="header">
        <nav className="header_navigation">
            <div>
                <button className="toggle_button" onClick={props.drawerClickHandler}>
                    <div className="toggle_button_line"></div>
                    <div className="toggle_button_line"></div>
                    <div className="toggle_button_line"></div>
                </button>
            </div>
            {/*  <div>
                        <img className="img" src={logo} />
                    </div> */}
            <div className="header_logo">
                <NavLink to="/" >
                    <a>KERINGER-TEAM</a>
                </NavLink>
            </div>
        </nav>
    </header>
);
                };



export default Header;