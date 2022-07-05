//importação das páginas
import {pageBrigadeiros} from "./brigadeiro.js";
import {pageCupcakes} from "./cupcake.js";
import {pageDoces} from "./doces.js";
import {pageHome} from "./home.js";

//declaração da div onde será renderizado o conteúdo das páginas
const app = document.querySelector("#app");
app.innerHTML = pageHome();

let eventRota;

function goMainPage(){
    
    const btns = document.querySelectorAll("button");

    for(let i = 0; i<btns.length; i++){

        btns[i].addEventListener("click", function(){
            switch (i){
                case 1:
                    alteraRota("/brigadeiros");
                    break;
                case 2:
                    alteraRota("/cupcakes");
                    break;
                case 3:
                    alteraRota("/doces");
                    break;
                default:
                    alteraRota("/index.html");
            }
        });
    }
};

goMainPage();

//cria o evento e dispara
function alteraRota(end){
    console.log(end);
    eventRota = new CustomEvent("onroutechange", {
        detail: {
            end
        }
    });
    
    document.dispatchEvent(eventRota);

    return history.pushState("","", end);

}

//add o evento
window.document.addEventListener("onroutechange", (evt) => {
    switch (eventRota.detail.end){
        case "/brigadeiros":
            app.innerHTML = pageBrigadeiros();
            break;
        case "/cupcakes":
            app.innerHTML = pageCupcakes();
            break;
        case "/doces":
            app.innerHTML = pageDoces();
            break;
        default:
            app.innerHTML = pageHome();
    }
});

//voltar para a page anterior
window.addEventListener("popstate", (e) => {
    alteraRota(e.target.location.pathname);
});