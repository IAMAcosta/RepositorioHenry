//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); //true
// '3' entre comillas es string, 3 es entero;
console.log (3 === "3"); // false
console.log (7 == "7"); 
console.log (7 === "7");

// =: Asignacion
// ==: Iguales
// ===: equivalencia / incluye tipo de dato

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c);
// de derecha a izq, entonces: a=b, por lo que a=2 y c=a;

// && and, || or, ! not 
//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 
// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // NOT
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);