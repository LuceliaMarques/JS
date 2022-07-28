export function getSorteio(min, max){

    let arrBolas = [];
    for(let i = 0; arrBolas.length <= (max - min); i++){

        const num = parseInt((Math.random() * (max)) + min);

        if(arrBolas.length === 0 || !arrBolas.some(item => item.valor === num)){
           
            arrBolas.push({
                valor: num,
                sorteada: false
            });

        }
    }

    function sorteador(){

        for(let j = 0; j < arrBolas.length; j++){
           
            if(!(arrBolas[j].sorteada)){

                arrBolas[j].sorteada = true;

                return arrBolas[j].valor;
            }
        }
        return null;
    }

    function verificador(_n){
        
        for(let k = 0; k < arrBolas.length; k++){
            if(arrBolas[k].valor === _n){
                if(arrBolas[k].sorteada === true){
                    return true;
                }
                return false;
            }
        }

        return false;
    }

    return{
        sorteador,
        verificador
    };

}