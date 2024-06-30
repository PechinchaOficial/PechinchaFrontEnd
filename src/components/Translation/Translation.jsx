import React, { useEffect } from 'react';

const GTranslate = () => {
  // Executa o efeito apenas uma vez após o componente ser montado
  useEffect(() => {
    // Cria um elemento <script> para definir as configurações do Google Translate
    const script1 = document.createElement('script');
    script1.innerHTML = `window.gtranslateSettings = {"default_language":"pt","native_language_names":true,"detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper","flag_style":"3d","alt_flags":{"en":"usa","pt":"brazil","es":"argentina"}}`;
    // Adiciona o script ao final do <body> para configurar as opções do Google Translate
    document.body.appendChild(script1);

    // Cria um segundo elemento <script> para carregar o script principal do Google Translate
    const script2 = document.createElement('script');
    script2.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script2.defer = true;  // Carrega o script de forma assíncrona após a página principal ser carregada
    // Adiciona o segundo script ao final do <body> para carregar o widget de tradução
    document.body.appendChild(script2);

    // Função de limpeza executada quando o componente é desmontado
    return () => {
      // Remove o script1 do <body> para limpar as configurações do Google Translate
      document.body.removeChild(script1);
      // Remove o script2 do <body> para desativar o widget de tradução
      document.body.removeChild(script2);
    };
  }, []); // Dependência vazia faz com que o efeito só seja executado uma vez

  // Retorna um elemento <div> que servirá como wrapper para o widget de tradução
  return <div className="gtranslate_wrapper"></div>;
};


export default GTranslate;
