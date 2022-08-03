import styles from '../../styles/header.module.css';
import Image from 'next/image';
import HeaderImgSrc from '../../assets/images/header/1.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container + ' container'}>
                <div className={styles.text}>
                    <h1>Welcome, To Desigx!</h1>
                    <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
                </div>
                <div className={styles.image}>
                    <div className={styles.image__container}>
                        <Image src={HeaderImgSrc} alt="Header" />
                    </div>
                </div>
            </div>
            <a href="#articles" className="go-down">
                <i className="fas fa-angle-double-down fa-2x"></i>
            </a>
        </header>
    )
};

export default Header;