import React from 'react';
import { Logo } from '../atoms';
import { Navbar, User } from '../molecules';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <Logo />
        <Navbar />
        <User
          name="Superstar"
          email="Superstar@gmail.com"
          avatar="./imgs/user-superstar-2x.jpg"
        />
      </div>
    </header>
  );
};
