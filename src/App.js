import React from 'react';
import Title from '../src/components/Title/Title';
import NavBar from '../src/components/NavBar/NavBar';
import Portfolio from '../src/components/Portfolio/Portfolio';

const App = () => {
	return (
		<div>
			<NavBar />
			<Title />
			<Portfolio />
		</div>
	);
};

export default App;
