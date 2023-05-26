// -------------------------ENCADENAMIENTO DE PROMESAS---------------------------------
//     (en los ejemplos anteriores también se ve el encadenamiento de promesas)


const promesa1 = () => {
    return new Promise((res, rej) => {
        const num = Math.floor((Math.random() * 10) + 1);
        console.log('promesa1 -> se creó num = ' + num)
        if (num > 5) {
            console.log('promesa1 -> numero mayor a 5 => se resuelve la promesa1');
            res(num)
        } else {
            console.log('promesa1 -> numero menor a 5 => se rechaza la promesa1');
            rej(num)
        }
    });
}
function funcPromesa2(num) {
    return new Promise((res, rej) => {
        let num2 = Math.floor((Math.random() * 10) + 1);
        console.log('funcPromesa2 -> llega el parametro num = ' + num);
        console.log('funcPromesa2 -> se creó el num2 = ' + num2)
        if (num2 + num > 9) {
            console.log('funcPromesa2 -> numero mayor a 9 => se resuelve la promesa2');
            res(num2 + num);
        } else {
            console.log('funcPromesa2 -> numero menor a 9 => se rechaza la promesa2');
            rej(num2 + num);
        }
    });
}
const funcPromesa3 = (num0) => {
    return new Promise((res, rej) => {
        console.log('promesa3 -> llega el parametro num0 = ' + num0);
        let num = Math.floor((Math.random() * 100) + 1);
        console.log('promesa3 -> se creó el num = ' + num)
        if (num > 50) {
            console.log('promesa3 -> numero mayor a 50 => se resuelve la promesa3');
            res(num)
        } else {
            console.log('promesa3 -> numero menor a 50 => se rechaza la promesa3');
            rej(num)
        }
    });
}
const promesa4 = new Promise((funResolve,funReject)=>{
    console.log('promesa 4');
    funResolve('resolucion de promesa4')
});

// Encadenamiento efectivo de las promesas:
 //promesa1()
promesa4
    .then(funcPromesa2)
    .then(funcPromesa3)
    .catch(err=>console.log('salto el error: '+err)); 

    
module.exports = { prom1: promesa1, prom3: funcPromesa3, funprom2: funcPromesa2 }