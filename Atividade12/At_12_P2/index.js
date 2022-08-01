const btn = document.getElementById("button");
btn.addEventListener("click", sequenciaPrimos);
const result = document.getElementById("result");

function sequenciaPrimos(){

    console.log("primos!")

    let arrPrimos = [];

    for(let num = 2; num<100000; num++){

        if(validaPrimo(num)){
            arrPrimos.push(num);
        }
        
    }
    
    console.log(arrPrimos);

    result.innerHTML = `<h3>Sequência de Primos:</h3>`;
    const tagP = document.createElement("p");

    arrPrimos.forEach(item => tagP.innerText += item + ", ");

    result.appendChild(tagP);

}

function validaPrimo(_num){

    for(let div=2; div<=_num/2; div++){
        if(_num%div === 0){
            return false;
        }
    }
    return true;
}
