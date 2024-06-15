import React from "react";
import styles from './BtnLang.module.css'
import brasil from '../../assets/img/brasil.png'
import usa from '../../assets/img/usa.png'
// Importa o hook useTranslation da biblioteca react-i18next para utilizar funcionalidades de tradução
import { useTranslation } from "react-i18next";

function BtnLang() {
  // Utiliza o hook useTranslation para acessar o objeto i18n
  const { i18n } = useTranslation();

  // Define a função changeLanguage que altera o idioma da aplicação
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Altera o idioma da aplicação para o idioma passado como argumento
  };

  return (
    <div className={styles.container_btn}>
      {/* Botão que, quando clicado, chama a função changeLanguage para alterar o idioma para português (pt) */}
      <button className={styles.btn_lang} onClick={() => changeLanguage("pt")}>
        <img src={brasil} alt="Bandeira do País" className={styles.country} />
      </button>
      {/* Botão que, quando clicado, chama a função changeLanguage para alterar o idioma para inglês (en) */}
      <button className={styles.btn_lang} onClick={() => changeLanguage("en")}>
        <img src={usa} alt="Bandeira do País" className={styles.country} />
      </button>
    </div>
  );
}

export default BtnLang;