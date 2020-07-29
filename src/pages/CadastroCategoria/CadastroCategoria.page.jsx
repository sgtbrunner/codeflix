import React from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';

export const CadastroCategoria = () => {
	return (
		<DefaultPage>
			<h1>Cadastro de Categoria</h1>
			<form>
				<label>
          			Nome da Categoria:
					<input type="text" />
				</label>
				<button>Cadastrar</button>
			</form>
			<Link to="/">Ir para home</Link>
		</DefaultPage>
	);
};
