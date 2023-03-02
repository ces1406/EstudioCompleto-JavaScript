var parrafo = "Este es un parrafo de búsquedas creado el 13/3/2020 a las 09:50hs.\nCon la utilidad de practicar Expresiones Regulares.\nAutor: cesar montalvan";
console.log("Párrafo:");
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log(parrafo);
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");

console.log('1. El String parrafo comienza con "Es"? = /^Es/.test(parrafo):', /^Es/.test(parrafo));
console.log('2. El String parrafo comienza con "pa"? = /^pa/.test(parrafo):', /^pa/.test(parrafo));
console.log('4. El String parrafo finaliza con "van"?= /van$/.test(parrafo):', /van$/.test(parrafo));
console.log('5. El String parrafo finaliza con "fa"? = /fa$/.test(parrafo):', /fa$/.test(parrafo));
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log('6. Reemplazando las letras e(o E) por X= parrafo.replace(/e/ig,"X"):');
console.log(parrafo.replace(/e/gi, "X")); //i:no distingue mayusculas de minusculas g:matchear todas las ocurrencias de la E.R.
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log('7. Agregar al comienzo de cada linea un "->" = (parrafo.replace(/^/gm, "-> ")');
console.log(parrafo.replace(/^/gm, "-> "));
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log('8. Reemplazando las palabras que comiencen con la letra p con una "X" = (parrafo.replace(/\bp/g, "X")');
console.log(parrafo.replace(/\bp/g, "X"));
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log('9. Esto? = (parrafo.replace(/\b/g, "-> ")');
console.log(parrafo.replace(/\b/g, "->"));
console.log("(como solo se consideran caracteres=alfabeto(letras)+numeros+el guión bajo, todo lo demás no estará considerado)");
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log('10. "foo_baz=num1+35*42/num2".replace(/\b/g, " "):');
console.log("foo_baz=num1+35*42/num2".replace(/\b/g, " "));
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log("11. OR condicional: /cesar|montalvan/i.test(parrafo):", /cesar|montalvan/i.test(parrafo));
console.log("\x1b[32m%s\x1b[0m", "-------------------------------------------------------------------");
console.log("Ejer de coderbyte: valida una palabra de entre 4 y 25 caracteres(letras + numeros + guion bajo) comienza con mayúscula y no puede terminar con guión bajo");
console.log(/^[a-zA-Z]/.test("Hol_lisstarf"));
console.log(/^[a-zA-Z]/.test("5Hol_lisstarf"));
console.log(/^[a-zA-Z](\w|\+)*/.test("a5Hol_lisstarf"));
console.log(/\w/.test("a"));
console.log(/\w/.test("4"));
console.log(/\w/.test("_"));
console.log(/\w/.test("."));
console.log(/\w/.test("a5.Hol_lisstarf"));
console.log(/(\w)+/.test("a5.Hol_lisstarf"));
console.log(/[a-zA-Z]/.test("5"));
console.log(/[a-zA-Z]/.test("c"));
console.log(/[a-zA-Z]/.test("5c"));
console.log(/[a-zA-Z][a-zA-Z]/.test("5c"));
console.log(/[a-zA-Z]+/.test("5c"));
console.log(/a+/.test("a5c"));
console.log(/a+/.test("rrr5c"));
console.log(/(a)+/.test("rrr5c"));
console.log(/^[a-zA-Z]\w+/.test("Hol_lisstarf"));
console.log(/^[a-zA-Z]\W+/.test("Hol_lis.starf"));

console.log(/^[a-zA-Z]\w{3,23}\b/.test("aar"));

let cad0 = '0';
let cad1 = '1'

let cad = "010011100000111110";
let cad2 ='00';
let cad3 = '11';
let cad4 = '10';
let cad5 = '01';
let cad6 = '000';
let cad7 = '010';
let cad8= '100'

console.log("\x1b[32m%s\x1b[0m", "----------------------------- REDUCE -------------------------------");

function maxs(c) {
  let v = Array.from(c);
  let acu = 0;
  if (v.length ==1)return 1;
  //console.log('v.length->',v[v.length-1])
  //console.log('v.indexof->',v.indexOf('1'))
  if (v[v.length-1]=='0' && v.indexOf('1')!=-1) {acu++;}
  //console.log('length',v.length==2)
  if (v.length ==2) return ++acu;

  for (var i = 1; i < v.length; i++) {
    if (v[i - 1] == 0 && v[i] == 1) acu++;
  }
  return acu;
}

console.log(maxs(cad0));
console.log(maxs(cad1));
console.log('cad2',maxs(cad2));
console.log(maxs(cad3));
console.log(maxs(cad4));
console.log('cad5',maxs(cad5));
console.log(maxs(cad6));
console.log(maxs(cad7));
console.log(maxs(cad8));

console.log("\x1b[32m%s\x1b[0m", "----------------------------- MACM MINCD -------------------------------");
var vec=[108,24,18];
function encuentra(v){
  let max = v.reduce((acum,valAct,indice,vec)=>{
    console.log(acum,valAct,indice);
    return acum
  })
}
var vAux=[];

function getVec(v0){
  var v = v0.slice();
  var ok=false;
  while(!ok){
    console.log('->while-nesimo->v:',v)
    if(allOk(v)) {
      ok=true;
    }else{
      let vec = crearVec(v)
      v= vec.slice();
    }
    //console.log('MAP -> v:'+JSON.stringify(v)+' vAux:'+JSON.stringify(vAux));    
    
  }

  return v;
}

