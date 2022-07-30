import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import MegaMenuImg from '../../assets/images/megamenu.png';

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
                        {/* Start Mega Menu */}
                        <div className={styles.mega}>
                            <div className={styles.image}>
                                <Image src={MegaMenuImg} alt="Mega Menu" />
                            </div>
                            <ul className={styles.links}>
                                <li>
                                    <a href="#testimonials"><i className="far fa-comments fa-fw"></i> Testimonials</a>
                                </li>
                                <li>
                                    <a href="#team"><i className="far fa-user fa-fw"></i> Team Members</a>
                                </li>
                                <li>
                                    <a href="#services"><i className="far fa-building fa-fw"></i> Services</a>
                                </li>
                                <li>
                                    <a href="#our-skills"><i className="far fa-check-circle fa-fw"></i> Our Skills</a>
                                </li>
                                <li>
                                    <a href="#work-steps"><i className="far fa-clipboard fa-fw"></i> How It Works</a>
                                </li>
                            </ul>
                            <ul className={styles.links}>
                                <li>
                                    <a href="#events"><i className="far fa-calendar-alt fa-fw"></i> Events</a>
                                </li>
                                <li>
                                    <a href="#pricing"><i className="fas fa-server fa-fw"></i> Pricing Plans</a>
                                </li>
                                <li>
                                    <a href="#video"><i className="far fa-play-circle fa-fw"></i> Top Videos</a>
                                </li>
                                <li>
                                    <a href="#stats"><i className="far fa-chart-bar fa-fw"></i> Stats</a>
                                </li>
                                <li>
                                    <a href="#discount"><i className="fas fa-percent fa-fw"></i> Request A Discount</a>
                                </li>
                            </ul>
                        </div>
                        {/* End Mega Menu */}
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;