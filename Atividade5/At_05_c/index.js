// a. O usuário selecionar um menu de opções (‘HTML select’) de produtos previamente cadastrados;
// b. Clicar em um botão ‘exibir’ que exibe a imagem do produto selecionado.

const select = document.querySelector("#produto");

button.addEventListener("click", () => {

    console.log(select.value);
    document.getElementById("valor").innerHTML = extenso(select.value);

});

function extenso(op){

    let exibe = "";

    switch (op){
        case "bolo":
            exibe = "<img src='./img/bolo.png' />"
            break;
        case "doce":
            exibe = "<img src='./img/doce.png' />"
            break;
        case "geleia":
            exibe = "<img src='./img/geleia.png' />"
            break;
        case "pao":
            exibe = "<img src='./img/pao.png' />"
            break;
        case "sonho":
            exibe = "<img src='./img/sonho.png' />"
            break;
        default:
            exibe = "<img src='./img/torta.png' />"
            break;
    }

    return `${exibe}`

}