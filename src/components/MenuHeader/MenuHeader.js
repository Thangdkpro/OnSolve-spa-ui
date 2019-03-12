import React, { Component } from 'react';
import Styles from './menuheader.scss';
import MenuBar from '../MenuBar/MenuBar';

class MenuHeader extends Component {
  render() {
    return (
      <header className={Styles.header}>
        <div className={Styles.headerLeft}>
          <MenuBar />
        </div>
      </header>
    );
  }
}

export default MenuHeader;
