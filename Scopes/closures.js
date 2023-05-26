var ext = 'afuera';

function cienMas(x){
    let int = 100;
    return function fInterna(y){
        return int+y+x
    }
}
