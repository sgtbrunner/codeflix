import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home.page';
import { CadastroVideo } from './pages/CadastroVideo/CadastroVideo.page';
import { CadastroCategoria } from './pages/CadastroCategoria/CadastroCategoria.page';
import './index.css';

const ErrorPage = () => (<div>Ooooooppppsss</div>);

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route component={ErrorPage} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
