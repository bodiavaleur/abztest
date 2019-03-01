import React from 'react';
import { ButtonLink } from '../atoms';

export const AboutMe = () => {
  return (
    <section className="container aboutme">
      <h2 className="h2 aboutme__heading">Let's get acquainted</h2>
      <img
        className="aboutme__manmobile"
        src="./imgs/man-mobile.svg"
        alt="man-mobile"
      />
      <div className="textblock">
        <h3 className="h3 textblock_heading">I am cool frontend developer</h3>
        <p className="p p--md textblock__paragraph">
          When real users have a slow experience on mobile, they're much less
          likely to find what they are looking for or purchase from you in the
          future. For many sites this equates to a huge missed opportunity,
          especially when more than half of visits are abandoned if a mobile
          page takes over 3 seconds to load.
          <br />
          <br />
          Last week, Google Search and Ads teams announced two new speed
          initiatives to help improve user-experience on the web.
        </p>
        <ButtonLink withStyle="text" to="/" label="Sign Up" />
      </div>
    </section>
  );
};
