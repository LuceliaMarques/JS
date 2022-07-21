
let captura = (deck_id) => new Promise((resolve, reject) => {

    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then((resp) => {
            if (resp.status === 200) {
                resolve(resp.json());
            }
        })
        .catch((erro) => {

            console.log(erro);
            reject(erro);
        });

})

async function main(id){

    // console.log("entrou");
    // console.log("id", id);

    try{
        document.querySelector("#valor").innerHTML = ``;
        for(let j = 0; j < 5; j++){

            let dadosCards = await captura(id);
    
            if(dadosCards.success){

                // console.log(dadosCards);
                // console.log(dadosCards.cards[0]);

                if(dadosCards.remaining === 0){
                    
                    document.querySelector("#valor").innerHTML += `<p>Fim do baralho!</p>`;

                }
                else{
                    document.querySelector("#valor").innerHTML += `<img src="${dadosCards.cards[0].image}" />`;    
                }
            }
        }
        document.getElementById("btn").style.cursor = 'pointer';
        document.querySelector("body").style.cursor = 'default';
        document.getElementById("btn").disabled = false;

    }catch(err){
        document.querySelector("#valor").innerHTML += `<p>ERRO: ${err}</p>`;
        console.log(`ERRO: ${err}`);
        document.querySelector("body").style.cursor = 'default';
        document.getElementById("btn").style.cursor = 'pointer';
        document.getElementById("btn").disabled = false;
    }

}

export function reqCard(id){

    // console.log("reqCards");
    document.querySelector("body").style.cursor = 'wait';
    document.getElementById("btn").style.cursor = 'wait';
    document.getElementById("btn").disabled = true;
    main(id);

}