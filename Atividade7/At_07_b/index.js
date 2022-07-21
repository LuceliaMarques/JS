// 2. Crie uma página web que contenha um formulário que contenha um campo do tipo CEP (input type text), considerando:
// a. Capturar o evento de input para não permitir ao usuário a inserção de um caractere que não seja numérico;
// b. Ao digitar o CEP, capturar o evento de keyup para poder preencher o campo até o limite de tamanho de um CEP não permitindo mais números 
// do que o permitido e adicionando, se necessário o ‘hífen’ natural de um CEP, isto é, a medida que o usuário
// digita um número, o campo de CEP deve conter o valor do CEP (incluindo o hífen).
// c. Se o usuário apertar a tecla ‘backspace’ (keydown) ele deve apagar o último número inserido.

document.getElementById("button").addEventListener("click", validaCep);

//tentativa 2
document.querySelector("input").addEventListener("keyup", function(event) {

    let valor = document.getElementById("cep").value;
    console.log(event);

    console.log(event.key.length);

    if(event.key >= 0 && event.key <= 9){
        //não faz nada
        console.log("É um número!");
    }
    else if(event.key.length === 1 || event.key === ' '){
        console.log("NÃO é um número!");

        //tamanho da string
        const num = valor.length;

        //ultimo caracter digitado
        const novo_valor = valor.slice(num-1);

        //retira o ultimo caracter digitado e acrescenta vazio ""
        valor = valor.replace(novo_valor, "");

    }

    if(valor.length == 5 && event.key !== 'Backspace'){
        valor += "-";
    }

    document.querySelector("input").value = valor;

});

function validaCep(){

    let coment = document.getElementById("valor");
    let cep = document.getElementById("cep").value;

    if(cep.includes("-")){
        cep = cep.replace("-","");
    }

    if(cep.length != 8 || isNaN(cep) || cep == ""){
        coment.textContent = `CEP inválido!`;
    }
        
}