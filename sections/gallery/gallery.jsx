import Image from 'next/image';
import { Title } from '../../components';
import styles from '../../styles/gallery.module.css';

// Images
import GalleryImg1 from '../../assets/images/gallery/1.png';
import GalleryImg2 from '../../assets/images/gallery/2.png';
import GalleryImg3 from '../../assets/images/gallery/3.png';
import GalleryImg4 from '../../assets/images/gallery/4.png';
import GalleryImg5 from '../../assets/images/gallery/5.png';
import GalleryImg6 from '../../assets/images/gallery/6.png';

import Card from './card/card';

const Gallery = () => {
    return (
        <section className={styles.gallery} id="gallery">
            <Title>Gallery</Title>
            <div className={styles.container + ' container'}>
                <Card imgUrl={GalleryImg1} />
                <Card imgUrl={GalleryImg2} />
                <Card imgUrl={GalleryImg3} />
                <Card imgUrl={GalleryImg4} />
                <Card imgUrl={GalleryImg5} />
                <Card imgUrl={GalleryImg6} />
            </div>
        </section>
    )
}

export default Gallery;