function crearVec(v){  
  var vAux = [];
  var changed = false;
  console.log('crearVec()')
  v.forEach((e,i,v) => {    
    //console.log('->v.map->e: '+e+' i:'+i+' v:'+JSON.stringify(v))   
    vAux[i]=e;
    if(i!==0){
      console.log('crearVec()->a buscar el mcd')
      let mcd = maxcd(v[i-1],e);
      console.log('crearVec()->a buscar el mcm')
      let mcm = mincm(v[i-1],e);
      console.log(' ->v[i]:'+v[i]+' v[i-1]:'+v[i-1]+' mcd:'+mcd+' mcm:'+mcm)
      if(( mcm !==e) && (mcd!==v[i-1] ) && !changed){
        vAux[i-1]=mcd;
        vAux[i]=mcm;
        changed = true;
      }/*else{        
        vAux[i]=e;        
      }*/
    }
  });
  /* while(!changed){
    for(var i=1;i<v.length;i++){
      let mcd = maxcd(v[i-1],e);
      let mcm = mincm(v[i-1],e);
      vAux[i-1]=mcm;
      vAux[i]=mcd;      
      if(( mcm !==e) && (mcd!==v[i-1] )) {
        changed=true;
        break;
      }
    }
  } */
  console.log('crearVec()->vAux:',vAux)
  return vAux;
}


function allOk(v){
  var acu=0;
  v.forEach((e,i,v)=>{
    //console.log('e->'+e+' i->'+i)
    if(i!==0) {
      /* console.log('e: '+e+' v[i-1]:'+v[i-1]);
      console.log('mcm: '+mincm(e,v[i-1]));
      console.log('mcd: '+maxcd(e,v[i-1]));
      console.log('VoF1: ',( v[i-1]===maxcd(e,v[i-1])));
      console.log('VoF2: ',( e === mincm(e,v[i-1])));
      console.log('VoF3: ',( e ===maxcd(e,v[i-1])));
      console.log('VoF4: ',( v[i-1]===mincm(e,v[i-1])));
      console.log('VoF (v[i-1]===maxcd(e,v[i-1]) && e===mincm(e,v[i-1])): ',(v[i-1]===maxcd(e,v[i-1]) && e===mincm(e,v[i-1])));
      console.log('VoF:(e===maxcd(e,v[i-1]) && v[i-1]===mincm(e,v[i-1]) ',(e===maxcd(e,v[i-1]) && v[i-1]===mincm(e,v[i-1])));
      console.log('VoF:(v[i-1]===maxcd(e,v[i-1]) && e===mincm(e,v[i-1]))||(e===maxcd(e,v[i-1]) && v[i-1]===mincm(e,v[i-1])) ',(v[i-1]===maxcd(e,v[i-1]) && e===mincm(e,v[i-1]))||(e===maxcd(e,v[i-1]) && v[i-1]===mincm(e,v[i-1])));
      if( (v[i-1]===maxcd(e,v[i-1]) && e===mincm(e,v[i-1]))||(e===maxcd(e,v[i-1]) && v[i-1]===mincm(e,v[i-1]))) {
        acu++;
      } */
      if( (v[i-1]===maxcd(e,v[i-1]) && v[i]===mincm(e,v[i-1]))) acu++;
    }     
  });
  if (acu===v.length-1) {
    console.log(' ->Vector OK (todos mcm y mcd)'+ '(cant ok-> '+acu+')')
    return true
  } else {
    console.log(' ->Vector NO OK (todos mcm y mcd)'+ '(cant ok-> '+acu+')')
    return false
  }
}

function maxim(v){
  return v.reduce((ac,va,ind,v)=>{
    console.log('acum->'+ac+' valActual->'+va+' indice->'+ind)
    if(ind===0)return 0;
    let mcd = maxcd(v[ind-1],va);
    let mcm = mincm(v[ind-1],va);
    let vAux = v;
    console.log('mcd: '+mcd+' mcm:'+mcm)
    vAux[ind-1]=mcd;
    vAux[ind]=mcm;
    console.log('vAux:',vAux)
    let m=sum(vAux)
    if(ac>m) m=ac;
    console.log('m:',m)
    return m;
  },0)
}

function maxcd(a,b){
  let mcd=0;
  console.log('   =>max comun divisor 1 ('+a+','+b+'): '+mcd);
  let valMax=(a<b)?b:a;
  let valMin=(a<b)?a:b;
  for(var i=0;i<valMin;i++){
    if(valMax%(valMin-i)===0 && valMin%(valMin-i)===0){
      mcd=valMin-i;
      break;
    }
  }
  console.log('   =>max comun divisor 2 ('+a+','+b+'): '+mcd);
  return mcd;
}

function mincm(a,b){
  let mcm=0;
  let valMax=(a<b)?b:a;
  let valMin=(a<b)?a:b;
  console.log('   =>min comun multiplo 1 ('+a+','+b+'): '+mcm);
  for(var i=0;i<Number.POSITIVE_INFINITY;i++){
    console.log('i: ',i)
    if((valMax+i)%valMax===0 && (valMax+i)%valMin===0){
      mcm=valMax+i;
      break;
    }
  }  
  console.log('   =>min comun multiplo 2 ('+a+','+b+'): '+mcm);
  return mcm;
}
function sum(v){
  var s=0;
  v.forEach(e =>s+=e);
  return s;
}
//maxcd(216,36)
//mincm(216,36)
//console.log(maxim(vec))
console.log(sum(getVec([93179,93187,93199,93229,93239,93241,93251,93253,93257,93263])))
//console.log(getVec(vec))
