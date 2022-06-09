const num = document.querySelector("#num");

button.addEventListener("click", () => {
    if(num.value === ""){
        document.getElementById("valor").innerHTML = `Preencha o campo valor`;
        console.log("clicou com o campo vazio");
    }

    else{
        console.log(num.value);
        document.getElementById("valor").innerHTML = extenso(num.value);
    }
});

function extenso(a){

    console.log(typeof a);
    a = Number(a);
    let extenso = "";

    switch (a){
        case 0:
            extenso="Zero";
            break;
        case 1:
            extenso="Um";
            break;
        case 2: 
            extenso="Dois";
            break;
        case 3:
            extenso="Três";
            break;
        case 4:
            extenso="Quatro";
            break;
        case 5:
            extenso="Cinco";
            break;
        case 6:
            extenso="Seis";
            break;
        case 7:
            extenso="Sete";
            break;
        case 8:
            extenso="Oito";
            break;
        case 9:
            extenso="Nove";
            break;
        case 10:
            extenso="Dez";
            break;
        default:
            extenso="Valor indefinido, tente novamente!"
            break;
    }

    return `${extenso}`

}