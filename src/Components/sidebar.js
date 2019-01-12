import React, { Fragment, Button } from 'react';
import { NavLink } from 'react-router-dom';
import './../css/sidebar.css';

class SideBar extends React.Component {
    state = {
        showDiv1: false,
        showDiv2: false,
        showDiv3: false
    }

    render() {
        const { showDiv1 } = this.state
        const { showDiv2} = this.state
        const { showDiv3} = this.state
        return (
            <div classname="side-drawer">
            <Fragment classname="side-drawer">
                    <div className="headline">Basic menü</div>
                    <nav >
                        <button className="button" onClick={() => parent.setState({ showDiv1: !showDiv1 })}>
                                    <ul>
                                        <li>
                                            <NavLink to="/readuser" ><i className="fas fa-users"></i>Felhasználók</NavLink>
                                        </li>
                                    </ul></button>
                                {parent.showDiv1 && (
                                    
                                        <ul>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                        </ul>
                                    
                                )}
                                <button className="button" onClick={() => this.setState({ showDiv2: !showDiv2 })}>
                                    <ul>
                                        <li>
                                            <NavLink to="/readuser" ><i className="fas fa-users"></i>Munkák</NavLink>
                                        </li>
                                    </ul></button>
                                {showDiv2 && (
                                    
                                        <ul>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                        </ul>
                                    
                                )}
                                <button className="button" onClick={() => this.setState({ showDiv3: !showDiv3 })}>
                                    <ul>
                                        <li>
                                            <NavLink to="/readuser" ><i className="fas fa-users"></i>Fizetés</NavLink>
                                        </li>
                                    </ul></button>
                                {showDiv3 && (
                                    
                                        <ul>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readuser" ><i className="fas fa-users"></i>readUser</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/readpaid" >
                                                    <i className="fas fa-user"></i>
                                                    readPaid</NavLink>
                                            </li>
                                        </ul>
                                    
                                )}
                    </nav>
            </Fragment>
            </div>
        );
    }
}

export default SideBar;