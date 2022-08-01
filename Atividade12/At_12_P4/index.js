let arrCartas = [];
let arrNaipes = ['Copas','Paus','Ouro','Espada'];
// let arrValores = [2,3,4,5,6,7,8,9,'10','J','Q','K','A'];
let arrValores = [2,3,4,5,6,7,8,9,10,11,12,13,14];
const cards = document.getElementById("cards");
const pontuacao = document.getElementById("pontos");
const btn = document.getElementById("button");
let arrJogo = [];

//gera baralho
function concatena(){

    for(let j=0; j<4; j++){
        for(i=0; i<13 ; i++){

            arrCartas.push(arrValores[i]+ "_" +arrNaipes[j]);
            
        }
    }

}

// embaralhar de forma rândomica
let arrEmbaralhado = [];
function embaralhaCartas(){
    let x_aleatorio;

    for(let i=0; i<52; i++){

        x_aleatorio = Math.floor(Math.random() * arrCartas.length);
        console.log(x_aleatorio);

        arrEmbaralhado.push(arrCartas[x_aleatorio]);

        arrCartas.splice(x_aleatorio, 1);

    }

}

concatena();
console.log(arrCartas);
embaralhaCartas();
console.log(arrEmbaralhado);

btn.addEventListener("click", retiraCartas);

// LANÇA CARTAS
function retiraCartas(){

    cards.innerHTML = ``;

    if(arrEmbaralhado.length === 2){
        pontuacao.innerHTML = `<p>FIM DE JOGO!</p>`
    }

    else{

        for(let i=0; i<5; i++){

            arrJogo.push(arrEmbaralhado[0]);
            arrEmbaralhado.splice(0, 1);
            
            cards.innerHTML += `<img src="./img/`+arrJogo[i]+`.svg">`;
    
        }
        
        console.log(arrJogo);
        console.log(arrEmbaralhado);
        pontuacao.innerHTML = `<p>` + countPontos(arrJogo) + `</p>`;
        arrJogo = [];
    }
    
}

//PONTUAÇÃO
function countPontos(){

    console.log("Pontos");

    let arrCardRetirados=[];
    let arrCardNum=[];
    let arrCardNaipe=[];

    //Separa numeros e naipes
    for(let i=0; i<5; i++){
        arrCardRetirados.push(arrJogo[i].split("_"));
    }

    //Separa numeros e naipes em diferentes arrays
    for(let a=0; a<5; a++){

        arrCardNum.push(Number(arrCardRetirados[a][0]));
        arrCardNaipe.push(arrCardRetirados[a][1]);

    }
    
    //ordena a array de números
    arrCardNum.sort((a, b) => {

        return a - b;
        
    });

    let result = "NADA";
    let count=0;
  
    //Contador para as verificações:
    for(let z=0; z<4; z++){
       
        if(arrCardNum[z] === arrCardNum[z+1]){
            count++;
        }
    }

    if(count === 3){

        if(arrCardNum[0] != arrCardNum[1] || arrCardNum[4] != arrCardNum[3]){
            result = "QUADRA";
        }
        else{
            result = "FUL HOUSE";
        }      
    }
    else if(count === 2){
        if((arrCardNum[0] == arrCardNum[1] && arrCardNum[1] == arrCardNum[2]) || 
            (arrCardNum[1] == arrCardNum[2] && arrCardNum[2] == arrCardNum[3]) || 
            (arrCardNum[2] == arrCardNum[3] && arrCardNum[3] == arrCardNum[4]))
        {
            result = "TRINCA";
        }
        else{
            result = "DOIS PARES";
        } 
    }
    else if(count === 1){

        result = "PAR";
    }
    else if(count === 0){

        let countSeq=0;
        let countNaipe=0;

        for(let y=0; y<4; y++){
            
            if(arrCardNum[y]+1 == arrCardNum[y+1]){
                countSeq++;
            }

            if(arrCardNaipe[y] == arrCardNaipe[y+1]){
                countNaipe++;
            }            
        }

        if(countSeq == 4){
            
            if(countNaipe == 4){
                result = "STRAIGHT FLUSH";
            }
            else{
                result = "SEQUÊNCIA"; 
            }
        }
    }

    console.log(arrCardRetirados);
    console.log(arrCardNum);
    console.log(arrCardNaipe);

    return result;

}

//4 números iguais 
//a a a a p => count = 3
//p a a a a => count = 3

//3 números iguais
// a a a p x => count = 2
// p a a a x => count = 2
// p x a a a => count = 2
// p p a a a => count = 3

//2 números iguais
// p p a s d => count = 1
// a p p s d => count = 1
// a s p p d => count = 1
// a s d p p => count = 1
// a a d p p => count = 2
// d a a p p => count = 2
// a a p p d => count = 2

//nenhum igual
// a s d e f => count = 0
//testa sequencia e naipe

//RESUMO
//count = 3:
//4 iguais || 1 par + 3 iguais

//count = 2
//1 trio || 2 pares

//count = 1
//1 par