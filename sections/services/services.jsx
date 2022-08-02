import { Title } from '../../components';

import styles from '../../styles/services.module.css';

const Services = () => {
    return (
        <section class={styles.services} id="services">
            <Title>Services</Title>
            <div class={styles.container + " container"}>
                <div class={styles.box}>
                    <i class="fas fa-user-shield fa-4x"></i>
                    <h3>Security</h3>
                    <div class={styles.info}>
                        <a href="#">Details</a>
                    </div>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-tools fa-4x"></i>
                    <h3>Fixing Issues</h3>
                    <div class={styles.info}>
                        <a href="#">Details</a>
                    </div>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-map-marked-alt fa-4x"></i>
                    <h3>Location</h3>
                    <div class={styles.info}>
                        <a href="#">Details</a>
                    </div>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-laptop-code fa-4x"></i>
                    <h3>Coding</h3>
                    <div class={styles.info}>
                        <a href="#">Details</a>
                    </div>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-palette fa-4x"></i>
                    <h3>Security</h3>
                    <div class={styles.info}>
                        <a href="#">Design</a>
                    </div>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-bullhorn fa-4x"></i>
                    <h3>Marketing</h3>
                    <div class={styles.info}>
                        <a href="#">Details</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;