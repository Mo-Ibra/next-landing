import Image from "next/image";

import { Title } from "../../components";

import styles from '../../styles/videos.module.css';

import VideoImg from '../../assets/images/video-preview.jpg';

const Videos = () => {
    return (
        <section class={styles.videos} id="videos">
            <Title>Top Videos</Title>
            <div class={styles.container + " container"}>
                <div class={styles.holder}>
                    <div class={styles.list}>
                        <div class={styles.name}>
                            Top Videos
                            <i class="fas fa-random"></i>
                        </div>
                        <ul>
                            <li>How To Create Sub Domain<span>05:18</span></li>
                            <li>Playing With The DNS <span>03:18</span></li>
                            <li>Everything About The Virtual Hosts <span>05:25</span></li>
                            <li>How To Monitor Your Website <span>04:16</span></li>
                            <li>Uncharted Beating The Last Boss <span>07:48</span></li>
                            <li>Ys Oath In Felghana Overview <span>03:12</span></li>
                            <li>Ys Series All Games Ending <span>08:10</span></li>
                        </ul>
                    </div>
                    <div class={styles.preview}>
                        <Image src={VideoImg} />
                        <div class={styles.info}>Everything About The Virtual Hosts</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos;