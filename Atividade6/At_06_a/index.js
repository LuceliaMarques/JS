// 2. Substitua o setTimeout do exercício anterior, aumente o tempo para 60 segundos e adicione
// um setInterval que mostra os segundos decrementando de 1 em 1 segundo até a explosão
// caso não seja desarmada, considerando:
// a. A cada ‘tick’ de tempo decrescente, adicione um som de ‘tick’ curto para demonstrar
// que o tempo está acabando;
// b. Se o usuário clicar na bomba, utilizar o clearInterval para desarmar a bomba;
// c. Se o usuário não clicar na bomba, a bomba deve explodir (som de explosão) e a
// contagem deve parar.

let time = setTimeout(explode, 10000);
let som = new Audio(URL='./sound/explosion.wav');
let visor = document.querySelector("#result");
let text = document.querySelector("#msg");

visor.addEventListener('click',desarma);

text.textContent = `CLIQUE PARA DESARMAR!`

function explode(){
    
    visor.removeEventListener('click',desarma);
    som.play();
    visor.innerHTML = `<img src="./img/explosion.png" alt="Explosão" >`;
    text.textContent = `GAME OVER!!!`;

}

function desarma(){
    
    clearTimeout(time);
    visor.innerHTML = `<img src="./img/bomba2.png" alt="Bomba apagada" >`;
    text.textContent = `DESARMADA COM SUCESSO!`;
}