import { Title } from "../../components";

import styles from '../../styles/pricing.module.css';

// Images
import HostingImg1 from '../../assets/images/hosting/1.png';
import HostingImg2 from '../../assets/images/hosting/2.png';
import HostingImg3 from '../../assets/images/hosting/3.png';

import Image from "next/image";

const Pricing = () => {
    return (
        <section className={styles.pricing} id="pricing">
            <Title>Pricing</Title>
            <div className={styles.container + " container"}>
                <div className={styles.box}>
                    <div className={styles.title}>Basic</div>
                    <div className={styles.img__container}>
                        <Image src={HostingImg1} />
                    </div>
                    <div className={styles.price}>
                        <span className={styles.amount}>$15</span>
                        <span className={styles.time}>Per Month</span>
                    </div>
                    <ul>
                        <li>10GB HDD Space</li>
                        <li>5 Email Addresses</li>
                        <li>2 Subdomains</li>
                        <li>4 Databases</li>
                        <li>Basic Support</li>
                    </ul>
                    <a href="#">Choose Plan</a>
                </div>
                <div className={styles.box + " " + styles.popular}>
                    <div className={styles.label}>Most Popular</div>
                    <div className={styles.title}>Advanced</div>
                    <div className={styles.img__container}>
                        <Image src={HostingImg2} />
                    </div>
                    <div className={styles.price}>
                        <span className={styles.amount}>$25</span>
                        <span className={styles.time}>Per Month</span>
                    </div>
                    <ul>
                        <li>20GB HDD Space</li>
                        <li>10 Email Addresses</li>
                        <li>5 Subdomains</li>
                        <li>8 Databases</li>
                        <li>Advanced Support</li>
                    </ul>
                    <a href="#">Choose Plan</a>
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>Professional</div>
                    <div className={styles.img__container}>
                        <Image src={HostingImg3} />
                    </div>
                    <div className={styles.price}>
                        <span className={styles.amount}>$45</span>
                        <span className={styles.time}>Per Month</span>
                    </div>
                    <ul>
                        <li>50GB HDD Space</li>
                        <li>20 Email Addresses</li>
                        <li>10 Subdomains</li>
                        <li>20 Databases</li>
                        <li>Professional Support</li>
                    </ul>
                    <a href="#">Choose Plan</a>
                </div>
            </div>
        </section>
    )
};

export default Pricing;