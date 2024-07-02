import React, { useState } from 'react';
import styles from './ChatBote.module.css';
import $ from 'jquery';
import Img from '../../assets/img/chatbot.png';
import Usuario from '../../assets/img/usuario.png';

const Chatbot = () => {
  const [index, setIndex] = useState(0);

  const responses = {
    "oi": "Olá! Como posso ajudar você hoje?",

    "como você está?": "Estou bem e você?",
    "como voce esta?": "Estou bem e você?",

    "qual é o seu nome?": "Eu sou o Pechinchinha desenvolvido para ajudar você!",
    "qual e o seu nome?": "Eu sou o Pechinchinha desenvolvido para ajudar você!",

    "A pechincha é um app de desconto?": "A Pechincha é uma plataforma para divulgar descontos de forma que os consumidores economizem e os mercados possam evitar o desperdício e prejuízo.",
    "a pechincha é um app de desconto?": "A Pechincha é uma plataforma para divulgar descontos de forma que os consumidores economizem e os mercados possam evitar o desperdício e prejuízo.",

    "A Pechincha tem sistema de pagamento?": "A Pechincha tem como plano futuro implementar um sistema de pagamento para que você consumidor possa comprar direto da plataforma.",
    "a pechincha tem sistema de pagamento?": "A Pechincha tem como plano futuro implementar um sistema de pagamento para que você consumidor possa comprar direto da plataforma.",

    "A Pechincha faz entrega?": "Ainda não fazemos entrega mas futuramente isso será possível, para que os consumidores possam aproveitar essas ofertas imperdíveis do conforto da sua casa.",
    "a pechincha faz entrega?": "Ainda não fazemos entrega mas futuramente isso será possível, para que os consumidores possam aproveitar essas ofertas imperdíveis do conforto da sua casa.",

    "A Pechincha assegura que meu pedido não está vencido?": "Sim, a Pechincha conta com um sistema de exclusão automático dos produtos vencidos da plataforma de forma que nenhum usuário nunca compre um produto vencido.",
    "a pechincha assegura que meu pedido nao está vencido?": "Sim, a Pechincha conta com um sistema de exclusão automático dos produtos vencidos da plataforma de forma que nenhum usuário nunca compre um produto vencido.",

    "tchau": "Tchau, estarei te esperando caso precise de ajuda novamente!",

    "Quais são os desenvolvedores da Pechincha?": "Os desenvolvedores da pechincha são César Couto, Kaique Oliveira, Gabriel Gallo, Gabriel Alves, Luane Moura, Jessica Magalhães e Pablo Henrique",
    "quais sao os desenvolvedores da pechincha?": "Os desenvolvedores da pechincha são César Couto, Kaique Oliveira, Gabriel Gallo, Gabriel Alves, Luane Moura, Jessica Magalhães, Pablo Henrique e Juan Pina",

    "qual o slogan da pechincha": "Se sua grana apertou a Pechincha chegou!",
    "Qual o slogan da Pechincha?": "Se sua grana apertou a Pechincha chegou!",

    "como chegam os produtos na plataforma": "Assim que um produto chegar a uma data próxima de vencimento, ele pode ser cadastrado em nossa plataforma pelo mercado.",
    "Como chegam os produtos na plataforma": "Assim que um produto chegar a uma data próxima de vencimento, ele pode ser cadastrado em nossa plataforma pelo mercado.",


   "Como encontrar os produtos": "Com o produto cadastrado, ele ficará disponível na aba de produtos, na barra de pesquisa inicial, ou em categorias no início do site..",

   "e para comprar": "É bem simples, primeiro você se cadastra na nossa plataforma, e será direcionado para página de produtos, onde poderá escolher as pechinchas desejadas, e adicionar ao carrinho. Após adicionar todos os itens desejados, você irá para a área de pagamento, e pronto, pechincha garantida!",
   "E para comprar?": "É bem simples, primeiro você se cadastra na nossa plataforma, e será direcionado para página de produtos, onde poderá escolher as pechinchas desejadas, e adicionar ao carrinho. Após adicionar todos os itens desejados, você irá para a área de pagamento, e pronto, pechincha garantida!",

   "Oque é a pechincha?": "Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar",
   "oque e a pechincha": "Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar",

   "Qual a missão da pechincha?": "Nosso intuito é combater o desperdício e a fome. criamos o Pechincha para resolver esse problema e trazer comida para a mesa para as famílias de bem.",
   "qual a missao da pechincha?": "Nosso intuito é combater o desperdício e a fome. criamos o Pechincha para resolver esse problema e trazer comida para a mesa para as famílias de bem.",
    
   "quais os planos futuros da pechincha": "Futuramente, a Pechincha pretende ter um aplicativo, para que nossos consumidores recebam notificações, avisando sobre as ofertas mais próximas. Temos planos de integrar nossa plataforma ao CRM do mercado, para que as ofertas cheguem automaticamente em nosso sistema. E para maior praticidade do nossos consumidores, pretendemos integrar serviços de entrega, onde o cliente pagará.",
   "Quais os planos futuros da pechincha": "Futuramente, a Pechincha pretende ter um aplicativo, para que nossos consumidores recebam notificações, avisando sobre as ofertas mais próximas. Temos planos de integrar nossa plataforma ao CRM do mercado, para que as ofertas cheguem automaticamente em nosso sistema. E para maior praticidade do nossos consumidores, pretendemos integrar serviços de entrega, onde o cliente pagará.",

   "Porque o nome pechincha?": "O nome Pechincha vem de barganha ou negocioação.",
   "pq o nome pechincha": "O nome Pechincha vem de barganha ou negocioação.",

    "Quais os planos da pechincha?": "A Pechincha conta com os planos Baratinho, Barato e Pechinchas custando R$34,99 R$79,99 R$349,99.",
   "quais os planos da pechincha?": "O nome Pechincha vem de barganha ou negocioação.",

   "para quais linguas a pechincha tem tradução?": "A Pechincha conta com tradução a mais de 130 idiomas.",
   "Para quais linguas pechincha?": "O nome Pechincha vem de barganha ou negocioação.",

   "A pechincha tem acessibilidade?": "Sim a pechincha contem APIs de acessibilidade.",
   "a pechincha tem acessibilidade": "Sim a pechincha contem APIs de acessibilidade."
    
    
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
    const avatar = type === 'self' ? Usuario : Img;
    const str = `
      <div id='cm-msg-${index}' class="${styles.chatMsg} ${type}">
        <span class="${styles.msgAvatar}">
          <img src="${avatar}" alt="avatar" class="${styles.msgAvatarImg}"/>
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
          <img src={Img} alt="Chatbot Icon" />
        </div>
      </div>
      
      <div className={`chat-box ${styles.chatBox}`}>
        <div className={styles.chatBoxHeader}>
          Pechinchinha
          <span className={styles.chatBoxToggle} onClick={toggleChat}><i className="material-icons">close</i></span>
        </div>
        <div className={styles.chatBoxBody}>
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
        </div>
        <div className={styles.chatInput}>
          <form onSubmit={handleSubmit}>
            <input type="text" id="chat-input" placeholder="Envie uma mensagem..." />
            <button type="submit" className={styles.chatSubmit} id="chat-submit">
              <i className="material-icons"><i className="fa-solid fa-paper-plane"></i></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
