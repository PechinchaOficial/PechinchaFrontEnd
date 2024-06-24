import styles from './Home.module.css'
import teste from '../../assets/img/pechinchaLogo.svg'
import star from '../../assets/img/star.svg'
import starYellow from '../../assets/img/starYellow.svg'
import CategoryProd from '../../components/CategoryProd/CategoryProd';
import step from '../../assets/img/etapa (1).svg'
import step2 from '../../assets/img/step22.svg'
import kaique from '../../assets/img/kaiqueAvalia.jpg'
import React, { useRef } from 'react';
import TituloFormato from '../../components/TituloFormato/TituloFormato';
import { useState, useEffect } from 'react'
// import carrossel
import { Swiper, SwiperSlide } from 'swiper/react';
// imports banner
import Banner from '../../components/Banner/Banner';
import imgBanner from '../../assets/img/banner.svg';
import CarouselProd from '../../components/CarouselProd/CarouselProd';
// imports mercados cadastrados
import mercadoLogo from '../../assets/img/mercadodia.svg'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import rateimg from '../../assets/img/altoFalante.png'
import amigao from '../../assets/img/Market/amigao.png'
import violeta from '../../assets/img/Market/violeta.png'
import recoy from '../../assets/img/Market/ricoy.png'
import Header from '../../components/Header/Header';
<<<<<<< HEAD
import logosimple from '../../assets/img/logo_base.svg'; 
 
import bannerc from '../../assets/img/bannerc.png'
 
=======
import logosimple from '../../assets/img/logo_base.svg';
import bannerc from '../../assets/img/bannerc.png'
>>>>>>> main



function HomeDeslogado() {

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
            <Header />
            <main className={styles.container_home}>
                {/*  Categorias dos produto*/}
                <section className={styles.hero_section}>
                    <div className={styles.container_slogan} id='container'>
                        <div className={styles.img_temp}>
                            <img src={teste} alt="logo" className={styles.img_logo} id={styles.logo_responsive} />
                       
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

                                    navigation>

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
                    <Banner bannerimg={imgBanner} bannerc={bannerc} /> {/* Banner de promoções */}
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
                                <img src={amigao} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketThree}>
                                <img src={violeta} alt="Logo Mercado" className={styles.logo_mercado_2} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}>
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
                        <h2 className={styles.title} id={styles.title_rate}>O QUE ESTÃO COMENTANDO SOBRE A <span className={styles.destaque}> PECHINCHA</span></h2>
                        <div className={styles.rate_section} id='container'>

                            <img src={rateimg} alt="Avaliação" className={styles.img_person} />

                            <div className={styles.container_rate}>
                                <div className={styles.rate_card}>
                                    <div className={styles.info_user}>
                                        <div className={styles.user_icon}>
                                            <img src={kaique} alt="Usuária avaliador" />
                                        </div>

                                        <div className={styles.user_info}>
                                            <h3>Kaique Oliveira Mota</h3>
                                            <p>Estudante</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>Muito boa a plataforma! Achei muito facil de usar e intuitiva, Já estou comprando toda semana!</p>
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
                                            <h3>Gabriel Gallo Santos</h3>
                                            <p>Estudante</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>Depois que descobri não pare mais de comprar. Ja indiquei pra todos aqui de casa!</p>
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
                            categoria='Perguntas frequentes' />
                        <div className={styles.container_perguntas}>
                            <div className={styles.pergunta}>
                                <h3>A Pechincha é um App de descontos?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha tem sistema de pagamento?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha faz entrega?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>A Pechincha assegura que meu pedido não está vencido?</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>



                        </div>
                    </section>


                </div>
            </main>
        </div>
    )
}

export default HomeDeslogado;