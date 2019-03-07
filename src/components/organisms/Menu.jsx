import React from 'react';
import { HeaderUser, Navbar } from '../molecules';
import MediaQuery from 'react-responsive';

export const Menu = ({ isMenuOpen, clickMenu }) => {
  return isMenuOpen ? (
    <MediaQuery maxWidth={768}>
      <div className="side-menu-wrapper">
        <div className="side-menu-wrapper__bg" onClick={clickMenu} />
        <div className="side-menu">
          <HeaderUser
            name="Superstar"
            email="Superstar@gmail.com"
            avatar="./imgs/user-superstar-2x.jpg"
          />
          <hr />
          <Navbar />
        </div>
      </div>
    </MediaQuery>
  ) : null;
};
