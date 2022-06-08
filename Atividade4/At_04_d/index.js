button.addEventListener("click", () => {
    document.getElementById("resultado").innerHTML = mulher_homem();
});

function mulher_homem(){

    const num1 = Math.random() * 100;
    console.log("-----------------ok-----------------");
    console.log(num1);
    
    let genero = "";
    let idade = "";

    if(num1 <= 51.7){
        console.log("mulher");
        genero = "mulher"
    }
    else{
        console.log("homem");
        genero = "homem"
    }
    
    const num2 = Math.random() * 100;
    console.log("ok");
    console.log(num2);

    if(num2 <= 16.7){
        console.log("idoso");
        idade = "idoso(a)"
    }
    else{
        console.log("não idoso");
        idade = "não idoso(a)"
    }
    return `Gênero: ${genero} - ${idade}`;
}