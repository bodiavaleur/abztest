import React from 'react';
import { HeaderUser, Navbar } from '../molecules';
import MediaQuery from 'react-responsive';

export const Menu = ({ user, isMenuOpen, clickMenu }) => {
  return isMenuOpen ? (
    <MediaQuery maxWidth={768}>
      <div className="side-menu-wrapper">
        <div className="side-menu-wrapper__bg" onClick={clickMenu} />
        <div className="side-menu">
          <HeaderUser name={user.name} email={user.email} avatar={user.photo} />
          <hr />
          <Navbar />
        </div>
      </div>
    </MediaQuery>
  ) : null;
};
