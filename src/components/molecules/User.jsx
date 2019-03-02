import React from 'react';

export const User = ({ avatar, name, about, email, phone }) => {
  return (
    <div className="user">
      <img src={avatar} alt={name} />
      <h3 className="h3">{name}</h3>
      <div className="info">
        <span>{about}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  );
};
