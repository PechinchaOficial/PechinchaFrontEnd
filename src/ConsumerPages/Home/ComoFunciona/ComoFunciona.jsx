import styles from './ComoFunciona.module.css'
import arroz from '../../../assets/img/arroz.svg'
import step from '../../../assets/img/etapa (1).svg'

import React, { useRef } from 'react';
import TituloFormato from '../../../components/TituloFormato/TituloFormato';
import {useState, useEffect} from 'react'
import { register } from 'swiper/element/bundle'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide} from 'swiper/react';

function ComoFunciona() {

    const [slidesPerView, setSlidePerView] = useState(1)

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth > 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(2);
            }
        }

        handleResize();
    }, [])
    

    const descRef = useRef();
    const titleRef = useRef();


    function alterarConteudo() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = '<p>Com o produto cadastrado, ele ficará disponível na aba de produtos, na barra de pesquisa inicial, ou em categorias no início do site.</p>';
            titleRef.current.innerHTML = '  2. Como encontrar os produtos?';

        }
    }
    return (

        <section className='background'>
            <div className={styles.comoFunciona}>
                <TituloFormato categoria='Como funciona?' />

                <div className={styles.container_content}>
                    <article className={styles.passos}>

                        <div className={styles.boxLeft}>
                            <div className={styles.passo}>
                                <span>1</span>
                            </div>
                            <div className={styles.passo} onClick={alterarConteudo}>
                                <span>2</span>
                            </div>
                            <div className={styles.passo}>
                                <span>3</span>
                            </div>
                            <div className={styles.passo}>
                                <span>4</span>
                            </div>
                        </div>


                        <h2 className={styles.title} ref={titleRef}>1. Como chega os produtos?</h2>
                        <p className={styles.desc} ref={descRef}>
                            Assim que um produto chegar a uma data próxima de vencimento, ele pode ser adicionado em nossa plataforma pelo mercado.
                        </p>
                    </article>

                    <div className={styles.boxRight}>

                        <Swiper
                            // controla quantos slides por foto quero que apareça
                            slidesPerView={slidesPerView}
                            // define se é clicavel ou não
                            pagination={{ clickable: true }}
                            autoplay
                            navigation

                        >
                          
                            <SwiperSlide>
                                <img src={step} alt="Banner Promocional" className={styles.step_img} />
                            </SwiperSlide>


                            <SwiperSlide>
                                <img src={step} alt="Banner Promocional" className={styles.step_img} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={step} alt="Banner Promocional" className={styles.step_img} />
                            </SwiperSlide>
                        </Swiper>

        
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ComoFunciona;