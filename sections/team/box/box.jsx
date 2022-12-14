import styles from '../../../styles/team.module.css';

import Image from 'next/image';

import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Box = ({ imageUrl }) => {
    return (
        <div className={styles.box}>
            <div className={styles.data}>
                <Image src={imageUrl} />
                <div className={styles.social}>
                    <a href="#">
                        <AiFillFacebook className={styles.icon} />
                    </a>
                    <a href="#">
                        <AiFillTwitterCircle className={styles.icon} />
                    </a>
                    <a href="#">
                        <AiFillLinkedin className={styles.icon} />
                    </a>
                    <a href="#">
                        <AiFillYoutube className={styles.icon} />
                    </a>
                </div>
            </div>
            <div className={styles.info}>
                <h3>Name</h3>
                <p>Simple Short Description</p>
            </div>
        </div>
    )
}

export default Box;