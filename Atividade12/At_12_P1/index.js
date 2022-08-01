const btn = document.getElementById("button");
btn.addEventListener("click", leDado);

function leDado(){
    let num = document.querySelector("#num");

    if(valida()){
        num = num.value;
        num = BigInt(num);

        document.getElementById("valor_fatorial").innerHTML = `<p>Fatorial:</p>` + `<p>` + fatorial(num) + `</p>`;
        document.getElementById("valor_euler").innerHTML = euler(num);
    }
    else{
        
        btn.removeEventListener("click", leDado);
        btn.addEventListener("click", leDado);
    }
}

//FATORIAL
function fatorial(_numf){

    console.log("fatorial");
    let fat = _numf;

    if(_numf == 0n){
        fat = 1n;
        return fat;
    }
    
    else if(_numf == 1n){
        fat = 1n;
        return fat;
    }

    else if(_numf > 1n){

        for(i = _numf-1n; i >= 1n; i--){

            fat = fat * i;

        }
        
        return fat;
    }

}

//NÚMERO DE EULER
function euler(_num){

    let euler = 0n;
    let expo = _num;
    const x = 10n ** expo; 

    for(let i = _num; i >= 1n; i--){
          
        euler +=((x)/fatorial(i));

    }

    // console.log(euler);
    // console.log(euler/x);
    // console.log(euler%x);
    // console.log((euler/x) + 1n);
    
    let inteiro = 1n + euler/x;
    let fracional = euler%x;

    return `<p>Número de Euler:</p>` + `<p> ${inteiro},${fracional}</p>`;
}

//VALIDAÇÕES
function valida(){

    try{
        if(num.value == ""){
            throw `Preencha o campo valor`;
        }
        else if(isNaN(num.value) || num.value < 0 || parseInt(num.value) != Number(num.value)){

            throw `Valor inválido`;
        }
        return true;

    }catch (e){
       
        msg_erro(e);
        return false;
    }
}

function msg_erro(erro){
    document.getElementById("valor_fatorial").textContent = erro;
    document.getElementById("valor_euler").textContent = ``;
}

//BigInt
// console.log(BigInt(2 ** 53) + 1n);