// 3. Crie uma página web que contenha um alarme no qual o usuário define os minutos (máximo
//     59 minutos) e segundos e clica em um botão que inicia a contagem regressiva, considerando:
// a. Utilizar o HTML select para seleção dos minutos e segundos;
// b. Criar um botão que inicia a contagem regressiva que ao ser clicado este se torna um botão de desarmar alarme;
// c. O contador regressivo mostra o tempo a cada segundo;
// d. Quando faltar menos de 5% do tempo inicial mudar a interface de contagem para informar que o tempo está acabando;
// e. Ao término da contagem, o tempo deve parar de ser decrementado e deve-se disparar um alarme (som de alarme) informando que o tempo acabou;
// f. Se o usuário clicar no botão de desarmar alarme, a contagem deve ser parada e, caso o alarme esteja tocando, o som deve parar, transformando o botão para que possa armar o alarme novamente.


// ------->>>>>>> Prenchimento das 60 opções do select
for(let a = 0; a < 60; a++){
    document.querySelector("#minutos").innerHTML += `<option value = "${a}">` + a + `</option>`;
    document.querySelector("#segundos").innerHTML += `<option value = "${a}">` + a + `</option>`;
}

let som_tick = new Audio(URL='./sound/alarm-beep.mp3');
let display = document.getElementById("timer");
let minutos;
let segundos;
let time;
let cronos;
let estado;
let time_percen_cinco;
let time_atual;

const butt = document.querySelector("#button");
butt.addEventListener("click", play);

function play(){

    // Capturar o estado do botão: iniciar/parar
    estado = document.getElementById("button").innerText;
    console.log(estado);

    if(estado === "Iniciar"){
             
        minutos = document.getElementById("minutos").value;
        segundos = document.getElementById("segundos").value;
        minutos = Number(minutos);
        segundos = Number(segundos);

        // Cálcula os tempos de execução das função de acordo com o que foi passado pelo usuário
        time = ((minutos * 60) + segundos) * 1000;
        time_percen_cinco = time * 0.05;
        console.log("time", time);
        console.log("time 5", time_percen_cinco);
        
        //Chama a função cronometro para a primeira execução
        cronometro();
        //Chama a função cronometro para a cada 1s após iniciada a contagem
        cronos = setInterval(cronometro, 1000);

        // Muda o texto do botão:
        document.querySelector("button").innerHTML = "Parar";
    }

    else{
        // Muda o texto do botão
        document.querySelector("button").innerHTML = "Iniciar";
        // Cancela o alarme
        som_tick.pause();
        // Cancela a execução da função cronometro
        clearInterval(cronos); 
    }
}

function cronometro(){
    
    // Cálcula o tempo a cada interação
    time_atual = ((minutos * 60) + segundos) * 1000;
    console.log("time atual", time_atual);
    console.log("time 5", time_percen_cinco);

    //Compara os tempos para a mudança de cor do texto
    if(time_atual < time_percen_cinco){
        document.getElementById("timer").style.color = "red";
        display.innerHTML = (minutos < 10 ? `0` + minutos : minutos) + `:` + (segundos < 10 ? `0` + segundos : segundos);
    }
    else{
        document.getElementById("timer").style.color = "green";
        display.innerHTML = (minutos < 10 ? `0` + minutos : minutos) + `:` + (segundos < 10 ? `0` + segundos : segundos);
    }

    //decrementa os segundos a cada execução da função
    segundos--;

    //condição para diminuir a qtd de minutos
    if(segundos === -1){
        minutos--;
        segundos = 59;
    }
    //condição na qual o cronometro está zerado e então, é disparado o alarme 
    if(segundos === 59 && minutos === -1){
        clearInterval(cronos);
        som_tick.play();
        som_tick.volume = 0.1;
    }
}