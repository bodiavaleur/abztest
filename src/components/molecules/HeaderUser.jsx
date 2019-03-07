import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderUser = ({ name, email, avatar }) => {
  return (
    <div className="headeruser">
      <div className="group">
        <span className="group__name">{name}</span>
        <span className="group__email">{email}</span>
      </div>
      <img className="headeruser__avatar" src={avatar} alt={name} />
      <Link to="#" className="logout-btn">
        <img src="./icons/sign-out.svg" alt="sign-out" />
      </Link>
    </div>
  );
};
