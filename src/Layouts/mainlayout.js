import React, { Component } from 'react';

import Header from './../components/header';
import Footer from './../components/footer';
import SideBar from './../components/sidebar';
import Backdrop from './../components/backdrop';

class MainLayout extends React.Component {
    state = {
        sideBarOpen: true
    };

    toggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideBarOpen : !prevState.sideBarOpen}
        });
    };

    render() {
        let sideBar;
        let backdrop;

        if (this.state.sideBarOpen) {
            sideBar = <SideBar />;
            backdrop = <Backdrop />;
        }
        return (
            <div className="container" >
                <Backdrop />
                <aside className="sideBar">
                    {sideBar}
                </aside>
                <section className="main">
                    <Header click={this.toggleClickHandler}/>
                    <div className="grid">
                        {this.props.children}
                    </div>
                    <Footer />
        </section>
            </div>
        )
    }
}

export default MainLayout;