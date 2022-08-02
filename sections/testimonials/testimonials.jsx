import { Title } from '../../components';

import styles from '../../styles/testimonials.module.css';

import Box from './box/box';

// Images
import AvatarImg1 from '../../assets/images/avatars/1.png';
import AvatarImg2 from '../../assets/images/avatars/2.png';
import AvatarImg3 from '../../assets/images/avatars/3.png';
import AvatarImg4 from '../../assets/images/avatars/4.png';
import AvatarImg5 from '../../assets/images/avatars/5.png';
import AvatarImg6 from '../../assets/images/avatars/6.png';

const Testimonials = () => {
    return (
        <section class={styles.testimonials} id="testimonials">
            <Title>Testimonials</Title>
            <div class={styles.container + " container"}>
                <Box imgUrl={AvatarImg1} name="Mohamed Ibrahim" role="Full Stack Web Developer" />
                <Box imgUrl={AvatarImg2} name="Ahmed Hassan" role="Front End Web Developer" />
                <Box imgUrl={AvatarImg3} name="Sayed Mohamed" role="UI/UX Designer" />
                <Box imgUrl={AvatarImg4} name="Gamel Gamal" role="Product Manger" />
                <Box imgUrl={AvatarImg5} name="Amen Magdy" role="SEO Manger" />
                <Box imgUrl={AvatarImg6} name="Mostafa Ahmed" role="UI/UX Designer" />
            </div>
        </section>
    )
}

export default Testimonials;