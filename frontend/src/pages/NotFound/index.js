import React, { Component } from 'react';

class NotFound extends Component {

	componentDidMount(){
		document.title = 'LuizaCep - Não encontrado';
	}

	render() {
		return (
			<div>
				<h1>Página não encontrada</h1>
			</div>
		)
	}
}

export default NotFound;