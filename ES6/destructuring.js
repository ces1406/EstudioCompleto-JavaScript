const numeros = [1,2,3,4,5];
const [uno,dos] = numeros;
const [primo, ,terzo] = numeros;
let persona = {
    nombre:'juan',
    edad:22,
    sexo:'M',
    domicilio:{
        calle: 'sempere',
        nro: 1593
    },
    puesto: 'gerente'
}
let {nombre,puesto,domicilio:{nro:num}} = persona;
let {nombre:n1,puesto:p1} = persona;

console.log('uno:',uno);
console.log('dos:',dos);
console.log('primo:',primo);
console.log('terzo:',terzo);
console.log('nombre:',nombre);
console.log('puesto:',puesto);
console.log('n1:',n1);
console.log('p1:',p1);
console.log('num:',num);