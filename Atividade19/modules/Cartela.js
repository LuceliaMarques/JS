export function getSetCartela(){

    let arrCartela = [];
    const min = 1;
    const max = 75;
   
    for(let i = 0; arrCartela.length <= 9; i++){

        const num = parseInt((Math.random() * (max)) + min);

        if(arrCartela.length === 0 || !arrCartela.some(item => item.valor === num)){

            arrCartela.push({
                valor: num,
                marcada: false
            });

        }
    }

    function listar(){

        arrCartela.sort((a, b) => {

            return a["valor"] - b["valor"];
            
        });

        return arrCartela;
    }

    function gabaritoMarcar(_n, _arrCartela){
        
        for(let k = 0; k < 10; k++){

            if(_arrCartela[k].valor === _n){
                _arrCartela[k].marcada = true;
                return _arrCartela;
            }
        }

        return arrCartela;
    }

    function verifica(_arrCartela){

        if(arrCartela.some(item => item.marcada === false)){

          return false;

        }

        return true;
    }

    return{
        listar,
        gabaritoMarcar,
        verifica
    } 
  
};
