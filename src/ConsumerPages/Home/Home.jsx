import styles from './Home.module.css'
import teste from '../../assets/img/pechinchaLogo.svg'
import star from '../../assets/img/star.svg'
import starYellow from '../../assets/img/starYellow.svg'
import CategoryProd from '../../components/CategoryProd/CategoryProd';
import step from '../../assets/img/etapa (1).svg'
import React, { useRef } from 'react';
import TituloFormato from '../../components/TituloFormato/TituloFormato';
import { useState, useEffect } from 'react'
// import carrossel
import { Swiper, SwiperSlide } from 'swiper/react';
// imports banner
import Banner from '../../components/Banner/Banner';
import imgBanner from '../../assets/img/banner1.svg';
import CarouselProd from '../../components/CarouselProd/CarouselProd';
// imports mercados cadastrados
import mercadoLogo from '../../assets/img/mercadodia.svg'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import rateimg from '../../assets/img/avaliacao.png'

function Home() {

    const [slidesPerView, setSlidePerView] = useState(1)

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


    const descRef = useRef();
    const titleRef = useRef();

    const descRef3 = useRef();



    function step1() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = '<p>Assim que um produto chegar a uma data próxima de vencimento, ele pode ser cadastrado em nossa plataforma pelo mercado.</p>';
            titleRef.current.innerHTML = '  1. Como chega os produtos?';

        }
    }

    function alterarConteudo() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = '<p>Com o produto cadastrado, ele ficará disponível na aba de produtos, na barra de pesquisa inicial, ou em categorias no início do site.</p>';
            titleRef.current.innerHTML = '  2. Como encontrar os produtos?';

        }
    }

    function step3() {
        if (descRef.current || titleRef3.current) {
            descRef.current.innerHTML = '<p>É bem simples, primeiro você se cadastra na nossa plataforma, e será direcionado para página de produtos, onde poderá escolher as pechinchas desejadas, e adicionar ao carrinho. Após adicionar todos os itens desejados, você irá para a área de pagamento, e pronto, pechincha garantida!</p>';
            titleRef.current.innerHTML = '  3. E para comprar?';

        }
    }

    return (
        <div>
            <HeaderConsumer/>
            <main className={styles.container_home}>
                {/*  Categorias dos produto*/}
                <section className={styles.hero_section}>
                    <div className={styles.container_slogan} id='container'>
                        <img src={teste} alt="logo" className={styles.img_logo} />
                        <h2 className={styles.slogan_subtitle}>Nós combatemos o desperdicio e ainda fazemos aquela diferença no bolso</h2>

                        <div className={styles.search}>
                            <input type="search" placeholder='Pechinchar' className={styles.search_bar} />
                            <button className={styles.btn_bar}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>


                    <img src={star} alt="star" className={styles.star} />

                    <img src={starYellow} alt="star" className={styles.star_2} />




                </section>

                {/*  Categorias dos produto*/}

                <section className={styles.categorySection}>
                    <header className={styles.text}>
                        <h2 className={styles.title}>Mate sua fome por uma <span className={styles.destaque}>Pechincha</span></h2>
                        <p className={styles.subtitle}>Escolha uma das categorias abaixo, e economize</p>
                    </header>

                    <CategoryProd />
                </section>

                {/* Como funciona a chegada dos produtos na plataforma*/}

                <section className='background'>
                    <div className={styles.comoFunciona}>
                        <TituloFormato categoria='Como funciona?' />

                        <div className={styles.container_content}>
                            <article className={styles.passos}>

                                <div className={styles.boxLeft}>
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

                                <h2 className={styles.title_tutorial} ref={titleRef}>1. Como chega os produtos?</h2>
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
                                    navigation>

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

                {/* Promoções */}

                <section className="background">
                    <div className={styles.container_promotion} id="container">   {/* Container */}
                        <Banner bannerimg={imgBanner} /> {/* Banner de promoções */}
                        <CarouselProd />    {/* Carrossel de produtos */}
                    </div>
                </section>

                <div id="background">
                    <section className={styles.mercados} id='container'>
                        <TituloFormato
                            categoria='Ja trabalham conosco' />
                        <div className={styles.container_mercados}>
                            <div className={styles.card_mercado}>
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}>
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketThree}>
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}>
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Perguntas frequentes */}

                <div id="background">
                    <section className={styles.perguntas} id='container'>
                        <TituloFormato
                            categoria='Perguntas frequentes' />
                        <div className={styles.container_perguntas}>
                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>


                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>
                        </div>
                    </section>

                    <section className={styles.rate_section}>
                        <img src={rateimg} alt="Avaliação" />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Home;