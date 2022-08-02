import styles from '../../styles/features.module.css';

import Image from 'next/image';

import { Title } from '../../components';

// Images
import FeaturesImg1 from '../../assets/images/features/1.jpg';
import FeaturesImg2 from '../../assets/images/features/2.jpg';
import FeaturesImg3 from '../../assets/images/features/3.jpg';

const Features = () => {
    return (
        <section class={styles.features} id="features">
            <Title>Features</Title>
            <div class={styles.container + ' container'}>
                <div class={`${styles.box} ${styles.quality}`}>
                    <div class={styles.img__holder}>
                        <Image src={FeaturesImg1} />
                    </div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                </div>
                <div class={`${styles.box} ${styles.time}`}>
                    <div class={styles.img__holder}>
                        <Image src={FeaturesImg2} />
                    </div>
                    <h2>Time</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                </div>
                <div class={`${styles.box} ${styles.passion}`}>
                    <div class={styles.img__holder}>
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