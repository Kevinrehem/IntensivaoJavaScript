const imagemVisualizacao = document.querySelector("#visualizacao img");
const sizeOptions = ["41 mm", "45 mm"];
let numSelectedImg = 1;
let selectedSize = 1;
console.log(imagemVisualizacao);

function atualizarImagemSelecionada() {
    const selectedImage = document.querySelector(
        '[name="opcao-imagem"]:checked'
    );
    numSelectedImg=selectedImage.id[0];
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + numSelectedImg +".jpeg";
}

function atualizarTamanho() {
    const selectedSizeNumber = document.querySelector(
        '[name="opcao-tamanho"]:checked'
    ).id.charAt(0);

    selectedSize = selectedSizeNumber;

    // Altera o titulo da mercadoria
    document.getElementById("titulo-produto").innerText = 
    "Pulseira loop esportiva azul-inverno para caixa de " 
    + sizeOptions[selectedSize];

    if(sizeOptions[selectedSize] === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}



atualizarImagemSelecionada();
atualizarTamanho();