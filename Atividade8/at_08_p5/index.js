document.getElementById("btn").addEventListener("click", printConsole);

function printConsole(){
    // a. Utilizando colchetes:
    const objetoCC = {};
    objetoCC["Um atributo com espaços"] = 1;
    console.log("Atributo criado com Colchetes", objetoCC);

    // b. Sem utilizar colchetes:
    const objetoSC = {};
    Object.defineProperty(objetoSC, "Um atributo com espaços", { value: 1});
    console.log("Atributo criado sem Colchetes", objetoSC);

}