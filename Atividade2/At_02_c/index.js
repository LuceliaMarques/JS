const op_date = document.getElementById("date");
const op_genre = document.getElementById("genre");
const button = document.getElementById("button_calculus");

button.addEventListener("click", () => {
    if(op_genre.value === "" || op_date.value === ""){
        document.getElementById("resposta").innerHTML = `É obrigatório preencher os dois campos`;
        console.log("clicou com campos vazios");
    }
    else{
        console.log(op_date.value, op_genre.value);
        document.getElementById("resposta").innerHTML = calculus_days(date.value, genre.value);
    }
});

function calculus_days(date, genre_op){
    // conversão da data informada
    const date1 = new Date(date);
    // captura da data atual
    const date2 = new Date();

    console.log(date1, date2);

    // cálculo da idade em diferença de millisegundos 
    const age_ms = date2.getTime() - date1.getTime();
    console.log(age_ms);

    // conversão da idade de millisegundos para dias
    const age_days = parseInt(age_ms / (24 * 3600 * 1000), 10);
    console.log(age_days);

    // conversão da idade em dias para anos 
    const age_year = age_days / 365; 
    console.log(age_year);

    // inicialização em zero para o calculo dos dias restantes de acordo com o gênero
    let days_remaining = 0;
    console.log(genre_op);

    if(genre_op === "Feminino" ){
        days_remaining = parseInt((80.1 - age_year) * 365, 10);

    }
    else{
        days_remaining = parseInt((73.1 - age_year) * 365, 10);
    }

    console.log(days_remaining);
    return `Só te restam ${days_remaining} dias. APROVEITE!`

}
