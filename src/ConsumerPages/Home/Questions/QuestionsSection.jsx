import React, { useRef } from 'react';
import styles from './QuestionsSection.module.css';

const Pergunta = ({ perguntaTexto, respostaTexto }) => {
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

  return (
    <div className={styles.pergunta} ref={perguntaRef}>
      <div className={styles.container_pergunta}>
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
      <Pergunta
        perguntaTexto="A Pechincha é um App de descontos?"
        respostaTexto="Lorem ipsum, dolor sit amet consecteturdicta natus commodi numquam sit minima pariatur molestias nihil reprehenderit error aperiam delectus officiis illo excepturi."
      />
      <Pergunta
        perguntaTexto="A Pechincha tem sistema de pagamento?"
        respostaTexto="Lorem ipsum, dolor sit amet consecteturdicta natus commodi numquam sit minima pariatur molestias nihil reprehenderit error aperiam delectus officiis illo excepturi."
      />
      <Pergunta
        perguntaTexto="A Pechincha faz entrega?"
        respostaTexto="Lorem ipsum, dolor sit amet consecteturdicta natus commodi numquam sit minima pariatur molestias nihil reprehenderit error aperiam delectus officiis illo excepturi."
      />
      <Pergunta
        perguntaTexto="A Pechincha assegura que meu pedido não está vencido?"
        respostaTexto="Lorem ipsum, dolor sit amet consecteturdicta natus commodi numquam sit minima pariatur molestias nihil reprehenderit error aperiam delectus officiis illo excepturi."
      />
    </div>
  );
};

export default ContainerPerguntas;
