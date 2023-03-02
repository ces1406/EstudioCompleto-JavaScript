var n1 = 573.52569;
var s1 = "120";

console.log('number n1 =',n1);
console.log('string s1 =',s1);
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
var s2 = n1.toFixed(2);
console.log('n1.toFixed(2) =',s2);
console.log('typeof n1.toFixed(2) =',typeof s2);

console.log('+s1 =',+s1);
console.log('typeof +s1 =',typeof +s1);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('Number.MAX_VALUE =',Number.MAX_VALUE);
console.log('Number.MIN_VALUE =',Number.MIN_VALUE);
console.log('Number.EPSILON =',Number.EPSILON);
console.log('Notacion exponencial: [digits][.digits][(E|e)[(+|-)]digits]\n1.4738223E-32 es--> 1.4738223 × 10⁻³²');

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('parseInt(s1) =',parseInt(s1));
console.log('parseInt("AB5",16) =',parseInt("AB5",16),' (da el resultado como un entero en sistema decimal)');
console.log('parseInt(n1) =',parseInt(n1));
console.log('parseFloat(n1) =',parseFloat(n1));

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
var o1 = 071;
console.log('octales: console.log(071) =',o1,' (lo muestra en sistema decimal)');
console.log('hexadecimales: console.log(0xA) =',0xA,' (lo muestra en sistema decimal)');
console.log('binarios: console.log(0b0101) =',0b0101,' (lo muestra en sistema decimal)');

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('5/0 =',5/0);
console.log('0/0 =',0/0);
console.log('1/Infinity =',1/Infinity);
console.log('Infinity/Infinity =',Infinity/Infinity);
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('Math.round(4.4) =',Math.round(4.4));
console.log('Math.pow(3,2) =',Math.pow(3,2));
console.log('Math.sqrt(9) =',Math.sqrt(9));
console.log('Math.ceil(5.011) =',Math.ceil(5.011));
console.log('Math.floor(5.99) =',Math.floor(5.99));
console.log('Math.abs(-2.99) =',Math.abs(-2.99));
console.log('Math.max(5.9,9,1,55,26,87,977) =',Math.max(5.9,9,1,55,26,87,977));
console.log('Math.min(5.9,9,1,55,26,87,977) =',Math.min(5.9,9,1,55,26,87,977));
let v =[5.9,9,1,55,26,87,977,-5]
console.log('Math.min(...vec) =',Math.min(...v));
console.log('Math.random() =',Math.random(),' (un nro entre 0 y 1');
console.log('Math.sin(90) =',Math.sin(90));
console.log('Math.log(10) =',Math.log(10),' log natural');
console.log('Math.cbrt(27)=',Math.cbrt(27),' raiz cubica') // => 3: cube root
console.log('Math.hypot(3, 4)=',Math.hypot(3, 4),' hipotenusa de un triangulo 3-4-?'); // => 5: square root of sum of squares of all arguments
console.log('Math.log10(100)=',Math.log10(100),' logaritmo base 10'); // => 2: Base-10 logarithm
console.log('Math.log2(1024)=',Math.log2(1024),' logaritmo base 2') // => 10: Base-2 logarithm