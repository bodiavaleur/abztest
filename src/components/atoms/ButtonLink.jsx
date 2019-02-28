import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonLink = ({ withStyle, to, label }) => {
  return (
    <Link className={`btn link btn--${withStyle}`} to={to}>
      {label}
    </Link>
  );
};
