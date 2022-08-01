//adotada a orientação do primeiro quadrante do plano cartesiano
class Avatar{
    #x
    #y
    constructor(_x, _y, _moedas){

        this.#x = _x,
        this.#y = _y,
        this.moedas = _moedas,
        this.vida = 10;
        this.dano = 1;

        this.baux = 4,
        this.bauy = 4,
        this.baumoedas = 4

    }

    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }

    set x(value){

        if((this.#x - 1) >= 0){

            if(value === this.#x-1 || value === this.#x+1){
                this.#x = value;
            }

            if(this.#x == this.baux && this.#y == this.bauy && this.vida > 0){
                this.moedas += this.baumoedas;
            }

            return this.#x;

        }

    }
    set y(value){

        if(value === this.#y-1 || value === this.#y+1){
            this.#y = value;
        }

        if(this.#x == this.baux && this.#y == this.bauy && this.vida > 0){
            this.moedas += this.baumoedas;
        }

        return this.#y;
        
    }

    getX(value){

        if((this.#x+value) >= 0){
            
            this.#x+=value;

            if(this.#x == this.baux && this.#y == this.bauy && this.vida > 0){
                this.moedas += this.baumoedas;
            }

            return this.#x;
        }

        return this.#x;
    }

    getY(value){

        if((this.#y+value) >= 0){

            this.#y+=value;

            if(this.#x == this.baux && this.#y == this.bauy && this.vida > 0){
                this.moedas += this.baumoedas;
            }

            return this.#y;
        }
        return this.#y;
    }

    forward(){
   
        return this.getY(1);
    }

    back(){
        
        return this.getY(-1);
    }

    right(){

        return this.getX(1);
    };
    
    left(){
        
        return this.getX(-1);
    };

    defesa(value){

        if(this.vida - value >= 0){
            this.vida -= value;
        }
        else{
            this.vida = 0;
        }
        
        return this.vida;
    }

}


class Cowboy extends Avatar{

    constructor(x, y){

        super(x, y);
        this.municao = 10;
        this.dano = 2;

    }

    get getMunicao(){
        return this.municao;
    }

    get getDano(){
        return this.dano;
    }

    attack(){

        if(this.vida > 0){

            if(this.municao > 0){
                this.municao -=1;
            }

            return this.dano;
        }
    }

    addMunicao(){
        if(this.vida > 0){

            this.municao += 1;

            return this.municao;

        }

    }

}

class Mago extends Avatar{

    constructor(x, y){

        super(x, y);
        this.feitico = 10;
        this.dano = 3;

    }

    get getFeitico(){
        return this.feitico;
    }

    get getDano(){
        return this.dano;
    }

    attack(){
        if(this.vida > 0){
            if(this.feitico > 0){
                this.feitico -= 1;
                return this.dano;
            }else{
                setTimeout(() => this.feitico = 10, 10000);
                return 0;
            }
        }
    }
}