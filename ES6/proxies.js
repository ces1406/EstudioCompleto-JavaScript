const persona = {
    nombre:'',
    apellido:'',
    edad:0
}
const manejador = {
    set(obj,prop,valor){obj[prop]=valor}
}

const p1 = new Proxy(persona,manejador);
p1.nombre = 'jorgito';
p1.edad = 44;