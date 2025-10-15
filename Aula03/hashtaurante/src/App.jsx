import React from 'react';
import "./App.css";
import imgRestaurant from "./assets/hashtaurante.webp";
import Categorias from './components/Categorias';
import Card from './components/Card';


function App() {
  return (
    <div className="container">
      <div className='banner'>
        <img src={imgRestaurant} alt="banner-restaurante"/>
      </div>

      <Categorias/>
      <Card/>
      
    </div>
  );
}

export default App;