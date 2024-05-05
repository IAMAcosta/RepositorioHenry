
var numeros=[1,2,3,4,5,6,7,8,9,10];


/* for( let i=0; i< numeros.length ;i+=2){
    console.log(numeros[i]);
} */

function encontrarP(palabra){

    var palabraSeparada=palabra.split('');
    var i=0;

console.log(palabraSeparada);

    while (i < palabraSeparada.length ){

        if( palabraSeparada[i] == 'p'){
            console.log("COntiene P");
        }   i++;
        
    }
}

encontrarP('tucumapo');