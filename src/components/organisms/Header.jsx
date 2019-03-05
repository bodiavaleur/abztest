import React from 'react';
import { Logo } from '../atoms';
import { Navbar, HeaderUser } from '../molecules';
import MediaQuery from 'react-responsive';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <Logo />
        <MediaQuery minWidth={769}>
          <Navbar />
          <HeaderUser
            name="Superstar"
            email="Superstar@gmail.com"
            avatar="./imgs/user-superstar-2x.jpg"
          />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <button className="menu-btn">
            <img src="./icons/line-menu.svg" alt="btn-menu" />
          </button>
        </MediaQuery>
      </div>
    </header>
  );
};
