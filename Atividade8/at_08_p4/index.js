const btn_envio = document.getElementById("btn");
let coment = document.getElementById("result");

//add e converte msg salvo do tipo textarea no formato JSON em objeto
function converteMsg(){

    const msg = document.getElementById("box_msg").value;

    let strJSONText  = `{"msg": "${msg}"}`;

    //Converte JSON para objeto
    const objText = JSON.parse(strJSONText);
    console.log(typeof objText);


    if(valid(objText)){
        coment.textContent = `Parsable JSON string!`;
        console.log(objText);
    }
    else{
        return null;
    }

}

//validações
function valid(obj){

    try{
        //valida a conversão de tipo
        if((typeof obj) !== "object"){
            throw `Error converting sequence!`
        }
        return true;
     }
    catch (e){
        //imprime msg de erro
        coment.textContent = erro;
        return false;
    }
}

//O btn_envio aciona a function enviaMsg
btn_envio.addEventListener("click", converteMsg);