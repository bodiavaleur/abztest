import React from 'react';
import { ButtonLink } from '../atoms/ButtonLink';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="container block">
        <h1 className="h1 block__heading">
          Test assignment for Frontend Developer position
        </h1>
        <p className="p block__paragraph">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck!
        </p>
        <ButtonLink withStyle="solid" to="/" label="Sign Up" />
      </div>
    </section>
  );
};
