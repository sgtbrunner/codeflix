import React from "react";

import Logo from "../../assets/img/logo.png";
import { ButtonLink } from "../ButtonLink/ButtonLink.styles";
import "./Menu.styles.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <a href="/">
        <img src={Logo} alt="codeflix" className="logo" />
      </a>
      <ButtonLink as="a" className="button-link" href="/">
        New Video
      </ButtonLink>
    </nav>
  );
};
