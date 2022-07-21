// arrayResposta = [
//     [data, DiaDaSemana, resumo, tem_max, temp_min, icone, periodo], -> length = 7
//     [data, DiaDaSemana, resumo, tem_max, temp_min, icone], -> length = 6
// ]

function captura(geocode){

    return new Promise((resolve, reject) => {

        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
            .then((resp)=>{
                if(resp.status === 200){
                    return resp.json();
                }
                return Promise.reject("ERRO na captura dos dados!")
            })
            .then(dados=>{
                
                console.log(dados[geocode]);
                let result = [];
                let cont = 0;
                
                Object.keys(dados[geocode]).forEach((i) => {

                    if(cont < 2){
                        Object.keys(dados[geocode][i]).forEach((item) => {
                            let oneDay = [i, dados[geocode][i][item][`dia_semana`], dados[geocode][i][item][`resumo`], dados[geocode][i][item][`temp_max`], dados[geocode][i][item][`temp_min`], dados[geocode][i][item][`icone`], item];
                            result.push(oneDay);
                            oneDay = [];
                        })
                        
                    }
                    else{
                        let threeDay = [i, dados[geocode][i][`dia_semana`], dados[geocode][i][`resumo`], dados[geocode][i][`temp_max`], dados[geocode][i][`temp_min`], dados[geocode][i][`icone`]];
                        result.push(threeDay);
                        threeDay = [];
                    }
                
                    cont++;
                });
            
                resolve(result);
            })
            .catch((erro)=>{
                console.log(erro);
                reject(erro);
            })

    });
}

export function reqInmet(){

    document.querySelector("body").style.cursor = 'wait';
    const geocode = document.getElementById("selectCidade").value;
    console.log(geocode);

    captura(geocode)
        .then(res => { 

            document.querySelector("#valor").innerHTML = ``;
            document.querySelector("#valor").innerHTML += `<p>PREVISÃO DO TEMPO</p>`;

            let dadosTemp = res;           
            for(let i=0; i < dadosTemp.length; i++){

                document.querySelector("#valor").innerHTML += `<div class = "box"></div>`

                if((dadosTemp[i]).length > 6){
                    
                    document.querySelector("#valor").innerHTML += `<p></ br>Período: ${dadosTemp[i][6]} </p>`;
                }

                document.querySelector("#valor").innerHTML += ` <p></ br>Data: ${dadosTemp[i][0]} </p>
                                                                <p>Dia da Semana: ${dadosTemp[i][1]}</p>
                                                                <p>Resumo: ${dadosTemp[i][2]}  </p>
                                                                <p>Temperatura Máxima: ${dadosTemp[i][3]}</p>
                                                                <p>Temperatura Mínima:  ${dadosTemp[i][4]}</p>
                                                                <p><img src="${dadosTemp[i][5]}" /></br></br>`;             

            }
            
            document.querySelector("body").style.cursor = 'default';
        })
        .catch(err => {

            document.querySelector("#valor").innerHTML += `<p>ERRO: ${err}</p>`;
            console.log(`ERRO: ${err}`);
            document.querySelector("body").style.cursor = 'default';
        });     
}