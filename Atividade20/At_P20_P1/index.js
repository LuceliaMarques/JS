//adotada a orientação do primeiro quadrante do plano cartesiano

function avatar(_x, _y, _moedas){

    let avatar = {
        x: _x,
        y: _y,
        moedas: _moedas
    };
    
    let bau = {
        x: 1,
        y: 6,
        moedas: 10000
    }

    function forward(){

        avatar.y += 1; 
        
        if(avatar.x == bau.x && avatar.y == bau.y){
            avatar.moedas += bau.moedas;
        }

        return avatar;
    }

    function back(){
        
        if((avatar.y - 1) > 0){
            avatar.y = avatar.y-1;

        }else{
            avatar.y = 0;
        }

        if(avatar.x == bau.x && avatar.y == bau.y){
            avatar.moedas += bau.moedas;
        }
        
        return avatar;
    }

    function right(){
        
        avatar.x += 1; 

        if(avatar.x == bau.x && avatar.y == bau.y){
            avatar.moedas += bau.moedas;
        }
        
        return avatar;
    }

    function left(){
        
        if((avatar.x - 1) > 0){
            avatar.x -= 1;

        }else{
            avatar.x = 0;
        }
        
        if(avatar.x == bau.x && avatar.y == bau.y){
            avatar.moedas += bau.moedas;
        }

        return avatar;
    }

    return{
        forward,
        back,
        right,
        left
    }
}

const av1 = avatar(1, 4, 0);
console.log("av1.forward()",av1.forward());
console.log("av1.forward()",av1.forward());
console.log("av1.forward()",av1.forward());
console.log("av1.back()",av1.back());
console.log("av1.left()",av1.left());
console.log("av1.right()", av1.right());
console.log("av1.forward()",av1.forward());
console.log("av1.back()",av1.back());
console.log("av1.back()",av1.back());
console.log("av1.back()",av1.back());
console.log("av1.back()",av1.back());
console.log("av1.back()",av1.back());
console.log("av1.back()",av1.back());