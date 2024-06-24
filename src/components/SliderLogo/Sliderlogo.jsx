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
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.containerrounded}>
          <div className={Styles.slider}>
            <div className={Styles.logos}>
              <img src={MotiroIcon} alt="Motiro Icon" className={Styles.fab} />
              <img src={AssaiIcon} alt="Assai Icon" className={Styles.fab} />
              <img src={ProaIcon} alt="Proa Icon" className={Styles.fab} />
              <img src={AtacadaoIcon} alt="Atacadao Icon" className={Styles.fab} />
              <img src={CasasIcon} alt="Casas Icon" className={Styles.fab} />
              <img src={AyumiIcon} alt="Ayumi Icon" className={Styles.fab} />
            </div>
            <div className={Styles.logos}>
              <img src={MotiroIcon} alt="Motiro Icon" className={Styles.fab} />
              <img src={AssaiIcon} alt="Assai Icon" className={Styles.fab} />
              <img src={ProaIcon} alt="Proa Icon" className={Styles.fab} />
              <img src={AtacadaoIcon} alt="Atacadao Icon" className={Styles.fab} />
              <img src={CasasIcon} alt="Casas Icon" className={Styles.fab} />
              <img src={AyumiIcon} alt="Ayumi Icon" className={Styles.fab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderLogo;