import styles from './Banner.module.css'
import {useState, useEffect} from 'react'
import { register } from 'swiper/element/bundle'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide} from 'swiper/react';

function Banner({ bannerimg }) {
    

    const [slidesPerView, setSlidePerView] = useState(1)


    useEffect(() => {
        function handleResize(){
            if(window.innerWidth > 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(1);
            }
        }

        handleResize();
    }, [])
    

    
    return (
        <div className={styles.banner} id='container'>
            <Swiper
            // controla quantos slides por foto quero que apareça
                slidesPerView={slidesPerView}
                // define se é clicavel ou não
                pagination={{clickable: true}}
                autoplay
                navigation
    
            >

                {/* corresponde a cada item do coarrossel */}
                <SwiperSlide>
                    <img src={bannerimg} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bannerimg} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;