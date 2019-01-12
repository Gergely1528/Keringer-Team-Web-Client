import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/sidebar.css';
const mainNavigation = props => {
    let drawerClasses = 'sideBar';
    if (props.show) {
      drawerClasses = 'sideBar open';
    }
    return (
    <nav className={drawerClasses}>                              
        <ul>
            <li>
                <NavLink to="/createuser" onClick={props.click}>
                    <i className="fas fa-user-plus"></i>
                    Létrehozás
                </NavLink>
            </li>
            <li>
                <NavLink to="/updateuser" onClick={props.click}>
                    <i className="fas fa-user-edit"></i>
                    Módosítás
                    </NavLink>
            </li>
            <li>
                <NavLink to="/readuser" onClick={props.click}>
                    <i className="fas fa-user-tag"></i>
                    Megtekintés
                    </NavLink>
            </li>
            <li>
                <NavLink to="/deleteuser" onClick={props.click}>
                    <i className="fas fa-user-minus"></i>
                    Törlés
                    </NavLink>
            </li>
        </ul>
    </nav>
);
    };


export default mainNavigation;