const x1 = document.getElementById("n1");
const x2 = document.getElementById("n2");
const button = document.getElementById("button_compare");

button.addEventListener("click", () => {
    if(x1.value === "" || x2.value === ""){
        document.getElementById("resposta").innerHTML = `É obrigatório preencher os dois campos`;
        console.log("clicou com campos vazios");
    }
    else{
        document.getElementById("resposta").innerHTML = compare(x1.value, x2.value);
    }
});

function compare(num1, num2){
    const y1 = Number(num1);
    const y2 = Number(num2);

    console.log("execução da função compare");
    console.log( y1, y2);

    if( y1 === y2 ){
        return `Resultado: ${y1} igual a ${y2}`;
    }
    else{
        if(y1 > y2){
            return `Resultado: ${y1} maior que ${y2}`;
        }
        else{
            return `Resultado: ${y1} menor que ${y2}`;
        }
    }
}