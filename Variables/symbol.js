/**
 * Symbol fue introducido en ES6 como nombres de propiedades "no-strings". El tipo Object es una coleccion desordenada
 * de propiedades, donde cada una tiene un nombre y un valor, típicamente el nombre es un string, ahora puede ser un Symbol.
 * Cada llamada a Symbol() devuelve un valor distinto, si se le pasa un string como parametro => ese string sera incluído
 * en la salida/output de la llamada al método .toString() sobre ese symbol.
 */
let simbolo1 =Symbol();
let simbolo2 =Symbol('simbolon');
console.log('simbolo1: ',simbolo1);
console.log('simbolo2: ',simbolo2);
console.log('simbolo2.toString(): ',simbolo2.toString());
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');


// USO 1: EVITAR USO DE CADENAS DE TEXTOS COMO PARAMETRO:
const ACCIONES ={
    ABRIR: Symbol("abrir"),
    CERRAR: Symbol("cerrar") //nota: podría ser solamente Symbol()
}
function cambiarGrifo(accion){
    if(accion===ACCIONES.ABRIR){
        console.log("abrir el grifo");
        return;
    }
    if(accion===ACCIONES.CERRAR){
        console.log("cerrar el grifo");
        return;
    }
    console.log("accion desconocida");
    return;
}
cambiarGrifo(ACCIONES.CERRAR);  // invocacion OK
cambiarGrifo(ACCIONES.ABRIR);   // invocacion OK
cambiarGrifo("CERRAR")          // invocacion MAL


// USO 2: EVITAR COLISIONES DE ATRIBUTOS
const persona ={
    nombre:'juan',
    apellido:'perez'
};
const estaLoggeado = Symbol("Logged");
persona[estaLoggeado] = false;
console.log(Object.keys(persona)); /* 
                                        ['nombre','apellido'] => no aparece la propiedad "estaLoggeado", por 
                                        eso si hicieramos:  " persona.estaLoggeado='si'; " no se produce una
                                        colisión de atributos
                                    */