const txt1 = document.getElementById("string1");
const txt2 = document.getElementById("string2");
const button = document.getElementById("button_compare");

button.addEventListener("click", () => {
    if(txt1.value === "" || txt2.value === ""){
        document.getElementById("resposta").innerHTML = `É obrigatório preencher os dois campos`;
        console.log("clicou com campos vazios");
    }
    else{
        document.getElementById("resposta").innerHTML = compare_strings(txt1.value, txt2.value);
    }
});

function compare(num1, num2){
    const y1 = Number(num1);
    const y2 = Number(num2);

    console.log("execução da função compare");
    console.log( y1, y2);

    if( y1 === y2 ){
        return `Resultado: A primeira e a segunda string têm o mesmo tamanho.`;
    }
    else{
        if(y1 > y2){
            return `Resultado: O tamanho da primeira string é maior que o da segunda.`;
        }
        else{
            return `Resultado: O tamanho da segunda string é maior que o da primeira.`;
        }
    }
}

function compare_strings (string1, string2){

    const text1 = string1.length;
    const text2 = string2.length;

    console.log("execução da função compare_strings");
    console.log( text1, text2);

    const compare_size = compare(text1,text2);
    console.log("função compare executada");
    return compare_size;

}