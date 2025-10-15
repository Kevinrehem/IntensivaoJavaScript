import Card from './Card'
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg"

const Cards = () => {
  return (
    <div className="cards">
        <Card 
            titulo="Hamburguer de picanha"
            descricao="Hamburguer de Picanha Angus, com Queijo Cheddar, Maionese de Bacon, Abacaxi e Salada Fresca"
            preco="R$ 49,90"
            imagem={imgBurguer}
        />
    </div>
  )
}

export default Cards