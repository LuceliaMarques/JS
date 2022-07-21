const button = document.getElementById("button_submit");
let user = {};
let coment = document.getElementById("result");

//button
button.addEventListener("click", grava);

//grava objeto user
function grava(){

    //string name
    let name = document.getElementById("name").value;

    //date
    const date = document.getElementById("date").value;
    let dateNascMs = Date.parse(date) + (3*60*60*1000);
    let dateNasc =  new Date(dateNascMs);

    //peso
    let weight = document.getElementById("peso").value;

    //altura
    let height = document.getElementById("altura").value;

    //genero
    let gender = document.getElementById("genre").value;

    if(weight.includes(",")){
        weight = weight.replace(",",".");
    }

    if(valid(name, dateNascMs, dateNasc, date, weight, height, gender)){

        weight = parseFloat(weight);
        height = Number(height);

        user ={
            name: name,
            birthDate: dateNasc,
            weight: weight,
            height: height,
            gender: gender
        } 

        coment.innerHTML = `Dados Cadastrados com sucesso!
                            <p>Nome: ${user.name} </p>
                            <p>Data de Nascimento: ${user.birthDate}</p>
                            <p>Peso (Kg): ${user.weight}</p>
                            <p>Altura (cm): ${user.height}</p>
                            <p>Gênero: ${user.gender}</p>`;


        //Parte 3
        //JSON
        //converter objeto para JSON
        const jsonUser = JSON.stringify(user);
        console.log(jsonUser);
        console.log(typeof jsonUser);
                            
    }
    else{
        return null;
    }

};

//imprime msg de erro
function msg_erro(erro){
    coment.textContent = erro;
}

//validações
function valid(name, dateNascMs, dateNasc, date, w, h, g){

    const dateAtualMs = Date.now();

    try{
        //valida o nome
        if(name === "" || name.length <= 5){
            console.log("entrou")
            throw `Field “name” is invalid!`
        }
         //valida a data
        if(dateNascMs > dateAtualMs || date == "" || dateNasc == `Invalid Date`){
            throw `Field “birthDate” is invalid!`
        }
         //valida o peso
        if(isNaN(w) || w <= 0 || w == ""){
            throw `Field “weight” is invalid!`
        }
         //valida a altura
        if(isNaN(h) || h <= 0 || h == "" || (parseInt(h) != Number(h))){
            throw `Field “height” is invalid!`
        }
         //valida o genero
        if(g === ""){
            throw `Field “gender” is invalid!`
        }
        
        return true;

     }
    catch (e){
        msg_erro(e);
        return false;
    }
}