function f1(){
    let varA = "soy local a f1";
    console.log('varB:',varB,' (todavía no estoy asignada?)')
    if(1){
        var varB ="estoy en bloque pero soy var"
        let varC ="soy local al bloque"
        console.log('varA: ',varA);
        var varB="fui redeclarada sin problemas (algo q let o const darían Error Reference)"
    }
    {
        console.log('varB:',varB,' (en otro bloque)')
        console.log('varA: ',varA);
        //console.log('varC: ',varC); --> tira error
    }
}
f1();
//console.log('varB fuera de f1?->'+varB)-> tira error

// variables en bucles for:
//1. "v" forma parte del scope del for:
for (let v = 0; v < 4; v++) {
    console.log('v:'+v);    
}
//2. "v" esta declarada fuera del for
let v=0;
for(;v<4;v++){
    console.log('->v:'+v)
}
//3. no es aconsejable declarar la i con var (con let se evitan estos problemas)
for(var i=1;i<4;i++){
   setTimeout(() => {
    console.log('i:'+i)
   }, 1000);
}