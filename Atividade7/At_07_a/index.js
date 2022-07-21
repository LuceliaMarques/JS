// 1. Crie uma página web que possua um elemento HTML select que possa selecionar uma lista de carros esportivos, considerando:
// a. Identificar a mudança de carro selecionado e alterar a imagem associada;
// b. Exibir as informações referentes a este carro (dados do carro como nome, fabricante, velocidade máxima, 0-100km e outras informações que julgar pertinente);
// c. A página web deve ser bem construída visualmente.

const img = document.querySelector("#img");
const text = document.querySelector("#info");


document.querySelector("select").addEventListener("change", function(event){

    const op = event.target.value;

    console.log(event.target.value);
    console.log(op);

    switch (op){
        case "ferrari":
            text.innerHTML = `Nome: SF90 Stradale </br>
                              Fabricante: Ferrari </br>
                              Velocidade máxima: 340 km/h </br>
                              0-100km: em 2,5s </br>
                              Potência: 1.000 cv </br>`

            img.innerHTML = "<img src='./img/Ferrari.webp' />"
            console.log(img);
            break;
        case "porsche":
            text.innerHTML = `Nome: 911 Turbo S </br>
                              Fabricante: Porsche </br>
                              Velocidade máxima: 330km/h </br>
                              0-100km: em 2,7s </br>
                              Potência: 650 cv </br>`

            img.innerHTML = "<img src='./img/Porsche.webp' />"
            console.log(img);
            break;
        default:
            text.innerHTML = `Nome: Sián </br>
                              Fabricante: Lamborghini </br>
                              Velocidade máxima: 350km/h </br>
                              0-100km: em 2,8s </br>
                              Potência: 819 cv </br>`

            img.innerHTML = "<img src='./img/Lamborghini.webp' />"
            console.log(img);
            break;
    }

});
