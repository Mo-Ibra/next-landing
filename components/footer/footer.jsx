import Image from 'next/image';

import styles from '../../styles/footer.module.css';

import { AiFillFacebook, AiFillRightCircle, AiFillRightSquare, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

// Images
import GalleryImg1 from '../../assets/images/gallery/1.png';
import GalleryImg2 from '../../assets/images/gallery/2.png';
import GalleryImg3 from '../../assets/images/gallery/3.png';
import GalleryImg4 from '../../assets/images/gallery/4.png';
import GalleryImg5 from '../../assets/images/gallery/5.png';
import GalleryImg6 from '../../assets/images/gallery/6.png';


const Footer = () => {
    return (
        <footer class={styles.footer}>
            <div class={styles.container + " container"}>
                <div class={styles.box}>
                    <h3>Desigx</h3>
                    <ul class={styles.social}>
                        <li>
                            <a href="#" class={styles.facebook}>
                                <AiFillFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#" class={styles.twitter}>
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                        <li>
                            <a href="#" class={styles.youtube}>
                                <AiFillYoutube />
                            </a>
                        </li>
                    </ul>
                    <p class={styles.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                    </p>
                </div>
                <div class={styles.box}>
                    <ul class={styles.links}>
                        <li><a href="#">Important Link 1</a></li>
                        <li><a href="#">Important Link 2</a></li>
                        <li><a href="#">Important Link 3</a></li>
                        <li><a href="#">Important Link 4</a></li>
                        <li><a href="#">Important Link 5</a></li>
                    </ul>
                </div>
                <div class={styles.box}>
                    <div class={styles.line}>
                        <div class={styles.info}>Egypt, Giza, Inside The Sphinx, Room Number 220</div>
                    </div>
                    <div class={styles.line}>
                        <div class={styles.info}>Business Hours: From 10:00 To 18:00</div>
                    </div>
                    <div class={styles.line}>
                        <i class="fas fa-phone-volume fa-fw"></i>
                        <div class={styles.info}>
                            <span>+20123456789</span>
                            <span>+20198765432</span>
                        </div>
                    </div>
                </div>
                <div class={`${styles.box} ${styles.footer__gallery}`}>
                    <Image src={GalleryImg1} />
                    <Image src={GalleryImg2} />
                    <Image src={GalleryImg3} />
                    <Image src={GalleryImg4} />
                    <Image src={GalleryImg5} />
                    <Image src={GalleryImg6} />
                </div>
            </div>
            <p class={styles.copyright}>No CopyRight!</p>
        </footer>
    )
};

export default Footer;