import React from 'react'; // Certifique-se de importar React
import Styles from './SliderLogo.module.css';
import MotiroIcon from '../../assets/img/MotiroIcon.png';
import AssaiIcon from '../../assets/img/AssaiIcon.png';
import ProaIcon from '../../assets/img/ProaIcon.png';
import AtacadaoIcon from '../../assets/img/AtacadaoIcon.png';
import CasasIcon from '../../assets/img/CasasIcon.png';
import AyumiIcon from '../../assets/img/AyumiIcon.png';


function SliderLogo() {
  return (
    // Container principal com classe Styles.container
    <div className={Styles.container}>
      {/* Linha dentro do container */}
      <div className={Styles.row}>
        {/* Container arredondado com classe Styles.containerrounded */}
        <div className={Styles.containerrounded}>
          {/* Slider com classe Styles.slider */}
          <div className={Styles.slider}>
            {/* Grupo de logos com classe Styles.logos */}
            <div className={Styles.logos}>
              {/* Imagem 1 com src de MotiroIcon e classe Styles.fab */}
              <img src={MotiroIcon} alt="Motiro Icon" className={Styles.fab} />
              {/* Imagem 2 com src de AssaiIcon e classe Styles.fab */}
              <img src={AssaiIcon} alt="Assai Icon" className={Styles.fab} />
              {/* Imagem 3 com src de ProaIcon e classe Styles.fab */}
              <img src={ProaIcon} alt="Proa Icon" className={Styles.fab} />
              {/* Imagem 4 com src de AtacadaoIcon e classe Styles.fab */}
              <img src={AtacadaoIcon} alt="Atacadao Icon" className={Styles.fab} />
              {/* Imagem 5 com src de CasasIcon e classe Styles.fab */}
              <img src={CasasIcon} alt="Casas Icon" className={Styles.fab} />
              {/* Imagem 6 com src de AyumiIcon e classe Styles.fab */}
              <img src={AyumiIcon} alt="Ayumi Icon" className={Styles.fab} />
            </div>
            {/* Segundo grupo de logos com classe Styles.logos */}
            <div className={Styles.logos}>
              {/* Imagem 1 com src de MotiroIcon e classe Styles.fab */}
              <img src={MotiroIcon} alt="Motiro Icon" className={Styles.fab} />
              {/* Imagem 2 com src de AssaiIcon e classe Styles.fab */}
              <img src={AssaiIcon} alt="Assai Icon" className={Styles.fab} />
              {/* Imagem 3 com src de ProaIcon e classe Styles.fab */}
              <img src={ProaIcon} alt="Proa Icon" className={Styles.fab} />
              {/* Imagem 4 com src de AtacadaoIcon e classe Styles.fab */}
              <img src={AtacadaoIcon} alt="Atacadao Icon" className={Styles.fab} />
              {/* Imagem 5 com src de CasasIcon e classe Styles.fab */}
              <img src={CasasIcon} alt="Casas Icon" className={Styles.fab} />
              {/* Imagem 6 com src de AyumiIcon e classe Styles.fab */}
              <img src={AyumiIcon} alt="Ayumi Icon" className={Styles.fab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

export default SliderLogo;