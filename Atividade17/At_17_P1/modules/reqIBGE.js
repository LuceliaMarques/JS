import { reqInmet } from "./reqInmet.js";

function requisicao(UF){
    return new Promise((resolve, reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`)
        .then((resp)=>{
            if(resp.status === 200){
                return resp.json();
            }
            return Promise.reject("ERRO na captura dos municípios!")
        })
        .then(dados => {

            let resultUF = [];

            Object.keys(dados).forEach((i) => {
               
                let arrCidades = [dados[i].municipio.id, dados[i].nome];
                resultUF.push(arrCidades);
                arrCidades = [];
        
            })
            
            resolve(resultUF);
        })
        .catch((erro)=>{
            console.log(erro);
            reject(erro);
        })
    })
}

export function reqAPIIBGE(){
    
    document.querySelector("body").style.cursor = 'wait';

    const UF = document.getElementById("estado").value;

    let x = (document.querySelector("#selectCidade")).options.length;

    for(let i = x - 1; i>=0; i--){
        (document.querySelector("#selectCidade")).remove(i);
    }

    requisicao(UF)
        .then(dados=>{

            document.querySelector("#selectCidade").innerHTML += `<option disabled selected>- Selecione -</option>`;
            
            let dadosCidade = dados;
            
            for(let i = 0; i < dadosCidade.length; i++){

                document.querySelector("#selectCidade").innerHTML += `<option value = "${dadosCidade[i][0]}">` + dadosCidade[i][1] + `</option>`;

            }
            document.querySelector("body").style.cursor = 'default';
            document.getElementById("selectCidade").addEventListener("change", reqInmet);
            
        })
        .catch((erro)=>{
            document.querySelector("#valor").innerHTML += `<p>ERRO: ${erro}</p>`;
            document.querySelector("body").style.cursor = 'default';
            console.log(erro);
        })

}