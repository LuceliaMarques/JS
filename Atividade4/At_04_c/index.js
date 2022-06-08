const num = document.querySelector("#num");

button.addEventListener("click", () => {
    if(num.value === ""){
        document.getElementById("valor").innerHTML = `Preencha o campo valor`;
        console.log("clicou com o campo vazio");
    }

    else{
        console.log(num.value);
        document.getElementById("valor").innerHTML = maior_menor(num.value);
    }
});

function maior_menor(a){

    if(isNaN(a)){
        // quando string
        console.log("NaN...")
        return `Valor inválido`
    }
    else if(parseInt(a) === Number(a)){
        console.log("número inteiro");
        return `Por favor, informe um número não inteiro`
    }
    else if(Number(a)){
        console.log("ok");
        console.log(a);

        // maior número inteiro
        const b = Math.ceil(a);
        // menor número inteiro
        const c = Math.floor(a);
        console.log(b,c);

        return `Menor número inteiro = ${c}, Maior número inteiro = ${b}`
    }
}