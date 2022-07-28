import { getSetCartela } from "./Cartela.js";
import { getSorteio } from "./Sorteio.js";

export function main(){

    let card1 = getSetCartela();
    let cart1 = card1.listar();
    console.log(cart1);
    const cartela1 = document.getElementById("cartela1");
   
    for(let i=0; i<10; i++){
        cartela1.innerHTML += `<button>${cart1[i].valor}</button>`;
    }

    let card2 = getSetCartela();
    let cart2 = card2.listar();
    const cartela2 = document.getElementById("cartela2");
   
    for(let i=0; i<10; i++){
        cartela2.innerHTML += `<button>${cart2[i].valor}</button>`;
    }

    document.getElementById("btn").disabled = true;

    const boxSorteio = document.getElementById("valor");
    const bola = getSorteio(1, 75);

    const time = setInterval(() => {
       
        const num = bola.sorteador();

        if(num != null){
            boxSorteio.innerHTML += `<span>${num}</span>`;
            console.log("ok", num);
        }
        else{
            boxSorteio.innerHTML += `<span>Fim!</span>`;
            clearInterval(time);
        }
    
    }, 5000);

    const arrButton = document.querySelectorAll("button");
    for(let i=1; i<21; i++){

        arrButton[i].dataset.id = i;
        arrButton[i].addEventListener('click', function(e) {
                        
           const id = e.target.dataset.id;
           const numero = Number(arrButton[i].textContent);

            if(bola.verificador(numero)){

                arrButton[i].style.backgroundColor = "#fff";
                arrButton[i].style.color = "#000";
                arrButton[i].disabled = true;

                if(id <= 10){

                    cart1 = card1.gabaritoMarcar(numero, cart1);
                    console.log(cart1);

                    if(card1.verifica(cart1)){
                        boxSorteio.innerHTML += `<p>Jogador da cartela 1 é o vencedor!</p>`;
                        clearInterval(time);
                    }
                       
                }
                else{

                    cart2 = card2.gabaritoMarcar(numero, cart2);
                    console.log(cart2);

                    if(card2.verifica(cart2)){
                        boxSorteio.innerHTML += `<p>Jogador da cartela 2 é o vencedor!</p>`;
                        clearInterval(time);
                    }
                }            
            }        
        });
    }
}