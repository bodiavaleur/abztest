import React from 'react';
import { User } from './User';
import { ButtonLink } from '../atoms';

export const Users = ({ users, showMore }) => {
  // const isNotEmpty = users[users.length - 1];

  // if (isNotEmpty) {
  //   users.pop();
  // }
  // console.log('isNotEmpty :', isNotEmpty);
  // console.log('users :', users);
  const sortedUsers = users.sort(
    (a, b) => b['registration_timestamp'] - a['registration_timestamp']
  );
  return (
    <section className="container users-section">
      <h2 className="h2 users-section__heading">Our cheerful users</h2>
      <p className="p p--md users-section__paragraph">
        Attention! Sorting users by registration date
      </p>
      <div className="users">
        {!!sortedUsers.length
          ? sortedUsers.map(user => (
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
      {/* {!!isNotEmpty ? ( */}
      <button className="btn btn--solid" onClick={showMore}>
        Show more
      </button>
      {/* ) : null} */}
    </section>
  );
};
