import React, { useRef, useEffect } from 'react';
import styles from './QuestionsSection.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Pergunta = ({ perguntaTexto, respostaTexto, delay }) => {
  const perguntaRef = useRef(null);
  const arrowRightRef = useRef(null);
  const arrowDownRef = useRef(null);

  const ShowAnswer = () => {
    perguntaRef.current.style.height = '200px';
    perguntaRef.current.style.transition = '0.5s all';
    arrowRightRef.current.style.display = 'none';
    arrowDownRef.current.style.display = 'block';
  };

  const HiddenAnswer = () => {
    perguntaRef.current.style.height = '60px';
    perguntaRef.current.style.transition = '0.5s all';
    arrowRightRef.current.style.display = 'block';
    arrowDownRef.current.style.display = 'none';
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // Duração das animações
    });
  }, []);

  return (
    <div className={styles.pergunta} ref={perguntaRef} data-aos="fade-up" data-aos-delay={delay} >
      <div className={styles.container_pergunta}  >
        <h3>{perguntaTexto}</h3>
        <i
          onClick={ShowAnswer}
          ref={arrowRightRef}
          className="fa-solid fa-circle-chevron-right"
          id={styles.right}
        ></i>
        <i
          onClick={HiddenAnswer}
          ref={arrowDownRef}
          className="fa-solid fa-circle-chevron-down"
          id={styles.arrow_down}
        ></i>
      </div>
      <div className={styles.resposta}>
        <p>{respostaTexto}</p>
      </div>
    </div>
  );
};

const ContainerPerguntas = () => {
  return (
    <div className={styles.container_perguntas}>
      <Pergunta   data-aos="fade-right"
        perguntaTexto="A Pechincha é um App de descontos?"
        respostaTexto="A Pechincha é uma plataforma para divulgar descontos de forma que os consumidores economizem e os mercados possam evitar o desperdicios e prejuizo."
        
      />
      <Pergunta
        perguntaTexto="A Pechincha tem sistema de pagamento?"
        respostaTexto="A Pechincha tem como plano futuro implementar um sistema de pagamento para que você consumidor possa comprar direto da plataforma."
       delay='200'
      />
      <Pergunta
        perguntaTexto="A Pechincha faz entrega?"
        respostaTexto="Ainda não fazemos entrega mas futuramente isso sera possivel, para que os consumidores possam aproveitar essas ofertas imperdiveis do conforto da sua casa."
       delay='300'
      />
      <Pergunta
        perguntaTexto="A Pechincha assegura que meu pedido não está vencido?"
        respostaTexto="Sim, a Pechincha conta com um sistema de exclusão automatico dos produtos vencidos da plataforma de forma que nenhum usuario nunca compre um produto vencido."
       delay='500'
      />
    </div>
  );
};

export default ContainerPerguntas;
