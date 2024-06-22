import React from 'react';
import './Scroller.css';
import Motiro from '../../../../assets/img/MotiroIco.png'
import Proa from '../../../../assets/img/Proa.png'
import Atacadao from '../../../../assets/img/Atacadao.png'
import Casabahia from '../../../../assets/img/CasaBahia.png'
import Ayumi from '../../../../assets/img/Ayumi.png'


const Scroller = () => {
  return (
    <div className="scroller" data-speed="fast" data-animated="true">
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          <div className="Box" id="Box1"><img src={Motiro} className="img" alt="Logo do Banco Pan" title="Banco Pan" /></div>
          <img src={Proa} alt="Logo do Trivago" title="Trivago" />
          <div><img src={Atacadao} alt="Logo do Proa" title="Proa" /></div>
          <img src={Casabahia} alt="Logo da Brooking.com" title="Brooking.com" />
          <img src={Ayumi} alt="Logo da Brooking.com" title="Brooking.com" />
          <div className="Box" id="Box1"><img src={Motiro} className="img" alt="Logo do Banco Pan" title="Banco Pan" /></div>
          <img src={Proa} alt="Logo do Trivago" title="Trivago" />
          <img src={Atacadao} alt="Logo do Proa" title="Proa" />
          <img src={Casabahia} alt="Logo da Brooking.com" title="Brooking.com" />
          <img src={Ayumi} alt="Logo da Brooking.com" title="Brooking.com" />
          
        </div>
      </div>
    </div>
  );
};

export default Scroller;
