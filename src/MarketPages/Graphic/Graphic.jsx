import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './Graphic.module.css'; // Import CSS Module
import HeaderMarket from '../../components/CardProduct/HeaderMarket/HeaderMarket';
import { Link } from 'react-router-dom';
import Add from '../../assets/img/Add.png';
import Home from '../../assets/img/Home_markt.png';
import Produtos from '../../assets/img/Produtos_market.png';
import Add_Market from '../../assets/img/Add_market.png';
import Conta from '../../assets/img/Conta.png';
import Sair from '../../assets/img/Sair.png';
import Footer from '../../components/FooterMarket/FooterMarket'

const Graphic = () => {
  const lineData = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Semana 1',
        data: [65, 48, 90, 81, 56, 55, 40],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
      },
      {
        label: 'Semana 2',
        data: [21, 8, 40, 19, 96, 27, 99],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Dias com mais vendas',
        font: {
          size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
      subtitle: {
        display: true,
        text: 'Gráfico feito para visualizar os dias com mais vendas do seu mercado',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const pieData = {
    labels: ['Chocolate', 'Salgadinho', 'Arroz', 'Snack', 'Massa', 'Bebida', 'Outros'],
    datasets: [
      {
        label: 'Vendas',
        data: [65, 48, 90, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(99, 255, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(99, 255, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Produtos mais vendidos por dia da semana',
        font: {
          size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
      subtitle: {
        display: true,
        text: 'Gráfico de pizza mostrando a distribuição das vendas de produtos referentes ao dia da semana',
      },
    },
  };

  const barData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3'],
    datasets: [
      {
        label: 'Quantidade Vendida',
        data: [50, 75, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Vendas apos começar a usar a plataforma',
        font: {
          size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <HeaderMarket />
      <div className={styles.container_pai}>
        <nav className={styles.side_bar}>
          {/*Nav-bar lateral */}
          <div className={styles.div_mercado}>
            {/* Div que mostra o nome e a imagem do mercado*/}
            <div className={styles.imagem_mercado}>
              {/* Imagem do mercado */}
            </div>
            <div className={styles.nome_mercado}>
              {/* Div para o nome do mercado */}
              <h2 className={styles.titulo_mercado}>Mercado Todo dia</h2>
              <p className={styles.nome_responsavel}>Responsavel</p>
            </div>
          </div>
          <div className={styles.container_btn}>
            {/*Container para o btn*/}
            <Link to="/productregistration">
              <button className={styles.btn_cds_produto}>
                {/*Btn para cadastrar produto*/}
                <div className={styles.conteudo_btn}>
                  {/*Conteudo do btn*/}
                  <div className={styles.container_img_add}>
                    {/*Container imagem add*/}
                    <img src={Add} alt="imagem de um mais" />
                  </div>
                  <div className={styles.container_texto_cadastro}>
                    {/*Texto cadastro*/}
                    <p className={styles.texto_cadastro}>Cadastrar Produto</p>
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <Link to="/marketSystem">
            <div className={styles.div_nav}>
              {/*Div Nav-bar*/}
              <div className={styles.container_central}>
                {/*Container centralizado*/}
                <div className={styles.container_img_nav}>
                  {/*Container da imagem*/}
                  <img src={Home} alt="imagem de uma casa" />
                </div>
                <div className={styles.container_texto_nav}>
                  {/*Texto da nav*/}
                  <p className={styles.texto_nav}>Pagina Inicial</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/marketproduct">
            <div className={styles.div_nav}>
              {/*Div Nav-bar*/}
              <div className={styles.container_central}>
                {/*Container centralizado*/}
                <div className={styles.container_img_nav}>
                  {/*Container da imagem*/}
                  <img src={Produtos} alt="imagem de uma casa" />
                </div>
                <div className={styles.container_texto_nav}>
                  {/*Texto da nav*/}
                  <p className={styles.texto_nav}>Produtos</p>
                </div>
              </div>
            </div>
          </Link>
          <div className={styles.div_nav}>
            {/*Div Nav-bar*/}
            <div className={styles.container_central}>
              {/*Container centralizado*/}
              <div className={styles.container_img_nav}>
                {/*Container da imagem*/}
                <img src={Conta} alt="imagem de uma casa" />
              </div>
              <div className={styles.container_texto_nav}>
                {/*Texto da nav*/}
                <p className={styles.texto_nav}>Minha conta</p>
              </div>
            </div>
          </div>
          <div className={styles.div_nav}>
            {/*Div Nav-bar*/}
            <Link to="/" className={styles.container_central}>
              <div className={styles.container_central}>
                {/*Container centralizado*/}
                <div className={styles.container_img_nav}>
                  {/*Container da imagem*/}
                  <img src={Sair} alt="imagem de uma casa" />
                </div>
                <div className={styles.container_texto_nav}>
                  {/*Texto da nav*/}
                  <p className={styles.texto_nav}>Sair</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>

       <div className={styles.graphics}>

          <div className={styles.container_graphic}>

            <div className={styles.container}>
              <Line data={lineData} options={lineOptions} />
            </div>

            <div className={styles.container_2}>
              <Pie data={pieData} options={pieOptions} />
            </div>

          </div>     

          <div className={styles.container_graphic}>

            <div className={styles.container_3}>
              <Bar data={barData} options={barOptions} />
            </div>  
          </div>
       </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Graphic;
