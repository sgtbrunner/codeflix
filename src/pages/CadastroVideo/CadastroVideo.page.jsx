import React from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';

export const CadastroVideo = () => (
  <DefaultPage>
    <h1>Página de Cadastro de Video</h1>
    <Link to="/cadastro/categoria">
      Cadastrar Categoria
    </Link>
  </DefaultPage>
);
