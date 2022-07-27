import styles from '../../styles/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container + ' container'}>
                <div className={styles.navbar__logo}>
                    <a href="#">Logo</a>
                </div>
                <ul>
                    <li>
                        <a href="#articles">Articles</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#">Other links</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;