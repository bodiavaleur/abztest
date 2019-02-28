import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/">
    <img className="logo" src="./logo/logo.svg" alt="logo" />
  </Link>
);
