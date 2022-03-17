/**
 * El tipo string es un conjunto de valores de 16-bits (c/u representa un caracter unicode)
 * (aquellos caracteres que no entran en 16bits usan 16bits+16bits:"par subrrogado")
 * Una cadena vacía tiene longitud 0
 */
var cadena0="";
var cadena1 = "esto es una cadena de texto entero";
var cadena2="❤";
var cadena3 = "esto es una cadena de texto\n\"A";
var cadena4="\0"; //caracter "vacío"
var cadena5=null;
console.log('cadena0:'+cadena0+'<-nada (y cadena0.length da 0)');
console.log('cadena1: ',cadena1);
console.log('cadena2: ',cadena2);
console.log('cadena3: ',cadena3);
console.log('cadena4:'+cadena4+'<-nada (pero cadena4.length da 1?)');
console.log('cadena5:'+cadena5+'<-no es "nada" o "string vacío", es "null" (y no entonces no puede accederse a cadena5.length)');
console.log('cadena0.length: ',cadena0.length);
console.log('cadena1.length: ',cadena1.length);
console.log('cadena2.length: ',cadena2.length, ' (par subrrogado?)');
console.log('cadena3.length: ',cadena3.length, '(el enter:/n como las comillas escapadas:/" cuentan como un solo caracter)');
console.log('cadena4.length: ',cadena4.length);
//console.log('cadena5.length: ',cadena5.length); DA ERROR: "no se pueden leer propiedades de un NULL"
console.log("\x1b[32m%s\x1b[0m",'-----------------------------METODOS--------------------------------------')
console.log('--strings son inmutables (son primitivas) => métodos como replace() o toUpperCase() devuelven nuevos strings-')
console.log('cadena1.concat(" completa")= ',cadena1.concat(" completa"));
console.log('cadena1.indexOf("o") = ',cadena1.indexOf("o"));
console.log('cadena1.indexOf("o",5) = ',cadena1.indexOf("o",5), '(luego de la posicion 5)');
console.log('cadena1.substring(2,11) = ',cadena1.substring(2,11));
console.log('cadena1.substring(11,2) = ',cadena1.substring(11,2));
console.log('cadena1.split(" ") = ',cadena1.split(" "));
console.log('cadena1.slice(2,11) = ',cadena1.slice(2,11));
console.log('cadena1.slice(-5) = ',cadena1.slice(-5));
console.log('cadena1.startsWith("estox") = ',cadena1.startsWith("estox"));
console.log('cadena1.endsWith("to") = ',cadena1.endsWith("to"));
console.log('cadena1.includes("es") = ',cadena1.includes("es"));
console.log('cadena1.replace("e","EX") = ',cadena1.replace("e","EX"));
console.log('String.replace("e",funcion()) -> replace con funcion <-');
function mayusc(m){ return m.toUpperCase(); }
console.log('\tcadena1.replace(/e.*/,maysuc) = ',cadena1.replace(/c.*a/g,mayusc));
console.log('cadena1.charAt(0) = ',cadena1.charAt(0));
console.log('cadena1[1] =',cadena1[1]);
console.log('cadena1.padStart(4,"-") = ',cadena1.padStart(4,'-'),' (solo en ES2017)');
console.log('" espaciado ".trim() ="'+' espaciado '.trim()+'"');
console.log('" espaciado ".trimStart() ="'+' espaciado '.trimStart()+'"');
console.log('"*".repeat(3) ="','*'.repeat(3)+'"');

var reg = /\d/;
var cad="a*1+4ffd"
console.log('cad= ',cad)
//console.log('cadena1.match(/es/)= ',cadena1.match(/es/))
console.log('cad.match(/\d/)= ',cad.match(/\d/))
console.log(' /\\d/.test(cad)= ',reg.test(cad))
console.log('cad.search(/\d/)= ',cad.search(/\d/))