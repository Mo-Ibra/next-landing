import styles from '../../styles/stats.module.css';

const Stats = () => {
    return (
        <section class={styles.stats} id="stats">
            <h2>Our Awesome Stats</h2>
            <div class={styles.container + " container"}>
                <div class={styles.box}>
                    <i class="far fa-user fa-2x fa-fw"></i>
                    <span class={styles.number}>150</span>
                    <span class={styles.text}>Clients</span>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-code fa-2x fa-fw"></i>
                    <span class={styles.number}>135</span>
                    <span class={styles.text}>Projects</span>
                </div>
                <div class={styles.box}>
                    <i class="fas fa-globe-asia fa-2x fa-fw"></i>
                    <span class={styles.number}>50</span>
                    <span class={styles.text}>Countries</span>
                </div>
                <div class={styles.box}>
                    <i class="far fa-money-bill-alt fa-2x fa-fw"></i>
                    <span class={styles.number}>500</span>
                    <span class={styles.text}>Money</span>
                </div>
            </div>
        </section>
    )
}

export default Stats;