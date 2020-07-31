import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu/Menu.component';
import { Footer } from '../Footer/Footer.component';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const DefaultPage = ({ children }) => (
  <>
    <Menu />
    <Main>{children}</Main>
    <Footer />
  </>
);
