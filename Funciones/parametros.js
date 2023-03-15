console.log("\x1b[32m%s\x1b[0m", '-------------------/* PARAMETROS->arguments[] */--------------------');
function adornar(ad,pal,...resto){
    var extra ='';
    console.log('\tparametros-> ',arguments);
    console.log('\targuments[0]: ',arguments[0]);
    resto.forEach(e => { extra +=e+' '   });
    return '->'+ad+' '+pal+' '+extra+' '+ad+'<-'
}
console.log(adornar('***','CESAR','kachu','tito','micho','negro','gordo'));

console.log("\x1b[32m%s\x1b[0m", '----------------/*PARAMETROS POR REFERENCIA */---------------------');
console.log("\x1b[32m%s\x1b[0m", '--El parametro es un primitivo (no se modifica)--');
function refer(p1){
    p1+=10;
    return p1;
}
var num1=87;
console.log('refer(num1):',refer(num1));
console.log('num1:',num1);
console.log("\x1b[32m%s\x1b[0m", '--El parametro es un vector (si se modifica)--');
function modifVec(vec){
    for([i,e] of vec.entries()){
        vec[i]=e+1;
    };
    console.log('vec:',vec)
}
var v0=[1,11,21,23];
modifVec(v0);
console.log('v0:',v0)

console.log("\x1b[32m%s\x1b[0m", '--------------------------/* IIFE */-----------------------------');
console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF (inmediatly invoked function expression)')
var Persona1 = (function () { 
    // variables locales a la funcion para que sean privadas para el constructor
    var nombre = 'sin Nombre';
    var domicilio = {};
    // metodos locales (tiene sentido que sean privados?)
    function getDom() { return 'Calle: ' + domicilio.calle + ' al ' + domicilio.nro; };
    getNomb = () => { return 'Nombre: ' + nombre }

    function constructorPersona(nomb, calle, num) {
        nombre = nomb;
        domicilio.calle = calle;
        domicilio.nro = num;
        this.getDomicilio = getDom;
        this.getNombre = getNomb;
    }
    return constructorPersona
}())

var persona1 = new Persona1('JUAN', 'ALSINA', 111);
console.log('persona1.nombre : ' + persona1.nombre + "\x1b[31m%s\x1b[0m", ' (se puede ver como no existe "persona1.nombre", el atributo nombre no es adherido al objeto)')
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())