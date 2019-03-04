import React from 'react';
import { Logo } from '../atoms';
import { Navbar } from '../molecules';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__head">
          <Logo />
          <Navbar />
        </div>
        <div className="footer__contacts">
          <span>
            <ContactImg img="./icons/mail.svg" />
            work.of.future@gmail.com
          </span>
          <span>
            <ContactImg img="./icons/phone.svg" />
            +38 (050) 789 24 98
          </span>
          <span>
            <ContactImg img="./icons/cellphone.svg" />
            +38 (095) 556 08 45
          </span>
        </div>
        <LinkGroup />
        <div className="footer__bottom">
          <span>© abz.agency specially for the test task</span>
          <div>
            <img className="icn" src="./icons/facebook.svg" alt="facebook" />
            <img className="icn" src="./icons/linkedin.svg" alt="linkedin" />
            <img className="icn" src="./icons/instagram.svg" alt="instagram" />
            <img className="icn" src="./icons/twitter.svg" alt="twitter" />
            <img className="icn" src="./icons/pinterest.svg" alt="pinterest" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactImg = ({ img }) => (
  <MediaQuery minWidth={1000}>
    <img className="contact-img" src={img} alt="contact-img" />
  </MediaQuery>
);

const LinkGroup = () => {
  const links = [
    { name: 'News', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Partners', link: '#' },
    { name: 'Shop', link: '#' },
    { name: 'Overview', link: '#' },
    { name: 'Design', link: '#' },
    { name: 'Code', link: '#' },
    { name: 'Collaborate', link: '#' },
    { name: 'Tutorials', link: '#' },
    { name: 'Resources', link: '#' },
    { name: 'Guides', link: '#' },
    { name: 'Examples', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Terms', link: '#' },
    { name: 'Conditions', link: '#' },
    { name: 'Help', link: '#' }
  ];

  return (
    <MediaQuery minWidth={1000}>
      <div className="linkgroup">
        {links.map(({ name, link }) => (
          <Link className="link linkgroup__link" to={link}>
            {name}
          </Link>
        ))}
      </div>
    </MediaQuery>
  );
};
