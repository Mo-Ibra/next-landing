import { Title } from "../../components";

import Image from "next/image";

import styles from '../../styles/workstep.module.css';

// Images
import WorkStepMainImg from '../../assets/images/work/work-steps.png';

import WorkStepImg1 from '../../assets/images/work/work-steps-1.png';
import WorkStepImg2 from '../../assets/images/work/work-steps-2.png';
import WorkStepImg3 from '../../assets/images/work/work-steps-3.png';

const WorkStep = () => {
    return (
        <section className={styles.work__steps} id="work-steps">
            <Title>How It Work?</Title>
            <div className={styles.container + " container"}>
                <div className={styles.image}>
                    <Image src={WorkStepMainImg} />
                </div>
                <div className={styles.info}>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <h3>Business Analysis</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <h3>Architecture</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <h3>Developement</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WorkStep;