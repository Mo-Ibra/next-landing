import styles from '../../styles/features.module.css';

import Image from 'next/image';

import { Title } from '../../components';

// Images
import FeaturesImg1 from '../../assets/images/features/1.jpg';
import FeaturesImg2 from '../../assets/images/features/2.jpg';
import FeaturesImg3 from '../../assets/images/features/3.jpg';

const Features = () => {
    return (
        <section className={styles.features} id="features">
            <Title>Features</Title>
            <div className={styles.container + ' container'}>
                <div className={`${styles.box} ${styles.quality}`}>
                    <div className={styles.img__holder}>
                        <Image src={FeaturesImg1} />
                    </div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                </div>
                <div className={`${styles.box} ${styles.time}`}>
                    <div className={styles.img__holder}>
                        <Image src={FeaturesImg2} />
                    </div>
                    <h2>Time</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                </div>
                <div className={`${styles.box} ${styles.passion}`}>
                    <div className={styles.img__holder}>
                        <Image src={FeaturesImg3} />
                    </div>
                    <h2>Passion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                </div>
            </div>
        </section>
    )
};

export default Features;