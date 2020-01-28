import React from 'react';
import style from './NavBar.module.css';
import { Link, Router } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className={style.navBar}>
			<Router>
				<Link to="/about" className={style.navItem}>
					About
				</Link>
				<Link to="/resume" className={style.navItem}>
					Resume
				</Link>
				<Link to="/resume" className={style.navItem}>
					Contact
				</Link>
			</Router>
		</div>
	);
};

export default NavBar;
