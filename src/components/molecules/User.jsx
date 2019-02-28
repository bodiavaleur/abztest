import React from 'react';
import { Link } from 'react-router-dom';

export const User = ({ name, email, avatar }) => {
  return (
    <div className="user">
      <div className="group">
        <span className="group__name">{name}</span>
        <span className="group__email">{email}</span>
      </div>
      <img className="user__avatar" src={avatar} alt={name} />
      <Link to="#">
        <img src="./icons/sign-out.svg" alt="sign-out" />
      </Link>
    </div>
  );
};
