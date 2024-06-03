import styles from './CarouselProd.module.css'
import { useRef } from 'react'
import CardProduto from '../../components/CardProduto/CardProduto';
import { useState, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';


function CarouselProd() {

    const [slidesPerView, setSlidePerView] = useState(4)


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
        }

        handleResize();
    }, [])
    return (
        <section id='container'>
            <Swiper
                // controla quantos slides por foto quero que apareça
                slidesPerView={slidesPerView}
                // define se é clicavel ou não
                pagination={{ clickable: true }}
                navigation>

                {/* corresponde a cada item do coarrossel */}
                <SwiperSlide>
                    <div className={styles.carousel_prod}>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.carousel_prod}>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default CarouselProd;