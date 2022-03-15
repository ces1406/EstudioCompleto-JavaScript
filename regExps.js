var parrafo = "Este es un parrafo de búsquedas creado el 13/3/2020 a las 09:50hs.\nCon la utilidad de practicar Expresiones Regulares.\nAutor: cesar montalvan";
console.log('Párrafo:');
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log(parrafo);
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');

console.log('1. El String parrafo comienza con "Es"? = /^Es/.test(parrafo):',/^Es/.test(parrafo));
console.log('2. El String parrafo comienza con "pa"? = /^pa/.test(parrafo):',/^pa/.test(parrafo));
console.log('4. El String parrafo finaliza con "van"?= /van$/.test(parrafo):',/van$/.test(parrafo));
console.log('5. El String parrafo finaliza con "fa"? = /fa$/.test(parrafo):',/fa$/.test(parrafo));
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('6. Reemplazando las letras e(o E) por X= parrafo.replace(/e/ig,"X"):')
console.log(parrafo.replace(/e/ig,'X')); //i:no distingue mayusculas de minusculas g:matchear todas las ocurrencias de la E.R.
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('7. Agregar al comienzo de cada linea un "->" = (parrafo.replace(/^/gm, "-> ")')
console.log(parrafo.replace(/^/gm, "-> "));
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('8. Reemplazando las palabras que comiencen con la letra p con una "X" = (parrafo.replace(/\bp/g, "X")')
console.log(parrafo.replace(/\bp/g, "X"));
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('9. Esto? = (parrafo.replace(/\b/g, "-> ")')
console.log(parrafo.replace(/\b/g, "->"));
console.log('(como solo se consideran caracteres=alfabeto(letras)+numeros+el guión bajo, todo lo demás no estará considerado)')
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('10. "foo_baz=num1+35*42/num2".replace(/\b/g, " "):');
console.log('foo_baz=num1+35*42/num2'.replace(/\b/g, " "));
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('11. OR condicional: /cesar|montalvan/i.test(parrafo):',/cesar|montalvan/i.test(parrafo));