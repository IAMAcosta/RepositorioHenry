


var colores = ['Amarillo','Azul'];

colores.push('Rojo');//se agrega al final del array
colores.unshift('Verde');//se agrega al comienzo del array
//console.log(colores);
colores.pop();//elimina elultimo elemento del array
colores.shift();//elimina el primer elemento del array;
//console.log(colores);

//INCLUDES: si un arreglo incluye o no un elemento;

var pintores = ['Picasso','Van Gogh','Dali'];
var incluyeDali = pintores.includes('Dali');

//console.log(incluyeDali);


//EVERY : todos los elementos cumplen cierta condicion;
var numeros = [1,6,8,9];
var cumplenCondicion=numeros.every((num) => {
    return num > 5;
})
//console.log(cumplenCondicion);


//split: separar , join:unir . Nos permiten transformar strings en arreglos y arreglos en string;

var palabra = 'Henri';

var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
palabra = palabraSeparada.join('');
// console.log(palabra);

//forEach: no cambia el arreglo

var numeros = [3,2,3,4];
numeros.forEach((num) => {
    if (num==3){
        //console.log(num);
    }
});
//map: para cada elemento del arreglo realiza una funcion
var masUno = numeros.map (num => {return num+1});
console.log(masUno);

