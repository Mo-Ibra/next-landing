import styles from '../../styles/stats.module.css';

const Stats = () => {
    return (
        <section className={styles.stats} id="stats">
            <h2>Our Awesome Stats</h2>
            <div className={styles.container + " container"}>
                <div className={styles.box}>
                    <i className="far fa-user fa-2x fa-fw"></i>
                    <span className={styles.number}>150</span>
                    <span className={styles.text}>Clients</span>
                </div>
                <div className={styles.box}>
                    <i className="fas fa-code fa-2x fa-fw"></i>
                    <span className={styles.number}>135</span>
                    <span className={styles.text}>Projects</span>
                </div>
                <div className={styles.box}>
                    <i className="fas fa-globe-asia fa-2x fa-fw"></i>
                    <span className={styles.number}>50</span>
                    <span className={styles.text}>Countries</span>
                </div>
                <div className={styles.box}>
                    <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                    <span className={styles.number}>500</span>
                    <span className={styles.text}>Money</span>
                </div>
            </div>
        </section>
    )
}

export default Stats;