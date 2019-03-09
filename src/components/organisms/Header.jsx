import React from 'react';
import { Logo } from '../atoms';
import { Navbar, HeaderUser } from '../molecules';
import MediaQuery from 'react-responsive';

export const Header = ({ user, clickMenu }) => {
  return (
    <header className="header">
      <div className="container header__content">
        <Logo />
        <MediaQuery minWidth={769}>
          <Navbar />
          <HeaderUser name={user.name} email={user.email} avatar={user.photo} />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <button className="menu-btn" onClick={clickMenu}>
            <img src="./icons/line-menu.svg" alt="btn-menu" />
          </button>
        </MediaQuery>
      </div>
    </header>
  );
};
