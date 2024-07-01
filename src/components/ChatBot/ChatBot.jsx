import React, { useState } from 'react';
import styles from './ChatBote.module.css';
import $ from 'jquery';

const Chatbot = () => {
  const [index, setIndex] = useState(0);

  const responses = {
    "oi": "Olá! Como posso ajudar você hoje?",
    "como você está?": "Estou bem e você?",
    "qual é o seu nome?": "Eu sou o Pechinchinha desenvolvido para ajudar você!",
    "A Pechincha é um App de descontos?": "A Pechincha é uma plataforma para divulgar descontos de forma que os consumidores economizem e os mercados possam evitar o desperdício e prejuízo.",
    "A Pechincha tem sistema de pagamento?": "A Pechincha tem como plano futuro implementar um sistema de pagamento para que você consumidor possa comprar direto da plataforma.",
    "A Pechincha faz entrega?": "Ainda não fazemos entrega mas futuramente isso será possível, para que os consumidores possam aproveitar essas ofertas imperdíveis do conforto da sua casa.",
    "A Pechincha assegura que meu pedido não está vencido?": "Sim, a Pechincha conta com um sistema de exclusão automático dos produtos vencidos da plataforma de forma que nenhum usuário nunca compre um produto vencido.",
    "tchau": "Tchau, estarei te esperando caso precise de ajuda novamente!",
    "meu nome é gallo": "Você é gay"
    // Adicione mais perguntas e respostas aqui
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = $('#chat-input').val();
    if (msg.trim() === '') return;

    generateMessage(msg, 'self');

    setTimeout(() => {
      const response = responses[msg.toLowerCase()] || "Desculpe, não entendi sua pergunta.";
      generateMessage(response, 'user');
    }, 1000);
  };

  const generateMessage = (msg, type) => {
    setIndex((prevIndex) => prevIndex + 1);
    const str = `
      <div id='cm-msg-${index}' class="${styles.chatMsg} ${type}">
        <span class="${styles.msgAvatar}">
          <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745" alt="avatar"/>
        </span>
        <div class="${styles.cmMsgText}">
          ${msg}
        </div>
      </div>`;
    $('.chat-logs').append(str);
    $(`#cm-msg-${index}`).hide().fadeIn(300);
    if (type === 'self') {
      $('#chat-input').val('');
    }
    $('.chat-logs').stop().animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
  };

  const toggleChat = () => {
    $('#chat-circle').toggle('scale');
    $('.chat-box').toggle('scale');
  };

  return (
    <div id="body">
      
      <div id="chat-circle" className={styles.btnRaised} onClick={toggleChat}>
        <div id="chat-overlay"></div>
        <div className={styles.iconContainer}>
          
        </div>
      </div>
      <div className={`chat-box ${styles.chatBox}`}>
        <div className={styles.chatBoxHeader}>
          ChatBot
          <span className={styles.chatBoxToggle} onClick={toggleChat}><i className="material-icons">close</i></span>
        </div>
        <div className={styles.chatBoxBody}>
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
        </div>
        <div className={styles.chatInput}>
          <form onSubmit={handleSubmit}>
            <input type="text" id="chat-input" placeholder="Send a message..." />
            <button type="submit" className={styles.chatSubmit} id="chat-submit">
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
