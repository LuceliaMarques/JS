import { reqCard } from "./reqCard.js";

const captura = new Promise((resolve, reject) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then((resp)=>{
        if(resp.status === 200){
            resolve(resp.json());
        }
    })
    .catch((erro)=>{
        console.log(erro);
        reject(erro);
    })
})

async function main(){
    try{

        document.querySelector("body").style.cursor = 'wait';

        let dadosDeck = await captura;
        // console.log("try: ", dadosDeck);

        let arrDeck = [];
        
        arrDeck[0] = dadosDeck.success;
        arrDeck[1] = dadosDeck.deck_id;
        arrDeck[2] = dadosDeck.shuffled;
        arrDeck[3] = dadosDeck.remaining;

        // console.log(arrDeck);
 
        document.querySelector("body").style.cursor = 'default';

        if(arrDeck[0] === true && arrDeck[2] === true){
            reqCard(arrDeck[1]);
        }

    }catch(err){
        document.querySelector("#valor").innerHTML += `<p>ERRO: ${err}</p>`;
        document.querySelector("body").style.cursor = 'default';
        console.log(err);
    }
}

export function reqChave(){

    // console.log("entrou");
    main();

}