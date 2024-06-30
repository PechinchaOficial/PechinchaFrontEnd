// Importando estilos e recursos necessários
import styles from './Home.module.css';
import teste from '../../assets/img/pechinchaLogo.svg';
import logosimple from '../../assets/img/logo_base.svg';
import star from '../../assets/img/star.svg';
import starYellow from '../../assets/img/starYellow.svg';
import CategoryProd from '../../components/CategoryProd/CategoryProd';
import step from '../../assets/img/etapa (1).svg';
import step2 from '../../assets/img/step22.svg';
import kaique from '../../assets/img/kaiqueAvalia.jpg';
import React, { useRef } from 'react';
import TituloFormato from '../../components/TituloFormato/TituloFormato';
import { useState, useEffect, useLayoutEffect } from 'react';
// Importando componentes do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Importando banner, carrossel e animações
import Banner from '../../components/Banner/Banner';
import imgBanner from '../../assets/img/banner.svg';
import CarouselProd from '../../components/CarouselProd/CarouselProd';

// Importando logos de mercados cadastrados
import mercadoLogo from '../../assets/img/mercadodia.svg';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import rateimg from '../../assets/img/altoFalante.png';
import amigao from '../../assets/img/Market/amigao.png';
import violeta from '../../assets/img/Market/violeta.png';
import recoy from '../../assets/img/Market/ricoy.png';
import { useTranslation } from "react-i18next";
import bannerc from '../../assets/img/bannerc.png'
import ContainerPerguntas from './Questions/QuestionsSection'
import Bannerverde from '../../assets/img/bannerverde.png'
import Bannerjunina from '../../assets/img/bannerjunina.png'

import 'aos/dist/aos.css';
import AOS from 'aos';



