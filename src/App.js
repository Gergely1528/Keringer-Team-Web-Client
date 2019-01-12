import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import MainNavigation from './components/MainNavigation/mainNavigation';
import Footer from './components/footer';
import Backdrop from './components/backdrop';

import CreateUserPage from './Pages/user/createUser';
import UpdateUserPage from './Pages/user/updateUser';
import ReadUserPage from './Pages/user/readUser';
import DeleteUserPage from './Pages/user/deleteUser';

import './css/app.css'
class App extends Component {
  state = {
    sideDrawerOpen: false,
    showDiv1: false,
        showDiv2: false,
        showDiv3: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() {
    let backdrop;
    const { showDiv1 } = this.state

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <React.Fragment>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <MainNavigation show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        {backdrop}
        { showDiv1 }
          <main className="main">
          <Footer />
            <Switch>
              <Route path="/" to="/auth" exact />
              <Route path="/createuser" component={CreateUserPage}/>
              <Route path="/updateuser" component={UpdateUserPage}/>
              <Route path="/readuser" component={ReadUserPage}/>
              <Route path="/deleteuser" component={DeleteUserPage}/>
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
