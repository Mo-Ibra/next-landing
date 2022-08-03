import Image from 'next/image';

import styles from '../../styles/discount.module.css';

import DiscountImg from '../../assets/images/discount/discount.png';

const Discount = () => {
    return (
        <section className={styles.discount} id="discount">
            <div className={styles.image}>
                <div className={styles.content}>
                    <h2>We Have A Discount</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
                        ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
                        laborum dicta aperiam odit doloribus corporis.
                    </p>
                    <Image src={DiscountImg} />
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h2>Request A Discount</h2>
                    <form>
                        <input className={styles.input} type="text" placeholder="Your Name" name="name" />
                        <input className={styles.input} type="email" placeholder="Your Email" name="email" />
                        <input className={styles.input} type="text" placeholder="Your Phone" name="mobile" />
                        <textarea className={styles.input} placeholder="Tell Us About Your Needs" name="message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Discount;