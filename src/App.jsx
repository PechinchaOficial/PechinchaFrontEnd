import RouterApp from "./routers"
import { useState, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import Translation from './components/Translation/Translation'
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function App() {

  return (
    <>
      <RouterApp/>
      <Translation />
    </>
  )
}

export default App
