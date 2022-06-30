const arrButton = document.querySelectorAll("button");
let arrCerquilha = [];

let pontua = document.getElementById("pontos");
let msg_simbolo = document.getElementById("marcador");
let simbolo = "X";
msg_simbolo.innerHTML = "Marque o \"" + simbolo + "\"";

let countRodada; 
countRodada = 0;


// Add evento de clique e um id a cada Btn da arrButton
function addClickId(){
    for(let i=0; i<9; i++){

        arrButton[i].dataset.id = i;
    
        arrButton[i].addEventListener('click', function(e) {
                       
            const id = e.target.dataset.id;
            jogoVelha(id);
            
        });

    }
}

// Inicializa a matriz[3][3] com string -
function addArrMatriz(){

    let count = 0;

    for(let i=0; i<3; i++){
        arrCerquilha[i]=[];
        for(let j=0; j<3; j++){
            arrCerquilha[i][j] = count;
            count++;
        }
    }
}

addArrMatriz()
addClickId();

// Alterna o simbolo X e O do jogo
function alteraSimbolo(){

    if(simbolo === "X"){
        simbolo = "O";
    }
    else{
        simbolo = "X"; 
    }

}

//Armazena o simbolo na matriz de acordo com o id do button
function armazenaSimbolo(btnId){
    console.log(btnId);
    console.log(typeof btnId);
    switch (btnId){
        case "0":
            arrCerquilha[0][0] = simbolo;
            break;
        case "1":
            arrCerquilha[0][1] = simbolo;
            break;
        case "2":
            arrCerquilha[0][2] = simbolo;
            break;
        case "3":
            arrCerquilha[1][0] = simbolo;
            break;    
        case "4":
            arrCerquilha[1][1] = simbolo;
            break; 
        case "5":
            arrCerquilha[1][2] = simbolo;
            break; 
        case "6":
            arrCerquilha[2][0] = simbolo;
            break; 
        case "7":
            arrCerquilha[2][1] = simbolo;
            break;
        default:
            arrCerquilha[2][2] = simbolo; 
            break; 
    }

    console.log(arrCerquilha);
}

//Verificação de Jogo:
function verifica(){

    let ver = 0;

    //Marcou na horizontal:
    if(
        (arrCerquilha[0][0]==arrCerquilha[0][1] && arrCerquilha[0][1]==arrCerquilha[0][2] )|| 
        (arrCerquilha[1][0]==arrCerquilha[1][1] && arrCerquilha[1][1]==arrCerquilha[1][2]) ||
        (arrCerquilha[2][0]==arrCerquilha[2][1] && arrCerquilha[2][1]==arrCerquilha[2][2])
    ){
        ver = 1;
       
    }
    //Marcou na vertical:
    else if
    (
        (arrCerquilha[0][0]==arrCerquilha[1][0] && arrCerquilha[1][0]==arrCerquilha[2][0]) ||
        (arrCerquilha[0][1]==arrCerquilha[1][1] && arrCerquilha[1][1]==arrCerquilha[2][1]) ||
        (arrCerquilha[0][2]==arrCerquilha[1][2] && arrCerquilha[1][2]==arrCerquilha[2][2])
    ){
        ver = 1;
    }
    //Marcou na diagonal:
    else if
    (
        (arrCerquilha[0][0]==arrCerquilha[1][1] && arrCerquilha[1][1]==arrCerquilha[2][2]) ||
        (arrCerquilha[0][2]==arrCerquilha[1][1] && arrCerquilha[1][1]==arrCerquilha[2][0])
    ){
        ver = 1;
    }

    return ver;
}

//função principal acionada pelo clique
function jogoVelha(id){

    countRodada++;

    //add simbolo
    arrButton[id].innerText = simbolo;

    //bloqueou o button
    arrButton[id].disabled = true;
    
    //armazena o simbolo na matriz
    armazenaSimbolo(id);
    
    //verifica a existência de ganhador 
    if(verifica() === 1){
        
        pontua.innerHTML = "Fim de Jogo! \"" + simbolo + "\" Foi o campeão!";

        for(let i=0; i<9; i++){
            arrButton[i].disabled = true;
        }
    }
    else{
        
        //verifica a existência de termino de jogo
        if(countRodada == 9){
            pontua.innerHTML = "DEU VELHA!!! Fim de Jogo!";
        }
        else{
            alteraSimbolo();
            msg_simbolo.innerHTML = "Marque o \"" + simbolo + "\"";
        }
        
    }
    
}

//ID Button
//  0 1 2
//  3 4 5
//  6 7 8

//arrCerquilha[linha][coluna] DA SERQUILHA
//  00 01 02
//  10 11 12
//  20 21 22

//  (OK!) criar uma arrBtn 
//  (OK!) add evento de clique a esse arrBtn
//  (OK!) add id a cada Btn da arrBtn
//  (OK!) Ao clicar em um dado botão, implimir o simbolo nesse botão  //talvez trocar button por p ou span
//  (OK!) pegar o id desse btn e remover o clique
//  (OK!) arrCerquilha[linha][coluna] = simbolo de acordo com o id do button
//  (OK!) Switch(id){
//      case 0:
//          arrCerquilha[0][0] = simbolo;
//      case 1:
//          arrCerquilha[0][1] = simbolo;
//      case 2:
//          arrCerquilha[0][2] = simbolo;
//      
//
//          .....
//  }
//  
//  Verificação de Jogo:
//      varrer a arrSerquilha para verificar se: 
//                                                  Marcou na horizontal:
//                                                  arrCerquilha[0][0]==arrCerquilha[0][1]==arrCerquilha[0][2]
//                                                  arrCerquilha[1][0]==arrCerquilha[1][1]==arrCerquilha[1][2]
//                                                  arrCerquilha[2][0]==arrCerquilha[2][1]==arrCerquilha[2][2]
//
//                                                  Marcou na vertical:
//                                                  arrCerquilha[0][0]==arrCerquilha[1][0]==arrCerquilha[2][0]
//                                                  arrCerquilha[0][1]==arrCerquilha[1][1]==arrCerquilha[2][1]
//                                                  arrCerquilha[0][2]==arrCerquilha[1][2]==arrCerquilha[2][2]
//
//                                                  Marcou na diagonal:
//                                                  arrCerquilha[0][0]==arrCerquilha[1][1]==arrCerquilha[2][2]
//                                                  arrCerquilha[0][2]==arrCerquilha[1][1]==arrCerquilha[2][0]
//
//  Se marcou -> Fim de Jogo
//  Caso contrário, alterar o simbolo e captura o novo clique para rodar novamente