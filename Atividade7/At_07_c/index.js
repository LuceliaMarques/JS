const btn_envio = document.getElementById("btnEnviar");
const btn_limpa = document.getElementById("btnLimpar");

//add msg ao box
function enviaMsg(){
   
    const msg = document.getElementById("msg");
    let box_msg = document.getElementById("box_msg");
    
    //concatena as msgs ao box
    box_msg.innerHTML += `Mensagem: ${msg.value} <br>`;

    //posiciona o scroll na parte inferior do box
    let msgScroll = box_msg;
    //quantidade de px rolados = a altura do scroll
    msgScroll.scrollTop = msgScroll.scrollHeight;

}

//Limpa o box msg
function limpaMsg(){
    
    let box_msg = document.getElementById("box_msg");
    box_msg.innerHTML = "";

}

//O ENTER aciona a function enviaMsg
document.getElementById("msg").addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        enviaMsg();
    }
});

//O btn_envio aciona a function enviaMsg
btn_envio.addEventListener("click", enviaMsg);

//O btn_Limpar aciona a function LimpaMsg
btn_limpa.addEventListener("click", limpaMsg);