const imagemVisualizacao = document.querySelector("#visualizacao img");
let numSelectedImg = 1;
console.log(imagemVisualizacao)

function atualizarImagemSelecionada() {
    const selectedImage = document.querySelector(
        '[name="opcao-imagem"]:checked'
    )
    numSelectedImg=selectedImage.id[0]
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + numSelectedImg +".jpeg";
}

atualizarImagemSelecionada();