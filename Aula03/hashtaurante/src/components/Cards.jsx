import Card from './Card';
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";


const Cards = () => {

    const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
    const categoriaSelecionada = itensCategoria[0];

    return (
        <div className="cards">
            {
                categoriaSelecionada.map((prato) => (
                    <Card 
                        nome={prato.nome}
                        descricao={prato.descricao}
                        imagem={prato.imagem}
                        preco={prato.preco}
                    />
                    )
                )
            }
        </div>
    )
}

export default Cards