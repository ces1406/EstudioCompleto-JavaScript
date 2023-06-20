// EJEMPLO BASICO DE SCOPE
// =======================
var ext = 0;
function cienMas(x){
    let int = 100;
    return function fInterna(y){
        console.log('int---->',int)
        int++;
        return int+y+x
    }
}
<<<<<<< HEAD

// otro ejemplo:
var funAcc;
{
    let nombres = ['juan','pedro','luis'];
    let pos = 0;
    funAcc = function(){
        ++pos;
        return nombres[pos];
    }
}
console.log('funcAcc():',funAcc())
console.log('funcAcc():',funAcc())
=======
var f1 = cienMas(5);
var f2 = cienMas(7);
console.log('f1(1)-->',f1(1));
console.log('f1(1)-->',f1(1));
console.log('f2(1)-->',f2(2));
console.log('f2(1)-->',f2(2));
/*
 1-Se ve el funcionamiento de la mantención del scope (no se destruye xq hay una referencia a él)
 2-Se ve que ejecutar cienMas() 2 veces crea 2 scopes distintos (yo pense que se apuntaba a la misma funcion/scope)
*/

// HACK DE SCOPE
// =============
var f3;
function hack(){
    var b1="soy local";
    var hack1 = function(){
        return b1;
    }
    f3 = hack1
}
// console.log('b1:',b1) ---> DA ERROR
hack();
console.log('f3()-->',f3())

// SCOPE DE FOR
// ============
var vec=[];
function llenar(){
    var i=0;
    for(;i<3;i++){
        vec[i]=function (){return i;}
    }
}
llenar();
console.log('vec[0]():',vec[0]());
console.log('vec[1]():',vec[1]());
console.log('vec[2]():',vec[2]());

// SCOPE DE ITERACION
// ==================
for(let i=0;i<5;i++) {
  var f=Math.random();
  console.log(f)
  // Nota 1: pensé que "var f" ocacionaría error
  // Nota 2: i pertenece al scope del for
}
>>>>>>> 10dbd4a3c03bdb6e31fcedf6805c27946c94c99c
