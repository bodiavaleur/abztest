import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ withLabel, to }) => (
  <React.Fragment>
    <Link className="link navbar__link" to={to}>
      {withLabel}
    </Link>
  </React.Fragment>
);
