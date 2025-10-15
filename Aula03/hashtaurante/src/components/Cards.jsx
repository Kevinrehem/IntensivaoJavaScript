import Card from './Card'
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg"
import imgCasal from "../assets/pratos/casal-20.jpeg"
import imgMignon from "../assets/pratos/enroladinho-mignon.jpeg"
import imgFish from "../assets/pratos/fish-chips.jpeg"
import imgRisotto from "../assets/pratos/risoto-camarao-trufado.jpeg"

const Cards = () => {
  return (
    <div className="cards">
        <Card 
            titulo="Hamburguer de picanha"
            descricao="Hamburguer de Picanha Angus, com Queijo Cheddar, Maionese de Bacon, Abacaxi e Salada Fresca"
            preco="R$ 49,90"
            imagem={imgBurguer}
        />
        <Card 
            titulo="Enroladinho de mignon"
            descricao="Finissimas fatias de filé mignon enroladas no parmesão, uma loucura isso aqui ta?"
            preco="R$ 64,90"
            imagem={imgMignon}
        />
        <Card 
            titulo="Casal 20"
            descricao="Casal perfeito de pão de alho caseiro e uma linguiçona toscana"
            preco="R$ 29,90"
            imagem={imgCasal}
        />
        <Card 
            titulo="Fish and chips"
            descricao="Precisa explicar mesmo? É peixe e fritas"
            preco="R$ 79,90"
            imagem={imgFish}
        />
        <Card 
            titulo="Risoto de camarão trufado"
            descricao="Coisa fina, o preço tá até bão se for comparar"
            preco="R$ 72,90"
            imagem={imgRisotto}
        />
    </div>
  )
}

export default Cards