// 2. Substitua o setTimeout do exercício anterior, aumente o tempo para 60 segundos e adicione
// um setInterval que mostra os segundos decrementando de 1 em 1 segundo até a explosão
// caso não seja desarmada, considerando:
// a. A cada ‘tick’ de tempo decrescente, adicione um som de ‘tick’ curto para demonstrar
// que o tempo está acabando;
// b. Se o usuário clicar na bomba, utilizar o clearInterval para desarmar a bomba;
// c. Se o usuário não clicar na bomba, a bomba deve explodir (som de explosão) e a
// contagem deve parar.

let som_tick = new Audio(URL='./sound/tick.wav');
let som_explode = new Audio(URL='./sound/explosion.wav');

let visor = document.querySelector("#result");
let text = document.querySelector("#msg");
let cronos = document.querySelector("#cont_time");

let time = 60;
const tempo = setInterval(cronometro, 1000);

visor.addEventListener('click',desarma);
text.textContent = `CLIQUE PARA DESARMAR!`

function explode(){
    
    visor.removeEventListener('click',desarma);
    som_explode.play();
    som_explode.volume = 0.2;
    visor.innerHTML = `<img src="./img/explosion.png" alt="Explosão" >`;
    text.textContent = `GAME OVER!!!`;

}

function desarma(){

    clearInterval(tempo);
    visor.innerHTML = `<img src="./img/bomba2.png" alt="Bomba apagada" >`;
    text.textContent = `DESARMADA COM SUCESSO!`;
}

function cronometro(){

    time--;
    cronos.textContent = `${time}s`;

    som_tick.play();
    som_tick.volume = 0.2;

    if(time === 0){
        clearInterval(tempo);
        explode();
    }

}