// Definindo o componente principal Home
function Home() {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Duração das animações
        });
      }, []);
      
    const { t } = useTranslation();  // Usando a tradução

    const [slidesPerView, setSlidePerView] = useState(1);  // Estado para controlar a quantidade de slides visíveis

    useEffect(() => {
        // Função para ajustar a quantidade de slides visíveis com base na largura da janela
        function handleResize() {
            if (window.innerWidth > 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
        }

        handleResize();
        // Adiciona um ouvinte de evento para redimensionar
        window.addEventListener('resize', handleResize);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Referências para manipulação direta do DOM
    const descRef = useRef();
    const titleRef = useRef();

    // Funções para alterar o conteúdo dos passos
    function step1() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = `${t("text01")}`;
            titleRef.current.innerHTML = `${t("Como chega os produtos?")}`;
        }
    }

    function alterarConteudo() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = `${t("text02")}`;
            titleRef.current.innerHTML = `${t("2. Como encontrar os produtos?")}`;
        }
    }

    function step3() {
        if (descRef.current || titleRef3.current) {
            descRef.current.innerHTML = `${t("text03")}`;
            titleRef.current.innerHTML = `${t("3. E para comprar?")}`;
        }
    }

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.container_home} >
                {/*  Categorias dos produto*/}
                <section className={styles.hero_section} >
                    <div className={styles.container_slogan} id='container' data-aos="fade-up">
                        <div className={styles.img_temp}>

                            <img src={logosimple} alt="logo" className={styles.img_logo2} />
                            <h1>A grana apertou?</h1>
                            <h2>Pechincha Chegou!</h2>

                        </div>
                        <h2 className={styles.slogan_subtitle}>Nós combatemos o desperdício e ainda fazemos aquela diferença no bolso!</h2>

                        <div className={styles.search}>
                            <input type="search" placeholder='Pechinchar' className={styles.search_bar} />
                            <button className={styles.btn_bar}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>


                    <img src={star} alt="star" className={styles.star} data-aos="fade-right" />

                    <img src={starYellow} alt="star" className={styles.star_2} data-aos="fade-left" />
                </section>

                {/*  Categorias dos produto*/}

                <section className={styles.categorySection}>
                    <header className={styles.text}>
                        <h2 className={styles.title}>{t("slogan")} <span className={styles.destaque}>Pechincha</span></h2>
                        <p className={styles.subtitle}>{t("EscolhaCategoria")}</p>
                    </header>

                    <CategoryProd />
                </section>

                {/* Como funciona a chegada dos produtos na plataforma*/}

                <section className='background' >
                    <div className={styles.comoFunciona} >
                        <TituloFormato categoria={t("Como funciona?")} />

                        <div className={styles.container_content} >
                            <article className={styles.passos} data-aos="fade-right">

                                <div className={styles.boxLeft} >
                                    <div className={styles.passo} onClick={step1}>
                                        <span>1</span>
                                    </div>
                                    <div className={styles.passo} onClick={alterarConteudo}>
                                        <span>2</span>
                                    </div>
                                    <div className={styles.passo} onClick={step3}>
                                        <span>3</span>
                                    </div>
                                    <div className={styles.passo}>
                                        <span>4</span>
                                    </div>
                                </div>

                                <h2 className={styles.title_tutorial} ref={titleRef}>{t("Como chega os produtos?")}</h2>
                                <p className={styles.desc} ref={descRef}>
                                    {t("text01")}
                                </p>
                            </article>

                            <div className={styles.boxRight} id='item' data-aos="fade-left">

                                <Swiper
                                    // controla quantos slides por foto quero que apareça
                                    slidesPerView={slidesPerView}
                                    // define se é clicavel ou não

                                >

                                    <SwiperSlide>
                                        <img src={step} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src={step2} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src={step} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promoções */}

                <section className="background">
                    <div className={styles.container_promotion} id="container">   {/* Container */}
                        <Banner bannerimg={imgBanner} bannerc={bannerc} bannerverde={Bannerverde} bannerjunino={Bannerjunina} /> {/* Banner de promoções */}
                        <CarouselProd />    {/* Carrossel de produtos */}
                    </div>
                </section>

                <div id="background">
                    <section className={styles.mercados} id='container' >
                        <TituloFormato
                            categoria={t("Ja trabalham conosco")} />
                        <div className={styles.container_mercados}>
                            <div className={styles.card_mercado} data-aos="fade-up">
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo} data-aos="fade-up" data-aos-delay="200">
                                <img src={amigao} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketThree} data-aos="fade-up" data-aos-delay="300">
                                <img src={violeta} alt="Logo Mercado" className={styles.logo_mercado_2} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}data-aos="fade-up" data-aos-delay="400">
                                <img src={recoy} alt="Logo Mercado" className={styles.logo_mercado_2} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="background">
                    <section className={styles.section_rate} id='container'>
                        <h2 className={styles.title} id={styles.title_rate}>{t("O QUE ESTÃO COMENTANDO SOBRE A")}<span className={styles.destaque}> PECHINCHA</span></h2>
                        <div className={styles.rate_section} id='container'>

                            <img src={rateimg} alt="Avaliação" className={styles.img_person} data-aos="fade-right"/>

                            <div className={styles.container_rate}data-aos="fade-left">
                                <div className={styles.rate_card}>
                                    <div className={styles.info_user}>
                                        <div className={styles.user_icon}>
                                            <img src={kaique} alt="Usuária avaliador" />
                                        </div>

                                        <div className={styles.user_info}>
                                            <h3>Kaique Oliveira Mota</h3>
                                            <p>{t("Estudante")}</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>{t("Comentario01")}</p>
                                    </div>

                                    <div className={styles.stars}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>

                                    </div>
                                </div>

                                <div className={styles.rate_card}>
                                    <div className={styles.info_user}>
                                        <div className={styles.user_icon}>
                                            <img src="https://media.licdn.com/dms/image/D4D03AQG1EFTN1o1MWA/profile-displayphoto-shrink_800_800/0/1694273409957?e=1723075200&v=beta&t=OmgLSaUwmM2X8Vz2aKmdSpSmPcSrp0W6g5p0_BPvBlg" alt="Usuária avaliador" />
                                        </div>

                                        <div className={styles.user_info}>
                                            <h3>Gabriel Gallo</h3>
                                            <p>{t("Estudante")}</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>{t("Comentario02")}</p>
                                    </div>

                                    <div className={styles.stars}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Perguntas frequentes */}

                <div id="background">
                    <section className={styles.perguntas} id='container'>
                        <TituloFormato
                            categoria={t("TituloPerguntas")} />
                        <ContainerPerguntas />
                    </section>


                </div>
            </main>


        </div>
    )
}

export default Home;