import React from 'react';
import RouterApp from './routers'; // Importe seu componente de roteamento principal
import { register } from 'swiper/element/bundle';
import Translation from './components/Translation/Translation';
import Chatbot from './components/ChatBot/ChatBot';
import { PopUpProvider } from './components/PopUpCart/PopUpContext' // Importe o Provider do contexto do Pop-up
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

register();

function App() {
  return (
    <PopUpProvider> {/* Envolve seus componentes no Provider do Pop-up */}
      <>
        <RouterApp />
        <Translation />
        <Chatbot />
      </>
    </PopUpProvider>
  );
}

export default App;
