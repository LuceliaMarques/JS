//funções importadas
import {home} from "./modulos/home.js";
import {requisicaoCep} from "./modulos/reqcep.js";

//renderização da página principal
const app=document.querySelector("#app");
app.innerHTML = home();

//box da home para inserção de comentários
let coment = document.getElementById("valor");

//validação do CEP com Keyup
document.querySelector("input").addEventListener("keyup", function(event) {

    let valor = document.getElementById("CEP").value;

    if(event.key >= 0 && event.key <= 9){
        //não fazer nada
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

    //input preenchido
    if(valor.length == 9){
        console.log("entrou");

        //valida novamente o CEP preenchido para casos de colar no input o CEP
        if(validaCep()){

            //Validação OK -> apresenta o butão para pesquisa
            coment.innerHTML = `<button id="btnCEP">Procurar</button>`;

            const cepProcurado = document.getElementById("CEP");
            
            const btnCEP = document.getElementById("btnCEP");
            btnCEP.addEventListener("click", function(){
                //chama a função requisição
                requisicaoCep(cepProcurado.value);

            });
        }
    }
});

//validação final do cep
function validaCep(){

    let cep = document.getElementById("CEP").value;

    if(cep.includes("-")){
        cep = cep.replace("-","");
    }

    if(cep.length != 8 || isNaN(cep) || cep == ""){
        coment.textContent = `CEP inválido!`;
        return false
    }

    return true
        
}

