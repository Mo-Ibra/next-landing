import { Title } from '../../components';

import Image from 'next/image';

import styles from '../../styles/skills.module.css';

import SkillsImg from '../../assets/images/skills.png';

const Skills = () => {
    return (
        <section class={styles.skills__section} id="our-skills">
            <Title>Skills</Title>
            <div class={styles.container + " container"}>
                <Image src={SkillsImg} />
                <div class={styles.skills}>
                    <div class={styles.skill}>
                        <h3>HTML <span>80%</span></h3>
                        <div class={styles.progress}>
                            <span style={{ width: '80%' }}></span>
                        </div>
                    </div>
                    <div class={styles.skill}>
                        <h3>CSS <span>85%</span></h3>
                        <div class={styles.progress}>
                            <span style={{ width: '85%' }}></span>
                        </div>
                    </div>
                    <div class={styles.skill}>
                        <h3>JavaScript <span>70%</span></h3>
                        <div class={styles.progress}>
                            <span style={{ width: '70%' }}></span>
                        </div>
                    </div>
                    <div class={styles.skill}>
                        <h3>Python <span>80%</span></h3>
                        <div class={styles.progress}>
                            <span style={{ width: '80%' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;