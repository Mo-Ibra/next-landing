import styles from '../../styles/team.module.css';

import Image from 'next/image';

import { Title } from '../../components';

// Images
import TeamImg1 from '../../assets/images/team/1.jpg';
import TeamImg2 from '../../assets/images/team/2.jpg';
import TeamImg3 from '../../assets/images/team/3.jpg';
import TeamImg4 from '../../assets/images/team/4.jpg';
import TeamImg5 from '../../assets/images/team/5.jpg';
import TeamImg6 from '../../assets/images/team/6.jpg';

import Box from './box/box';

const Team = () => {
    return (
        <>
            <section className={styles.team} id="team">
                <Title>Team</Title>
                <div className={styles.container + " container"}>
                    <Box imageUrl={TeamImg1} />
                    <Box imageUrl={TeamImg2} />
                    <Box imageUrl={TeamImg3} />
                    <Box imageUrl={TeamImg4} />
                    <Box imageUrl={TeamImg5} />
                    <Box imageUrl={TeamImg6} />
                </div>
            </section>
            <div className={styles.spikes}></div>
        </>
    )
}

export default Team;