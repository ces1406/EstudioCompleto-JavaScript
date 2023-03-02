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