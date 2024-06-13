// Importa a biblioteca i18next, que é a principal responsável pela internacionalização
import i18n from "i18next";

// Importa o módulo initReactI18next da biblioteca react-i18next, que permite a integração do i18next com o React
import { initReactI18next } from "react-i18next";

// Importa os arquivos de tradução para o inglês e português
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

// Define os recursos de tradução disponíveis, organizados por idioma
const resources = {
  en: {
    translation: translationEN, // As traduções em inglês são carregadas do arquivo importado
  },
  pt: {
    translation: translationPT, // As traduções em português são carregadas do arquivo importado
  },
};

// Inicializa o i18next com as configurações desejadas
i18n
  .use(initReactI18next) // Passa o i18next para o react-i18next para a integração
  .init({
    resources, // Define os recursos de tradução configurados acima
    lng: "pt", // Define o idioma padrão da aplicação como português
    fallbackLng: "pt", // Define o idioma de fallback (caso a tradução não esteja disponível) como português
    interpolation: {
      escapeValue: false, // Configura o i18next para não escapar os valores (necessário para segurança no React)
    },
  });

// Exporta a configuração do i18next para ser usada em toda a aplicação
export default i18n;