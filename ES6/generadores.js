function *iterable(){
    var i=0;
    i++;
    yield "primer detenimiento";
    console.log('detenido por vez: ',i);
    i++;
    yield "segundo detenimiento";
    console.log('detenido por vez:',i);
    i++;
    yield "tercer detenimiento";
    console.log('detenido por vez:',i);
}

let iterador = iterable();
console.log('iterador(): ',iterador.next());
console.log('iterador(): ',iterador.next());
console.log('iterador(): ',iterador.next());
console.log('iterador(): ',iterador.next());
console.log('iterador(): ',iterador.next());