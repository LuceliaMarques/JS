const btn = document.getElementById("button");
btn.addEventListener("click", sequenciaPrimos);
const result = document.getElementById("result");

function sequenciaPrimos(){

    document.querySelector("body").style.cursor = 'wait';
    console.log("Nilakantha!");

    //para precisão de 100 casas decimais: adotar expo = 99;
    const expo = 22;
    const precisao = BigInt(2 ** expo) * 12n;
    let termo = 0n;

    for(let i=1n; i<=precisao;i++){

        const denominador = serie(i);
        const numerador = (-1n)**(i+1n);
        termo += (numerador * (10n ** 100n))/denominador;

    }

    console.log(termo);
    const piFracional = 4n * termo;
    console.log(piFracional);
    const piInteiro = 3n;

    result.innerHTML = `<p>Pi = ${piInteiro},${piFracional}</p>`;
    document.querySelector("body").style.cursor = 'default';

}

function serie(_num){

    const x = 2n*_num*(2n*_num+1n)*(2n*_num+2n);
    return x;

}
