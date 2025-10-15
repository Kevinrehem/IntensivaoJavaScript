import Card from './Card';
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";
import Categorias from './Categorias';


const Cards = ({numCategoriaSelecionada}) => {

    const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
    const categoriaSelecionada = itensCategoria[numCategoriaSelecionada];

    return (
        <div className="cards">
            {
                categoriaSelecionada.map((item) => (
                    <Card 
                        nome={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        preco={item.preco}
                    />
                    )
                )
            }
        </div>
    )
}

export default Cards