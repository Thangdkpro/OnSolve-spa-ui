import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../modules/login/login.action';
import Styles from './header.scss';
import NavBar from '../NavBar/NavBar';
// import logo from '../../public/logo.png';
import marvelIcon from '../../public/marvelIcon.png';

class Header extends Component {
  render() {
    return (
      <header className={Styles.header}>
        <div className={Styles.headerLeft}>
          <img src={marvelIcon} alt="logo" className={Styles.marvelLogo} />
        </div>
        <div className={Styles.headerRight}>
          <NavBar />
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: logout(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Header);
