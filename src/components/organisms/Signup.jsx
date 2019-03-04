import React from 'react';
import { SignupForm } from '../molecules';

export const Signup = () => {
  return (
    <section className="container signup">
      <h2 className="h2 signup__heading">Register to get a work</h2>
      <p className="p p--md signup__paragraph">
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>
      <SignupForm />
      <button className="btn btn--solid">Sign Up</button>
    </section>
  );
};
