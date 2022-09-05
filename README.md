# Curso JavaScript de JonMircha by Enrique Ch.

> ### Var vs Let

Se considera mala práctica usar `var` por el hecho de que se declara en el ambito global, aunque en casos muy puntuales se puede utilizar sin problemas.

```JS

//Variables de ambito global
var global = 'Hello world';

//Variables de ambito de bloque
let block = 'Hello world';

```

> ### Const (constantes)

- No se pueden declarar variables `const` vacías

- Los datos primitivos los cuales se puede acceder directamente al valor (string, number, boolean, null, NaN, undefined) no puede redefinirse ni ser cambiados.

- Los datos compuestos los cuales se accede a la referencia del valor (object, array, function, class, etc...) sí se les puede añadir/quitar propiedades.

- Si nuestra variable cambiará el tipo de dato en el flujo de nuestro programa, es conveniente usar `let`. Si nuestra variable siempre será un objeto, array y no puede cambiar su tipo de dato o sus valores (en el caso de los datos primitivos), podemos usar `const`.

```JS

const PI; //Error
const PI = 3.1416;
PI = 3.15; // Error

const user = {
    name: 'Enrique',
    pass: '123456'
}

console.log(user);
//Output: {name: 'Enrique', pass: '123456'}

user.name = 'Miguel'; //Válido
user.email = 'enrique@gmail.com' //Válido

console.log(user);
//Output: {name: 'Miguel', pass: '123456', email: 'enrique@gmail.com'}

```

> ### String

```JS

//Create a string
let string = new String('Hello world');
let stringGod = 'Hello World';
let stringGodV2 = `Hello World`;

let test = '    This is a example, string!';

//Property 'length'
console.log(test.length);
//Output: 30

//Method 'toUpperCase()'
console.log(test.toUpperCase());
//Output: '    THIS IS A EXAMPLE, STRING!'

//Method 'toLowerCase()'
console.log(test.toLowerCase());
//Output: '    this is a example, string!'

//Method 'includes()'
console.log(test.includes('is'));
//Output: true

//Method 'trim()'
console.log(test.trim());
//Output: 'This is a example, string!'

//Method 'split()'
console.log(test.split(','));
//Output: ['    This is a example', ' string!']

//Concatenation
let firstMessage = 'Hello';
let secondMessage = 'World';

let unionMessage = firstMessage + ' ' + secondMessage;

console.log(unionMessage);
//Output: 'Hello World'

//Concatenation 2nd method
let message = 'Hello';
message += ' World';

console.log(message);
//Output: 'Hello World'

//Template String
let unionMessage2 = `${firstMessage} ${secondMessage}`;

console.log(unionMessage2);
//Output: 'Hello World'

```

> ### Number

```JS

//Declaration
let number1 = 1;
let number2 = new Number(2);

let testNumber1 = 1.8932;
let testNumber2 = 4.12;
let testNumber3 = '21.22';

console.log(testNumber2, testNumber3);

//Method 'toFixed()'

console.log(testNumber1.toFixed(3));
//Output: '1.893'

//Method 'parseInt()'

console.log(parseInt(testNumber1));
//Output: 1

//Method 'parseFloat'

console.log(parseFloat(testNumber3));
//Output: 21.22

//Using Number Constructor

console.log(Number.parseFloat(testNumber3));
//Output: 21.22

```

> ### Boolean

Truthy y Falsy.

> ### undefined, null, NaN

Undefined indica que no se ha inicializado una variable y que el valor está ausente.

```JS

let undefined;
console.log(undefined);
//Output: undefined

```

Null es un valor especial que indica la ausencia de un valor.

```JS

let null = null;
console.log(null);
//Output: null

```

Not a Number, por su siglas en inglés NaN, indica que uno de los valores no es un número.

```JS

let notANumber = 'hello' / 2.1;
console.log(notANumber);
//Output: NaN

```




