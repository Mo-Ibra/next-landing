import { Title } from '../../components';

import Image from 'next/image';

import styles from '../../styles/skills.module.css';

import SkillsImg from '../../assets/images/skills.png';

const Skills = () => {
    return (
        <section className={styles.skills__section} id="our-skills">
            <Title>Skills</Title>
            <div className={styles.container + " container"}>
                <Image src={SkillsImg} />
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <h3>HTML <span>80%</span></h3>
                        <div className={styles.progress}>
                            <span style={{ width: '80%' }}></span>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h3>CSS <span>85%</span></h3>
                        <div className={styles.progress}>
                            <span style={{ width: '85%' }}></span>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h3>JavaScript <span>70%</span></h3>
                        <div className={styles.progress}>
                            <span style={{ width: '70%' }}></span>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h3>Python <span>80%</span></h3>
                        <div className={styles.progress}>
                            <span style={{ width: '80%' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;