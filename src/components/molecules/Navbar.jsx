import React from 'react';
import { NavLink } from '../atoms';

export const Navbar = () => (
  <nav className="navbar">
    <NavLink withLabel="About me" to="/" />
    <NavLink withLabel="Relationships" to="/" />
    <NavLink withLabel="Requirements" to="/" />
    <NavLink withLabel="Users" to="/" />
    <NavLink withLabel="Sign Up" to="/" />
  </nav>
);
