
console.log("\x1b[32m%s\x1b[0m", '----------------/* ITERABLES */---------------------');
const numeros = [1,'dos',0,'cinco','nueve',455]
const itNumeros = numeros [Symbol.iterator]();

console.log('itNumeros.next(): ',itNumeros.next());
console.log('itNumeros.next(): ',itNumeros.next());
console.log('itNumeros.next(): ',itNumeros.next());


console.log("\x1b[32m%s\x1b[0m", '----------------/* SET */---------------------');
const conjunto = new Set(['un',33,'tree',22,0,{prop1:'coso',prop2:'cosa'}]);
console.log('conjunto: ',conjunto);
conjunto.add('nuevo');
conjunto.add('un'); // No permite repetidos
conjunto.add({prop1:'coso',prop2:'cosa'}); // Un objeto (no es el mismo objeto q ya estaba ?)
console.log('conjunto-add-: ',conjunto);
conjunto.delete('un');
console.log('conjunto-delete-: ',conjunto);
console.log('conjunto.has("tree"): ',conjunto.has('tree'));
console.log('conjunto.has({prop1:"coso",prop2:"cosa"}): ',conjunto.has({prop1:'coso',prop2:'cosa'}));
console.log('conjunto.size: ',conjunto.size);
console.log('conjunto.keys(): ',conjunto.keys());
console.log('conjunto.values(): ',conjunto.values());
console.log('conjunto.entries(): ',conjunto.entries());

console.log("\x1b[32m%s\x1b[0m", '----------------/* MAP */---------------------');
const conjunto2 = new Map();
conjunto2.set(25,'un'); // (clave,valor)
conjunto2.set(1,'cantar');
conjunto2.set({key:'coso',value:44},"objeto valor"); // la clave puede ser un objeto
conjunto2.set('cien','uno');
console.log('conjunto2.get(1): ',conjunto2.get(1));
console.log('conjunto2.get("uno"): ',conjunto2.get('cien'));
console.log('conjunto2.get({key:"coso",value:44}): ',conjunto2.get({key:'coso',value:44}));
