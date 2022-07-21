const button = document.getElementById("button_submit");
let user = {};

button.addEventListener("click", grava);

function grava(){

    const date = document.getElementById("date").value;
    let dateNascMs = Date.parse(date) + (3*60*60*1000);
    let dateNasc =  new Date(dateNascMs);

    let weight = document.getElementById("peso").value;
    console.log(weight);

    if(weight.includes(",")){
        weight = weight.replace(",",".");
    }

    let height = document.getElementById("altura").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("genre").value;

    if(validaDate(dateNascMs, dateNasc, date) && validaWeight(weight) && validaheight(height) && validaStr(name, gender)){
       
        weight = parseFloat(weight);
        height = Number(height);

        user ={
            name: name,
            birthDate: dateNasc,
            weight: weight,
            height: height,
            gender: gender
        } 

        console.log(user);

        document.getElementById("result").textContent = `Dados Cadastrados com sucesso!`;
    }

};

//validação de campo vazio
function validaStr(n, g){

    if(n == "" || g == ""){

        document.getElementById("result").textContent = `Campos Vazios`;
        button.removeEventListener("click", grava);
        button.addEventListener("click", grava);
    }
    else{
        return true;
    }
    
}

//Validação da data
function validaDate(dateNascMs, dateNasc, date){

    const dateAtualMs = Date.now();

    if(dateNascMs > dateAtualMs || date == "" || dateNasc == `Invalid Date`){

        document.getElementById("result").textContent = `Data Inválida`;
        button.removeEventListener("click", grava);
        button.addEventListener("click", grava);
    }
    else{
        return true;
    }
    
}

//validação do peso
function validaWeight(weight){

    if(isNaN(weight) || weight <= 0 || weight == ""){

        document.getElementById("result").textContent = `Peso Inválido`;
        button.removeEventListener("click", grava);
        button.addEventListener("click", grava);
    }
    else{
        return true;
    }
}

//validação da altura
function validaheight(h){

    if(isNaN(h) || h <= 0 || h == "" || (parseInt(h) != Number(h))){

        document.getElementById("result").textContent = `Altura Inválida`;
        button.removeEventListener("click", grava);
        button.addEventListener("click", grava);
    }
    else{
        return true;
    }
}