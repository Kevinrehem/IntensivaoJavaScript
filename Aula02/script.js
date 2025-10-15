const imagemVisualizacao = document.querySelector("#visualizacao img");
const sizeOptions = ["41 mm", "45 mm"];
const colorOptions = ["Verde-cipreste","Azul-inverno","Meia-noite","Estelar","Rosa claro"];
let numSelectedImg = 1;
let selectedSize = 1;
let selectedColor = 1;
console.log(imagemVisualizacao);

function atualizarImagemSelecionada() {
    const selectedImage = document.querySelector(
        '[name="opcao-imagem"]:checked'
    );
    numSelectedImg=selectedImage.id[0];
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" 
    + colorOptions[selectedColor].toLowerCase().replace(" ", "-") 
    + "/imagem-" + numSelectedImg + ".jpeg";
}

function atualizarTamanho() {
    const selectedSizeNumber = document.querySelector(
        '[name="opcao-tamanho"]:checked'
    ).id.charAt(0);

    selectedSize = selectedSizeNumber;

    // Altera o titulo da mercadoria
    document.getElementById("titulo-produto").innerText = 
    "Pulseira loop esportiva" 
    + colorOptions[selectedColor].toLowerCase() 
    + "para caixa de " + sizeOptions[selectedSize];

    if(sizeOptions[selectedSize] === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}


function atualizarCorSelecionada() {
    const selectedColorNumber = document.querySelector(
        '[name="opcao-cor"]:checked'
    ).id.charAt(0);

    selectedColor = selectedColorNumber;

    //Atualiza texto do nome do produto
    document.getElementById("titulo-produto").innerText =
    "Pulseira loop esportiva " 
    + colorOptions[selectedColor].toLowerCase() 
    + " para caixa de " + sizeOptions[selectedSize];

    //Atualiza texto do nome-cor-selecionada
    document.getElementById("nome-cor-selecionada").innerText =
    "Cor - " + colorOptions[selectedColor];

    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" 
    + colorOptions[selectedColor].toLowerCase().replace(" ", "-") 
    + "/imagem-" + numSelectedImg + ".jpeg";

    console.log(colorOptions[selectedColor]);
}

atualizarImagemSelecionada();
atualizarTamanho();
atualizarCor();