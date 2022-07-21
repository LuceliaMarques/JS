const app = document.getElementById("app");
let coment = document.getElementById("valor");

//Requisição do CEP informado a API CEP
export function requisicaoCep(cep){

    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then((resp) => {
            if(resp.status === 200){
                const dadoscep = resp.json();
                return dadoscep;
            };
        })
        .then((dadoscep) => {
            console.log(dadoscep);
            if(dadoscep !== undefined){
                exibeDados(dadoscep);
                exibeMap(dadoscep.lat, dadoscep.lng);
            }
        })
        .catch((erro) => {
            console.log(erro);
        });

}

//Exibir os  dados resultantes da consulta a API CEP 
function exibeDados(dados){

    console.log(dados);

    app.innerHTML += `<p>Endereço: ${dados.address}</p>
                    <p>Bairro: ${dados.district}</p>
                    <p>Cidade: ${dados.city}</p>
                    <p>Estado: ${dados.state}</p>
                    <p>Latitude: ${dados.lat}</p>
                    <p>Longitude: ${dados.lng}</p>
                    <button id="mapCep">Exibir mapa</button>`

}

//Exibir o iframe com o mapa
function exibeMap(lat, lng){

    const btnMap = document.getElementById("mapCep");
    btnMap.addEventListener("click", function(){
        
        console.log("clicou");
        console.log(lat, lng);
        app.innerHTML += `<iframe src="//maps.google.com/maps?q=${lat},${lng}&z=15&output=embed"></iframe>`;
    });

}