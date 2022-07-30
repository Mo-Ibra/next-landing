import styles from '../../../styles/gallery.module.css';
import Image from 'next/image';

const Card = ({ imgUrl }) => {
    return (
        <div className={styles.box}>
            <div className={styles.image}>
                <Image src={imgUrl} alt="Gallery" className={styles.img} />
            </div>
        </div>
    )
}

export default Card;