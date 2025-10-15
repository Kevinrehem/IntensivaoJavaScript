import React from 'react'
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg"

const Card = () => {
  return (
    <div className="card">
        <div className="card__textos">
        <h2 className="card__titulo">Hamburguer de picanha</h2>

        <p>
            Hamburguer de Picanha Angus, Queijo Cheddar, Crispy de 
            Cebola e Geléia de Bacon.
        </p>

        <p className="card__preco">R$ 44,90</p>
        </div>
        <div className="card__img">
        <img src={imgBurguer} alt="" />
        </div>
    </div>
  )
}

export default Card