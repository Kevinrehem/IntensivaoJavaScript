

const Card = ({nome, descricao, preco, imagem}) => {
  return (
    <div className="card">
        <div className="card__textos">
            <h2 className="card__titulo">{nome}</h2>
            <p>{descricao}</p>
            <p className="card__preco">{preco}</p>
        </div>
        <div className="card__img">
            <img src={imagem} alt="" />
        </div>
    </div>
  )
}

export default Card