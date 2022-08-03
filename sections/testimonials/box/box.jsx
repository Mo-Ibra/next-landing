import styles from '../../../styles/testimonials.module.css';

import { AiFillStar } from "react-icons/ai";

import Image from "next/image";

const Box = ({ imgUrl, name, role }) => {
    return (
        <div className={styles.box}>
            <div className={styles.img__container}>
                <Image src={imgUrl} />
            </div>
            <h3>{name}</h3>
            <span className={styles.title}>{role}</span>
            <div className={styles.rate}>
                <AiFillStar className={styles.filled} />
                <AiFillStar className={styles.filled} />
                <AiFillStar className={styles.filled} />
                <AiFillStar className={styles.filled} />
                <AiFillStar />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                quaerat ducimus
            </p>
        </div>
    )
}

export default Box;