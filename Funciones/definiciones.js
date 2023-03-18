/*DECLARACION DE FUNCION */
console.log(doble0(33.25)); // Declaración tardía
console.log(doble0()); // Declaración tardía
function doble0(x=1){  // parametro por default 
    return 2*x; 
}

/*EXPRESION FUNCION */
var doble1 = function(x){ return 2*x; }

/*FUNCION RECURSIVA */
var sumatoria1 = function sum(x){
    if(x==1)return 1;
    return x + sum(x-1);
}

/*FUNCION ANONIMA-ARROW FUNCTION */
var sumatoria2= (x)=>{return sumatoria1(x-1)}

/*FUNCION QUE RETORNA UNA FUNCION */
function funcRetorna (x){
    return function(){
        console.log("HOLA DON "+x);
    }
}

console.log(doble1(7.14));
console.log(sumatoria1(4));
console.log(sumatoria2(4));

const f1 = funcRetorna('pepin');

const inicia = ()=>{setInterval(f1,1000);}
inicia();

setTimeout(()=>{
    console.log('terminariamos?')
    delete inicia
},4000)