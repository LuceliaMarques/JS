const body = document.getElementById("body");
let start_date = document.getElementById("date1");
let end_date = document.getElementById("date2");
const moeda = document.getElementById("moeda");
const btn = document.getElementById("button");
const app = document.getElementById("app");

btn.addEventListener("click", function(){

    if(valida()){
        body.style.cursor = 'wait';
        let op = [];
        op = (moeda.value).split("-");

        start_date = start_date.value;
        end_date = end_date.value;

        let date1 = new Date(start_date);
        let date2 = new Date(end_date);
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        
        const oneDay = (24*60*60*1000);

        for(let i=0; i<2; i++){
            if(start_date.includes("-")){
                start_date = start_date.replace("-","");
            }
        }

        let ano;
        let month;
        let day;

        day = date2.getUTCDate();
        if(day < `10`){
            day = `0`+day;
        }

        month = date2.getUTCMonth() + 1;
        if(month < `10`){
            month = `0`+month;
        }

        ano = date2.getUTCFullYear();

        for(let j = 0; j <= diffDays; j++){

            // https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=20180901&end_date=20180930
            fetch(`https://economia.awesomeapi.com.br/json/daily/${op[0]}-${op[1]}/?start_date=${start_date}&end_date=${ano}${month}${day}`)
            .then((resp) => {
                if(resp.status === 200){
                    const conversao = resp.json();
                    return conversao;
                };
            })
            .then((convesao) => {
                console.log(convesao); 
                const timestamp = convesao[0].timestamp;             
                const time = convesao[0].create_date;
                const min = convesao[0].low;
                const max = convesao[0].high;
                const bid = convesao[0].bid;
                imprime(timestamp, time, min, max, bid);
            })
            .catch((erro) => {
                console.log(erro);
            });

            dt2String = `${ano}`+ `-`+`${month}`+ `-`+`${day}`; 
            date2 = new Date(dt2String);
            let dt2 = date2.getTime();    
            dt2 -= oneDay;
            dt2 = new Date(dt2);
 
            day = dt2.getUTCDate();
            if(day < `10`){
                day = `0`+day;
            }
    
            month = dt2.getUTCMonth() + 1;
            if(month < `10`){
                month = `0`+month;
            }
    
            ano = dt2.getUTCFullYear();

        }
        body.style.cursor = 'default';
    }
});

function imprime(timestamp, hora, min, max, bid){

    const tagtbody = document.getElementById("tbody");
    let tagtr = tagtbody.insertRow();
    let td_date = tagtr.insertCell();
    let td_hora = tagtr.insertCell(); 
    let td_min = tagtr.insertCell(); 
    let td_max = tagtr.insertCell();
    let td_cota = tagtr.insertCell();

    const data = new Date(timestamp*1000);
    let dd = data.getUTCDate();
    if(dd < `10`){
        dd = `0`+dd;
    }

    let mm = data.getUTCMonth() + 1;
    if(mm < `10`){
        mm = `0`+mm;
    }
    
    let aaaa = data.getUTCFullYear();

    td_date.textContent = `${dd}`+ `-`+`${mm}`+ `-`+`${aaaa}`;;
    
    td_hora.innerText = hora;
  
    td_min.innerText = min;
 
    td_max.innerText = max;
  
    td_cota.innerText = bid;

}

function valida(){
   
    if(start_date.value === "" || end_date.value === ""){
        app.innerHTML = `<p>Por favor, preencha os campos datas!</p>`;
        return false;
    }else if(end_date.value < start_date.value){
        app.innerHTML = `<p>Datas inválidas!</p>`;
        return false;
    }else if(end_date.value !== ""){
        const dateAtualMs = Date.now();
        const dateEndMs = new Date(end_date.value).getTime();
        if(dateEndMs > dateAtualMs){
            app.innerHTML = `<p>Data limite inválida!</p>`;
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return true;
    }
}

function requestSelect(){
    // https://economia.awesomeapi.com.br/json/available
    fetch("https://economia.awesomeapi.com.br/json/available")
        .then((resp) => {
            if(resp.status === 200){
                return resp.json();
            };
            return Promise.reject(`Falha na requisição das opções!`);
        })
        .then((dados) => {
            for (const item in dados) {
                moeda.innerHTML += `<option value="${item}">${dados[item]}</option>`;
            }
        })
        .catch((erro) => {
            console.log(erro);
        });
}

requestSelect();