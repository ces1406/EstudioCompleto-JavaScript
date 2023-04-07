var ext = 'afuera';

function cienMas(x){
    let int = 100;
    return function fInterna(y){
        return int+y+x
    }
}

// otro ejemplo:
var funAcc;
{
    let nombres = ['juan','pedro','luis'];
    let pos = 0;
    funAcc = function(){
        ++pos;
        return nombres[pos];
    }
}
console.log('funcAcc():',funAcc())
console.log('funcAcc():',funAcc())