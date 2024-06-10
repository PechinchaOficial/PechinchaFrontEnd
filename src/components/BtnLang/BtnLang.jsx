import React from "react";

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
    <div>
      {/* Botão que, quando clicado, chama a função changeLanguage para alterar o idioma para português (pt) */}
      <button onClick={() => changeLanguage("pt")}>PT</button>
      {/* Botão que, quando clicado, chama a função changeLanguage para alterar o idioma para inglês (en) */}
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default BtnLang;