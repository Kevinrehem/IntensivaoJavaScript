import React from 'react';
import "./App.css";
import imgRestaurant from "./assets/hashtaurante.webp";
import Categorias from './components/Categorias';
import Cards from './components/Cards';


function App() {
  return (
    <div className="container">
      <div className='banner'>
        <img src={imgRestaurant} alt="banner-restaurante"/>
      </div>

      <Categorias/>
      <Cards/>
      
    </div>
  );
}

export default App;