import React from 'react';
import style from './NavBar.module.css';
import { Route, Switch } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className={style.navBar}>
			{/* <Switch>
				<Route path="/about" className={style.navItem}>
					About />
				</Route>
				<Route to="/resume" className={style.navItem}>
					Resume />
				</Route>
				<Route path="/contact" className={style.navItem}>
					Contact />
				</Route>
			</Switch> */}
		</div>
	);
};

export default NavBar;
