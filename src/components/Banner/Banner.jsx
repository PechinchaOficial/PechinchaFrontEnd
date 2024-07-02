import styles from './Banner.module.css'
import {useState, useEffect} from 'react'
import { register } from 'swiper/element/bundle'
import Bannerp from '../../assets/img/bannerdois.png'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide} from 'swiper/react';

function Banner({ bannerimg, bannerc , bannerverde, bannerjunino}) {
    
// Importa a função useState e useEffect do React
const [slidesPerView, setSlidePerView] = useState(1);

// Usa o useEffect para executar um efeito colateral após a montagem do componente
useEffect(() => {
    // Define a função handleResize para lidar com o redimensionamento da janela
    function handleResize() {
        // Verifica se a largura da janela é maior que 720 pixels
        if (window.innerWidth > 720) {
            // Se for maior que 720, define slidesPerView como 1
            setSlidePerView(1);
        } else {
            // Se for menor ou igual a 720, também define slidesPerView como 1
            setSlidePerView(1);
        }
    }

    // Chama a função handleResize para definir o estado inicial
    handleResize();
}, []);

    

    
    return (
        <div className={styles.banner} id='container'>
            <Swiper
            // controla quantos slides por foto quero que apareça
                slidesPerView={slidesPerView}
                // define se é clicavel ou não
                autoplay
                navigation
    
            >

                {/* corresponde a cada item do coarrossel */}
                <SwiperSlide>
                    <img src={bannerc} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bannerimg} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>

                
                <SwiperSlide>
                    <img src={bannerverde} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>

                
                <SwiperSlide>
                    <img src={bannerjunino} alt="Banner Promocional" className={styles.img_banner} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;