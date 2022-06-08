const max = document.querySelector("#num_max");
const min = document.querySelector("#num_min");

button.addEventListener("click", () => {
    if(max.value === "" || min.value === ""){
        document.getElementById("valor").innerHTML = `É obrigatório preencher os dois campos`;
        console.log("clicou com campos vazios");
    }

    else{
        console.log(min.value, max.value);
        document.getElementById("valor").innerHTML = aleatorio(min.value, max.value);
    }
});

function aleatorio(a, b){

    if(isNaN(a) || isNaN(b)){
        console.log("NaN...")
        return `Valores inválidos`
    }
    // parseint só retorna a parte inteira do número, já o number retorna o número completo (tanto o int como float)
    else if(parseInt(a) != Number(a) || parseInt(b) != Number(b)){
        console.log("número(s) não inteiro(s)");
        return `Números não inteiros`
    }
    else if(a === b){
        console.log("valores iguais");
        return `valores iguais, altere um dos valores`
    }
    else if(Number(a)>Number(b)){
        console.log(a,b);
        console.log("min maior que o máx");
        return `Troque a ordem dos valores`
    }
    else if(Number(a)<Number(b)){
        a = Number(a);
        b = Number(b);
        const c = parseInt((Math.random() * (b - a))+a);
        console.log("ok");
        console.log(c);
        return `${c}`
    }
}