/**
 * null: indica "ausencia de valor" o "valor nulo" o "variable vacía"
 * undefined: tambien indica "ausencia de valor, pero una ausencia mas profunda. Variables que no han sido inicializadas"
 *            Es además el valor de retorno de funciones que no tienen un return explícito y de parametros no pasados a funciones
 */
var var1;
var var2=null;
console.log('typeof null =', typeof null, '->es un objeto! (que indica un "no objeto")<-');
console.log('var1 =', var1);
console.log('var2 =', var2);
console.log('var1==var2', var1==var2);
console.log('var1===var2', var1===var2);
console.log('var1==var1', var1==var1);
console.log('var1===var1', var1===var1);
console.log('var2==var2', var2==var2);
console.log('var2===var2', var2===var2);

/*
 * NOTAS: 
 */
var a;
var a; //NO DA ERROR
console.log('typeof a: ',typeof a);
console.log('typeof z: ',typeof z);

let b;
// let b;   // DA ERROR

// const d; // DA ERROR

const c={};
c.nombre = "juan";