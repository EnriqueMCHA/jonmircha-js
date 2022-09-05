//Variables de ambito global
var global = 'Hello World';

//Variables de ambito de bloque
let block = 'Hello World';

console.log('****************var*******************');

var music = 'Rock';
console.log('Variable music before the block', music);

{
    var music = 'Rap';
    console.log('Variable music inside the block', music);
}

console.log('Variable music after the block', music);

console.log('****************let*******************');

let music1 = 'Rock';
console.log('Variable music before the block', music1);

{
    let music1 = 'Rap';
    console.log('Variable music inside the block', music1);
}

console.log('Variable music after the block', music1);