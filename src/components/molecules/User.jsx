import React from 'react';

export const User = ({ avatar, name, about, email, phone }) => {
  return (
    <div className="user">
      <img className="user__avatar" src={avatar} alt={name} />
      <div className="info">
        <h3 className="h3">{name}</h3>
        <p className="p p--sm info__about">{about}</p>
        <p className="p p--sm info__email">{email}</p>
        <p className="p p--sm info__phone">{phone}</p>
      </div>
    </div>
  );
};
