import React from 'react';
import "./App.css";
import imgRestaurant from "./assets/hashtaurante.webp";
import Categorias from './components/Categorias';

function App() {
  return (
    <div className="container">
      <div className='banner'>
        <img src={imgRestaurant} alt="banner-restaurante"/>
      </div>
      
      <Categorias/>
      
    </div>
  );
}

export default App;