import React from 'react';
import { User } from './User';
import { ButtonLink } from '../atoms';

export const Users = ({ users }) => {
  return (
    <section className="container users-section">
      <h2 className="h2 users-section__heading">Our cheerful users</h2>
      <p className="p p--md users-section__paragraph">
        Attention! Sorting users by registration date
      </p>
      <div className="users">
        {!!users.length
          ? users.map(user => (
              <User
                avatar={user.photo}
                name={user.name}
                about={user.position}
                email={user.email}
                phone={user.phone}
              />
            ))
          : null}
      </div>
      <ButtonLink withStyle="outline" to="/" label="Show more" />
    </section>
  );
};
