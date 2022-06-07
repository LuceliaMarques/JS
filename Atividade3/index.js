const num1 = document.getElementById("operando1");
const num2 = document.getElementById("operando2");
const operator = document.getElementById("operador");
const button = document.getElementById("button_calculation");

button.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        document.getElementById("result").innerHTML = `Preencha os dois campos`;
        console.log("clicou com os campos vazios");
    }
    else{
        document.getElementById("result").innerHTML = operation(num1.value, num2.value, operator.value);
    }
});

function operation(num1, num2, operator){
    const a = Number(num1);
    const b = Number(num2);
    let x = 0;
    
    console.log(a, b);
    console.log(x);
    console.log("Resultado:");
    if(operator === "soma"){
        x = a + b; 
    }
    if(operator === "subtracao"){
        x = a - b;
    }
    if(operator === "multiplicacao"){
        x = a * b;
    }
    if(operator === "divisao"){
        x = a/b;
    }

    console.log(x);
    return `${x}`;
}