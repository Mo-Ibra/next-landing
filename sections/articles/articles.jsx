import { Title } from '../../components';
import styles from '../../styles/articles.module.css';

// Images
import ArticlesImg1 from '../../assets/images/category/1.jpg';
import ArticlesImg2 from '../../assets/images/category/2.jpg';
import ArticlesImg3 from '../../assets/images/category/3.jpg';
import ArticlesImg4 from '../../assets/images/category/4.jpg';
import ArticlesImg5 from '../../assets/images/category/5.jpg';
import ArticlesImg6 from '../../assets/images/category/6.jpg';
import ArticlesImg7 from '../../assets/images/category/7.jpg';
import ArticlesImg8 from '../../assets/images/category/8.jpg';

import Card from './card/card';

const Articles = () => {
    return (
        <>
            <section className={styles.articles} id="articles">
                <Title>Articles</Title>
                <div className={styles.container + ' container'}>
                    <Card imgUrl={ArticlesImg1} title="Test Title" />
                    <Card imgUrl={ArticlesImg2} title="Test Title" />
                    <Card imgUrl={ArticlesImg3} title="Test Title" />
                    <Card imgUrl={ArticlesImg4} title="Test Title" />
                    <Card imgUrl={ArticlesImg5} title="Test Title" />
                    <Card imgUrl={ArticlesImg6} title="Test Title" />
                    <Card imgUrl={ArticlesImg7} title="Test Title" />
                    <Card imgUrl={ArticlesImg8} title="Test Title" />
                </div>
            </section>
            <div className={styles.spikes}></div>
        </>
    )
};

export default Articles;