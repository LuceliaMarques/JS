// UTILIZAR SWITCH PARA:
// i. Dia no formato numérico;->>>>>> getDate()
// ii. Mês no formato numérico; ->>>>>>  getMonth() - começa em zero
// iii. Ano no formato numérico; ->>>>>> getFullYear()
// iv. Dia da semana em português (segunda, terça, quarta, ...); ->>>>>> getDay() - Domingo(0), segunda(1), terça(2)...
// v. Mês em português (janeiro, fevereiro, março, ...); ->>>>>> fazer um case que utilize o valor obtido em getMonth()
// vi. Valor da data em milissegundos (timestapm). ->>>>>> getTime()

const dat = document.querySelector("#date");

button.addEventListener("click", () => {
    if(dat.value === ""){
        document.getElementById("valor").innerHTML = `Preencha o campo data`;
        console.log("clicou com o campo vazio");
    }

    else{
        console.log(dat.value);
        document.getElementById("valor").innerHTML = extenso(dat.value);
    }
});

function extenso(dat){

    console.log(typeof dat);
    
    // o vazio após a data permite trabalhar sem o decrescimo das 3h do padrão UTC 
    const dt = dat + " ";

    const date = new Date(dt);
    console.log(date);

    // dia
    const dd = date.getDate();
    console.log(dd);

    // mês
    const month = date.getMonth() + 1;
    console.log(month);
    
    // ano
    const year = date.getFullYear();
    console.log(year);

    // dia da semana
    const day = date.getDay();
    console.log(day);
    
    // tempo em milissegundos
    const time = date.getTime();
    console.log(time);

    let day_text = "";

    switch (day){
        case 0:
            day_text="Domingo"
            break;
        case 1:
            day_text="Segunda"
            break;
        case 2:
            day_text="Terça"
            break;
        case 3:
            day_text="Quarta"
            break;
        case 4:
            day_text="Quinta"
            break;
        case 5:
            day_text="Sexta"
            break;
        default:
            day_text="Sabádo"
            break;
    }

    let month_text = "";

    switch (month){
        case 1:
            month_text="Janeiro";
            break;
        case 2:
            month_text="Fevereiro";
            break;
        case 3: 
            month_text="Março";
            break;
        case 4:
            month_text="Abril";
            break;
        case 5:
            month_text="Maio";
            break;
        case 6:
            month_text="Junho";
            break;
        case 7:
            month_text="Julho";
            break;
        case 8:
            month_text="Agosto";
            break;
        case 9:
            month_text="Setembro";
            break;
        case 10:
            month_text="Outubro";
            break;
        case 11:
            month_text="Novembro";
            break;
        default:
            month_text="Dezembro"
            break;
    }

    return `i. Dia no formato numérico: ${dd} </br>
            ii. Mês no formato numérico: ${month} </br>
            iii. Ano no formato numérico: ${year} </br>
            iv. Dia da semana: ${day_text} </br>
            v. Mês em extenso: ${month_text} </br>
            vi. Valor da data em milissegundos: ${time}`

}