/*DECLARACION DE FUNCION */
function doble0(x){ return 2*x; }

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

/*PRUEBA DE PARAMETROS */
function adornar(ad,pal,...resto){
    var extra ='';
    console.log('\tparametros-> ',arguments);
    console.log('\targuments[0]: ',arguments[0]);
    resto.forEach(e => { extra +=e+' '   });
    return '->'+ad+' '+pal+' '+extra+' '+ad+'<-'
}

console.log(doble0(33.25));
console.log(doble1(7.14));
console.log(sumatoria1(4));
console.log(sumatoria2(4));

const f1 = funcRetorna('pepin');

//console.log(adornar('***','CESAR','kachu','tito','micho'));
//console.log(adornar('***'));

const inicia = ()=>{setInterval(f1,1000);}
inicia();

setTimeout(()=>{
    console.log('terminariamos?')
    delete inicia
},4000)