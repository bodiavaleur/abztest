import React from 'react';
import { User } from './User';
import { ButtonLink } from '../atoms';

export const Users = () => {
  return (
    <section className="container users-section">
      <h2 className="h2 users-section__heading">Our cheerful users</h2>
      <p className="p p--md users-section__paragraph">
        Attention! Sorting users by registration date
      </p>
      <div className="users">
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          avatar="./imgs/user-noah-2x.jpg"
          name="Noah"
          about="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
      </div>
      <ButtonLink withStyle="outline" to="/" label="Show more" />
    </section>
  );
};
