console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

//  Literal definiendo todo inicialmente dentro de la declaracion del objeto
console.log("\x1b[36m%s\x1b[0m", '1-Creacion literal');
var persona1 = {
    nombre: 'JUAN',
    domicilio: {
        calle: 'ALSINA',
        nro: 111
    },
    getDomicilio: function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; },
    getNombre: () => { return 'Nombre :' + this.nombre } //ERROR : aca this no apunta al objeto (por el uso de arrow functions)
};
console.log('persona1: ', persona1)
console.log('persona1.nombre : ' + persona1.nombre)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')

// Literal agregando luego de la declaracion del objeto
console.log("\x1b[36m%s\x1b[0m", '2-Agregando propiedades "on the fly"')
var persona2 = {};
persona2.nombre = 'PEDRO';
persona2.domicilio = { calle: 'GOYENA', nro: 222 };
persona2.getDomicilio = function () { return '->Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona2.getNombre = () => { return '->Nombre :' + this.nombre }//this.['nombre']}
console.log('persona2: ', persona2)
console.log('-personaD.nombre : ' + persona2.nombre)
console.log(persona2.getDomicilio())
console.log(persona2.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')

// con new Object() y agregandole propiedades on-the-fly
console.log("\x1b[36m%s\x1b[0m", '3-Con new Object():\n')
var persona3 = new Object();
persona3.nombre = 'JUAN';
persona3.domicilio = { calle: 'ALSINA', nro: 111 };
persona3.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona3.getNombre = () => { return 'Nombre :' + this.nombre } // Error: el this apuntara al contexto que lo contiene (en este caso "Global")
console.log('persona3.nombre : ' + persona3.nombre)
console.log(persona3.getDomicilio())
console.log(persona3.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')

// Mediante una función constructora (o simplemente constructor) + new()
console.log("\x1b[36m%s\x1b[0m", '4-Mediante constructor (patron Prototype?) o function constructora + new()\n\t new() crea objetos distintos c/vez que es llamado')
function Persona1(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre },
    this.getNombre2 = function name(){return 'Nombre : '+this.nombre} //Funciona por el scope-chaining?
}
var persona3 = new Persona1('JUAN', { calle: 'ALSINA', nro: 111 });
console.log('personaC.nombre : ' + persona3.nombre)
console.log(persona3.getDomicilio())
console.log(persona3.getNombre2())
console.log(persona3.getNombre() + '\n-----------------------------------------')
var persona4 = new Persona1('MARIO', { calle: 'GOYENA', nro: 222 });
console.log(persona4.getDomicilio())
console.log(persona4.getNombre() + '\n-----------------------------------------')
// chequeando que persona4 efectivamente no pisa a persona3
console.log(persona3.getDomicilio())
console.log(persona3.getNombre() )

// Patron FACTORY para creacion de objetos:
console.log("\x1b[36m%s\x1b[0m", '5-Patron FACTORY')
function crearPersona1(nombre, domicilio) {
    var persona = new Object();
    persona.nombre = nombre;
    persona.domicilio = domicilio;
    persona.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    persona.getNombre = () => { return 'Nombre :' + this.nombre }
    return persona;
}
var persona5 = crearPersona1('JUAN', { calle: 'ALSINA', nro: 111 });
console.log('persona1.nombre : ' + persona5.nombre)
console.log(persona5.getDomicilio())
console.log(persona5.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

//Patron FACTORY mejorado (por cada objeto, antes, se hacia una nueva copia de la funcion de las funciones miembro)
console.log("\x1b[36m%s\x1b[0m", '5.1-Patron FACTORY con definicion de función miembro fuera del factory')
console.log("\x1b[36m%s\x1b[0m", ' (evitando que para cada objeto creado se haga una copia de la funcion aparte)')
function funcDomicilio() { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
function crearPersona2(nombre, domicilio) {
    var persona = new Object();
    persona.nombre = nombre;
    persona.domicilio = domicilio;
    persona.getNombre = () => { return 'Nombre :' + this.nombre };
    persona.getDomicilio = funcDomicilio;
    return persona;
}
var persona6 = crearPersona2('PEDRO', { calle: 'GOYENA', nro: 222 });
console.log('persona6.nombre : ' + persona6.nombre);
console.log(persona6.getDomicilio());
console.log(persona6.getNombre());
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Usando Object.defineProperty() para definir propiedades
console.log("\x1b[36m%s\x1b[0m", '6-Usando Object.defineProperty() para asignarle atributos')
console.log("\x1b[36m%s\x1b[0m", '   para definir cada propiedad (atributos y no para metodos?)')
var persona7 = {}; // o var personaH = new Object()
Object.defineProperty(persona7, 'nombre', { value: 'JUAN', writable: true, enumerable: true, configurable: true });
Object.defineProperty(persona7, 'domicilio', { value: { calle: 'ALSINA', nro: 111 }, writable: true, enumerable: true, configurable: true });
persona7.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona7.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona7.nombre : ' + persona7.nombre)
console.log(persona7.getDomicilio())
console.log(persona7.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Con Object.create() para crear el objeto y depaso asignarle los atributos
console.log("\x1b[36m%s\x1b[0m", '7-Usando Object.create() para crear el objeto Y definir atributos')
// Se usa como prototipo a Object.prototype
var persona8 = Object.create(Object.prototype, {
    nombre: { value: 'PEDRO', writable: true, enumerable: true, configurable: true },
    domicilio: { value: { calle: 'GOYENA', nro: 222 }, writable: true, enumerable: true, configurable: true }
});
persona8.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona8.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona8.nombre : ' + persona8.nombre)
console.log(persona8.getDomicilio())

// Se usa como prototipo a Persona1.prototype
function Persona2(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre }
}
console.log("\x1b[36m%s\x1b[0m", 'usando como prototipo a Persona2')
var persona9 = Object.create(Persona2.prototype, {
    nombre: { value: 'MARIA', writable: true, enumerable: true, configurable: true },
    domicilio: { value: { calle: 'LONDRES', nro: 333 }, writable: true, enumerable: true, configurable: true }
});
persona9.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona9.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona9.nombre : ' + persona9.nombre)
console.log(persona9.getDomicilio())
console.log(persona9.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Constructor parasito:
//          esta mal? (el concepto en general o ésta implementación/ejemplo) por que leí que la función constructor
//          si devuelve algo esto no será tenido en cuenta, es como que se ignora cualquier "return" dentro del constructor
function Persona3(nomb, domic) {
    var obj = new Object();
    obj.nombre = nomb;
    obj.domicilio = domic;
    obj.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    obj.getNombre = () => { return 'Nombre :' + this.nombre }
    return obj;
}
var persona10 = new Persona3('JUAN', { calle: 'ALSINA', nro: 111 });
console.log("\x1b[36m%s\x1b[0m", '8-Constructor parasito')
console.log("\x1b[36m%s\x1b[0m", '   leí que  si la función constructor devuelve  algo esto no será tenido en cuenta,')
console.log("\x1b[36m%s\x1b[0m", '   es como que se ignora cualquier "return" dentro del constructor (en este ejemplo')
console.log("\x1b[36m%s\x1b[0m", '   eso no pasó, de hecho si se devuelve el objeto indicado en el return)')
console.log("\x1b[36m%s\x1b[0m", '   Nota: el getNombre() es una arrow function con this -----> por eso tira undefined')
console.log('persona10: ',persona10)
console.log('persona1.nombre : ' + persona10.nombre)
console.log('persona1.obj: ', persona10.obj)
console.log(persona10.getDomicilio())
console.log(persona10.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Constructor Stealing
console.log("\x1b[36m%s\x1b[0m", '9-Constructor Stealing (el constructor llama a otro constructor con la funcion call() )')
function Persona4(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre }
}
function Persona5() { 
    Persona4.call(this,'JUAN',{calle:'ALSINA', nro:111}) 
} 
function Persona6(){
    Persona4.apply(this,['CARLOS',{calle:'PERON',nro:333}])
}
var persona11 = new Persona5();
var persona12 = new Persona5();
var persona13 = new Persona6();
console.log('persona11:')
console.log(persona11.getDomicilio())
console.log(persona11.getNombre());
console.log('persona12:')
console.log(persona12.getDomicilio())
console.log(persona12.getNombre())
console.log('persona13:')
console.log(persona13.getDomicilio())
console.log(persona13.getNombre())
persona11.nombre='MARIA'
console.log('persona11.nombre = "MARIA"')
console.log('persona11.getNombre()->'+persona11.getNombre())
console.log('persona12.getNombre()->'+persona12.getNombre());
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Usando ES6 class()
console.log("\x1b[36m%s\x1b[0m", '10-Usando ES6 class()')
class Persona7 {
    constructor(nombre, calle, num) {
        this._nombre = nombre;
        this.domicilio = {};
        this.domicilio.calle = calle;
        this.domicilio.nro = num
    }
    get nombre () { return this._nombre.toUpperCase() }
    set nombre (nomb) { this._nombre = nomb }
    getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };    
}
var persona14 = new Persona7('JUAN', 'ALSINA', 111);
console.log('persona14.nombre : ' + persona14._nombre)
console.log(persona14.getDomicilio())
// ES6 get and set
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name.toUpperCase();  }
    set name(newName) {
        this._name = newName; // validation could be checked here such as only allowing non numerical values
    }
    walk() {console.log(this._name + ' is walking.'); }
}
let bob = new Person('Bob');
console.log('Accediendo al atributo name con bob.name: '+bob.name)
bob.walk();
bob.name ='roberto'
console.log('Despues de modificar bob:',bob)
bob.walk();
console.log('Accediendo al atributo name con bob.name: '+bob.name)
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Construccion de objetos usando IIFE Inmediatly Invoked Function Expressions para dar privacidad a propiedades/atributos
console.log("\x1b[36m%s\x1b[0m", '11-Propiedades privadas con IIFE')
console.log("\x1b[36m%s\x1b[0m", 'IIFE (Inmediatly Invoked Function Expressions): ')
var unValor = function () { return 3 + 2 }();
console.log("var unValor = function(){return 3+2}()\nunValor= " + unValor + "\n")

// Mediante IIFE
console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF (inmediatly invoked function expression)')
var Persona8 = (function () { 
    // Persona8 termina siendo un constructor (?:un constructor no podria pisarse)
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

var persona15 = new Persona8('JUAN', 'ALSINA', 111);
console.log('persona15.nombre : ' + persona15.nombre + "\x1b[31m%s\x1b[0m", ' (se puede ver como no existe "persona15.nombre", el atributo nombre no es adherido al objeto)')
console.log(persona15.getDomicilio())
console.log(persona15.getNombre())
console.log('-----------------------------------------')
var persona16 = new Persona8('PEDRO', 'GOYENA', 222);
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto persona16 que pisará a persona1 (en realidad como lo que devuelve Persona1');
console.log("\x1b[31m%s\x1b[0m", 'es un constructor que termina haciendo referencia a las mismas variables privadas, los distintas objetos');
console.log("\x1b[31m%s\x1b[0m", 'que se vayan creando con Persona4 van a apuntar siempre a las mismas variables privadas)');
console.log(persona16.getDomicilio())
console.log(persona16.getNombre())
console.log(persona15.getDomicilio())
console.log(persona15.getNombre())
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')

// Construccion de objetos con variables privadas usando IIEF + weakmap()->de ES6
console.log("\x1b[36m%s\x1b[0m", 'Propiedades privadas con IIEF + weakmmap()de ES6')
console.log('----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", '1°->Uso de WeakMap()de ES6:')
//      El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.
//      Las claves de los WeakMaps solamente pueden ser del tipo Object
var mapaDebil = new WeakMap();
var ojeto1 = { frase: 'clave loca' }
mapaDebil.set({ name: 'coso', edad: 144 }, 'valor uno del weakmap');
mapaDebil.set(ojeto1, 14); //--->supuestamente solo sirve así (declarando antes un objeto como variable)
mapaDebil.set({ name: 'cosa' }, { cadena: 'bla bla bla', cantidad: 411 });
console.log('mapadebil.get("clave loca"): ' + mapaDebil.get(ojeto1));
console.log('mapadebil.get({name:"cosa"}): ' + mapaDebil.get({ name: 'cosa' }))

console.log('----------------------------------------');
var Persona9 = (function () { //Persona9 termina siendo un constructor
    var variablesPrivadas = new WeakMap();

    function constructorPersona(nomb, calle, num) {
        propPrivada = {
            nombre: nomb,
            domicilio: {
                calle: calle,
                nro: num
            }
        };
        variablesPrivadas.set(this, propPrivada);
        this.getDomicilio = function () { return 'Calle: ' + variablesPrivadas.get(this).domicilio.calle + ' al ' + variablesPrivadas.get(this).domicilio.nro; };
        this.getNombre = () => { return 'Nombre: ' + variablesPrivadas.get(this).nombre };
    }
    return constructorPersona
}());
var personaP = new Persona9('Potamo', 'alcortacot', 455);
console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF + weakmap()-> de ES6)')
console.log('personaP.nombre : ' + personaP.nombre + "\x1b[31m%s\x1b[0m", ' (se puede ver como no existe "personaN.nombre", el atributo nombre no es adherido al objeto)')
console.log(personaP.getDomicilio())
console.log(personaP.getNombre() + '\n-----------------------------------------')
var personaPP = new Persona9('RePotamo', 'av croacia', 364);
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto personaPP que ahora NO pisará a personaP');
console.log(personaPP.getDomicilio())
console.log(personaPP.getNombre())
console.log(personaP.getDomicilio())
console.log(personaP.getNombre() + '\n-----------------------------------------')

// IIFE con class de ES6 y WeakMap --->la mejor opcion?
console.log("\x1b[36m%s\x1b[0m", 'IIEF con class y WeakMap() de ES6')
var Persona3 = (function (){
    var unAtributoDeClase = 'atributo de clase publico'
    var unAtributoDeClasePrivado ='';
    var atributosPrivados = new WeakMap ();

    class Persona {
        constructor(unNombre,unDomicilio){
            this.atributoDeClase = unAtributoDeClase; // de acceso público --->(inicialmente de clase")NOTA: si un objeto lo modifica=>se modifica sólo para él
            unAtributoDeClasePrivado = 'atributo de clase privado';
            atributosPrivados.set(this,{nombre:unNombre,domicilio:unDomicilio})
        }
        getNombre = function (){
            return atributosPrivados.get(this).nombre
        }
        getAtribDeClase = function (){
            return unAtributoDeClasePrivado
        }
        setAtribDeClase = function (param='valor por default') {
            unAtributoDeClasePrivado = param;
        }
    }
    return Persona;
}())

var unaPersonaP = new Persona3('Carlitos Suarez', {calle:'av croacia', altura:364});
var unaPersonaD = new Persona3('Federicoz', {calle:'av alsinax', altura:122});
console.log('unaPersonaP.getNombre(): '+unaPersonaP.getNombre());
console.log('unaPersonaD.getNombre(): '+unaPersonaD.getNombre());
console.log('unaPersonaP.atributoDeClase: '+unaPersonaP.atributoDeClase);
console.log('unaPersonaD.atributoDeClase: '+unaPersonaD.atributoDeClase);
console.log('unaPersonaP.unAtributoDeClasePrivado: '+unaPersonaP.unAtributoDeClasePrivado);
console.log('unaPersonaD.unAtributoDeClasePrivado: '+unaPersonaD.unAtributoDeClasePrivado);
console.log('unaPersonaP.getAtribDeClase(): '+unaPersonaP.getAtribDeClase());
console.log('unaPersonaD.getAtribDeClase(): '+unaPersonaD.getAtribDeClase())
// prueba de seteo de atributos de la clase
console.log('-----------------seteo de atributos-----------------------')
unaPersonaP.atributoDeClase = 'nuevo valor de atributo de clase publico';
//unaPersonaP.unAtributoDeClasePrivado = 'nuevo valor de atributo de clase privado';
unaPersonaP.setAtribDeClase('nuevo valor de atributo de clase privado')
console.log('unaPersonaP.getAtribDeClase(): '+unaPersonaP.getAtribDeClase());
console.log('unaPersonaD.getAtribDeClase(): '+unaPersonaD.getAtribDeClase());
console.log('unaPersonaP.atributoDeClase: '+unaPersonaP.atributoDeClase);
console.log('unaPersonaD.atributoDeClase: '+unaPersonaD.atributoDeClase);