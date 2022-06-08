const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

button.addEventListener("click", () => {
    if(peso.value === "" || altura.value === ""){
        document.getElementById("resposta").innerHTML = `É obrigatório preencher os dois campos`;
        console.log("clicou com campos vazios");
    }

    else{
        document.getElementById("imc").innerHTML = imc(peso.value, altura.value);
        console.log(peso.value, altura.value);
    }
});

function imc(p, h){
    
    if(p.includes(",")){
        p = p.replace(",",".");
    }
    if(h.includes(",")){
        h = h.replace(",",".");
    }

    if(isNaN(p) || isNaN(h)){
        console.log("NaN...")
        return `Valores inválidos`
    }
    else{
        let imc = p/(h*h);
        console.log(imc);
        // trabalhar com 2 casas decimais
        imc = Number(imc.toFixed(1));
        console.log(imc);
        // Classificação:
        if(imc<18.5){
            return `IMC = ${imc} - Abaixo do peso`
        }
        else if(imc>=18.5 && imc<=24.9){
            return `IMC = ${imc} - Peso normal`
        }
        else if(imc>=25 && imc<=29,9){
            return `IMC = ${imc} - Sobrepeso`
        }
        else if(imc >= 30){
            return `IMC = ${imc} - Obesidade`
        }
    }
}