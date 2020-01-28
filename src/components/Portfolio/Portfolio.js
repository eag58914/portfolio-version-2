import React from 'react';
import Geo from '../../images/Geo.jpg';
import Fitness from '../../images/Fitness.jpg';
import eCommerce from '../../images/e-commerce.jpg';
import Blog from '../../images/Blog.jpg';
import styles from './Portfolio.module.css';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<img src={Geo} className={styles.projectThumbnails} alt="geoimage" />
			<img src={Fitness} className={styles.projectThumbnails} alt="fitnessimage" />
			<img src={eCommerce} className={styles.projectThumbnails} alt="ecommerce" />
			<img src={Blog} className={styles.projectThumbnails} alt="blog" />
		</div>
	);
};

export default Portfolio;
