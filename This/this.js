//2-CONTEXTOS
//Definiendo y agregando un metodo a objeto1 que referencia a "this"
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------------------');
console.log('CONTEXTOS');
var objeto1 = {
    prop1: 10,
    prop2: 'un string'
}

//1)Se define un metodo para el objeto con una referencia a "this":
console.log("\x1b[36m%s\x1b[0m", "-----------------------------------------------------");
console.log("\x1b[36m%s\x1b[0m", "1)Se define un metodo para el objeto con una referencia a 'this':");
objeto1.prop3 = function (num) { this.prop1 -= num; }
// Probándolo:
console.log('objeto1.prop1: ' + objeto1.prop1);
objeto1.prop3(3);
console.log('objeto1.propo3(1): ' + objeto1.prop1);

//2)Uso inadecuado del "this" dentro del metodo agregado:
console.log("\x1b[36m%s\x1b[0m", "-----------------------------------------------------");
console.log("\x1b[36m%s\x1b[0m", "2)Uso inadecuado del 'this' dentro del metodo agregado:");
console.log("\x1b[36m%s\x1b[0m", "metodo");
metodo1 = objeto1.prop3;
metodo1(12);  //--->MAL?: acamica dice por el contexto, pero en realidad metodo1 no pertence a ningun objeto=>no tiene ese atributo?
console.log('objeto1.prop1: ' + objeto1.prop1)

//3)Solucion a lo anterior:
console.log("\x1b[36m%s\x1b[0m", "-----------------------------------------------------");
console.log("\x1b[36m%s\x1b[0m", "3)Solucion a lo anterior con el uso de bind(objeto):");
metodo2 = objeto1.prop3.bind(objeto1);
metodo2(1);
console.log('resta 1-->objeto1.prop1: ' + objeto1.prop1);

//4)Se tratara de agregar al objeto un metodo que hace un recorrido por su prop1 (que es un array) y que referencia a this.prop2() 
console.log("\x1b[36m%s\x1b[0m", "-----------------------------------------------------");
console.log("\x1b[36m%s\x1b[0m", "4)Se tratara de agregar al objeto un metodo que hace un recorrido por su prop1 (que es un array) y que referencia a this.prop2():");
var objeto0 = { prop1: ['uno', 'dos', 'tres'] };
objeto0.prop2 = function (param) { console.log('hola ' + param) };
objeto0.prop2(' PEPE')
/* //comentado para que la ejecucion no rompa:
objeto0.prop3 = function (){
    this.prop1.forEach( 
        function (elem){
            this.prop2(elem); //--->dice acamica: este this no referencia al objeto0 sino a c/u de los 
                              //    elementos
            //MAL: en realidad el problema es que es una funcion dentro de otra funcion=>this referencia a
            //     la funcion superior, se soluciona por ejemplo usando arrow function en la funcion anidada
        }
    )
}
objeto0.prop3();*/
//correccion:
objeto0.prop3 = function () {
    var yo = this;
    this.prop1.forEach(function (elem) {
        yo.prop2(elem);
    })
}
objeto0.prop3();


//5)Probando con class y 'this':
console.log("\x1b[36m%s\x1b[0m", "-----------------------------------------------------");
console.log("\x1b[36m%s\x1b[0m", "5)Probando con class y 'this':");
class Clase1{
    constructor(){
        this.prop1=0;
        this.prop2='un string'
    }
    sumar(){
        this.prop1++
    }
}
var obj1 = new Clase1();
console.log('obj1.prop1: ' + obj1.prop1);
obj1.sumar()
console.log('obj1.sumar()->obj1.prop1: ' + obj1.prop1);
