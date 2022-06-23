const num1 = document.getElementById("operando1");
const num2 = document.getElementById("operando2");
const operator = document.getElementById("operador");
const button = document.getElementById("button_calculation");
let r_expo = 1;
let r = 0; 
let i_expo = 0;
let i = 0;
let resto = 0;

button.addEventListener("click", calcula);

function calcula(){
    
    if(valida()){
        document.getElementById("result").innerHTML = operation(num1.value, num2.value, operator.value);
    }
    else{
        button.removeEventListener("click", calcula);
        button.addEventListener("click", calcula);
    }

}

// ------------------- validações
function valida(){

    console.log("validação");

    try{
        if(isNaN(num1.value) || isNaN(num2.value)){
            throw `Valores inválidos`;
        }
        if(num1.value === "" || num2.value === "" ){
            throw `Preencha os dois campos!`;
        }
        else if((operator.value === "soma") && (num1.value < 0 || num2.value < 0 || parseInt(num1.value) != Number(num1.value) || parseInt(num2.value) != Number(num2.value)))
        {
            throw `Impossible to sum ${num1.value} + ${num2.value}`;
        }
        else if((operator.value === "subtracao") && (num1.value < num2.value || num1.value < 0 || num2.value < 0 || parseInt(num1.value) != Number(num1.value) || parseInt(num2.value) != Number(num2.value)))
        {
            throw `Impossible to subtract ${num1.value} - ${num2.value}`;
        }
        else if((operator.value === "multiplicacao") && ( num1.value < 0 || num2.value < 0 || parseInt(num1.value) != Number(num1.value) || parseInt(num2.value) != Number(num2.value)))
        {
            throw `Impossible to multiply ${num1.value} * ${num2.value}`;
        }
        else if((operator.value === "divisao") && (num2.value == 0 || num1.value < 0 || num2.value < 0 || parseInt(num1.value) != Number(num1.value) || parseInt(num2.value) != Number(num2.value)))
        {
            throw `Impossible to divice ${num1.value} / ${num2.value}`;
        }
        else if((operator.value === "exponen") && (num1.value < 0 || num2.value < 0 || parseInt(num1.value) != Number(num1.value) || parseInt(num2.value) != Number(num2.value)))
        {
            throw `Impossible to exponential ${num1.value} ^ ${num2.value}`;
        }
        return true;

    }catch (e){
       
        msg_erro(e);
        return false;
    }
}

function msg_erro(erro){
    document.getElementById("result").textContent = erro;
}

// ---------------------- operações
function operation(num1, num2, operator){
    const a = Number(num1);
    const b = Number(num2);

    console.log(a, b);

    let result = "";
    console.log(result);

    if(operator === "soma"){
        result = soma(a, b);
    }
    if(operator === "subtracao"){
        result = subtracao(a, b);
        r=0;
        i=0;
    }
    if(operator === "multiplicacao"){
        result = multiplicacao(a, b);
        r=0;
        i=0;
    }
    if(operator === "divisao"){
        result = divisao(a, b);
        r=0;
        i=0;
    }
    if(operator === "exponen"){
        result = expo(a, b);
        i=0;
        r=0;
        r_expo=1;
        i_expo=0;
    }

    console.log(result);
    return `${result}`;
}

function soma(x, y){

    return x+y;

}

function subtracao(x, y){

    if(x === y){
        return 0;
    }

    if(r === x){
        return i;
    } 

    i++;
    r = soma(y, i);
    // console.log("r: ", r);
    // console.log("i: ", i);
    return subtracao(x, y); 
}

function multiplicacao(x, y){

    if(i === x){
        return r;
    }
    
    i++;
    r = soma(r, y);
    return multiplicacao(x, y);

}

function divisao(x, y){
    
    if(r < x){
        i++;
        r = soma(r, y);
        return divisao(x,y);
    }
    if(r > x){
        i--;
        return i;
    }
    return i;
}

function expo(x, y){
    
    if(y == 0){
        r_expo = 1;
        return r_expo;
    }

    if(i_expo < y){
        i_expo++;
        r_expo = multiplicacao(r_expo, x);
        return expo(x, y);
    }
    
    return r_expo; 

}