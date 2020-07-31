import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import { ButtonLink } from '../ButtonLink/ButtonLink.styles';
import './Menu.styles.css';

export const Menu = () => (
  <nav className="menu">
    <Link to="/">
      <img src={Logo} alt="codeflix" className="logo" />
    </Link>
    <ButtonLink as={Link} className="button-link" to="/cadastro/video">
      New Video
    </ButtonLink>
  </nav>
);
