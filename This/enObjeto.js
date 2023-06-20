console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------------------');
console.log("\x1b[36m%s\x1b[0m", "1. 'this' dentro de propiedades del objeto 'animal'");
const animal = {
    edad:20,
    dieta: 'herbivora',
    ruido() { console.log('beeee'); },
    alimento() { console.log('dieta: ' + dieta) },                      // da error -no hay busqueda en cadena?   
    alimento2() { console.log('dieta: ' + this.dieta) },                // no da error    
    alimento3: function () { console.log('dieta: ' + this.dieta) },     // no da error    
    //function alimento4 () { console.log('dieta:'+this.dieta)}, --->definicion erronea (no se puede definir así)
    comer: () => { console.log('come: ' + dieta) },                    // da error tambien aunque sea una arrow function    
    comer2: () => { console.log('come: ' + this.dieta) }               // da "undefined"
}
animal.ruido();
//animal.alimento(); // comentado por provocar error
animal.alimento2();
animal.alimento3();
//animal.comer(); // comentado por provocar error
animal.comer2();
console.log('-- agregando al objeto como prop una funcion con una referencia a "this"--');
animal.cumple = function (num) { this.edad -= num; }
// Probándolo:
console.log('animal.edad: ' + animal.edad);
animal.cumple(3);

console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------------------');
console.log("\x1b[36m%s\x1b[0m", "2. 'this' dentro de funciones");
const adornar = () => { console.log('-->' + this.nombre + '<--') }
function Persona1(nombre) {
    this.nombre = nombre;
    return function () { 
        console.log('\t-nombre de Persona1-this.nombre: ' + this.nombre);
        console.log('\t-nombre de Persona1-this: ' + this); 
    }
}
function Persona2(nombre) {
    this.nombre = nombre;
    esto = this;
    return function () {
        console.log('\t-nombre de Persona2-esto.nombre: ' + esto.nombre);
        console.log('\t-Persona2---esto: ', esto)
    }
}
const persona1 = new Persona1('jhon');
persona1();
console.log('->persona1 es un new Persona()=> se creó algo? ');
console.log('->persona1:',persona1); // -->persona1 es la funcion que retorno Persona (???)
const persona2 = new Persona2('john');
persona2();