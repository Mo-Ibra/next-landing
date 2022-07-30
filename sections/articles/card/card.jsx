import styles from '../../../styles/articles.module.css';
import Image from 'next/image';

import { FcNext } from 'react-icons/fc';

const Card = ({ imgUrl, title }) => {
    return (
        <div className={styles.box}>
            <Image src={imgUrl} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className={styles.info}>
                <a href="">Read More</a>
                <FcNext className={styles.icon} />
            </div>
        </div>
    )
}

export default Card;