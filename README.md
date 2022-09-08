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

> ### Function

Las funciones en js son un tipo especial de objetos.

Existen dos formas de crear una función, declarada o expresada. La primera, es la forma común, mientras que la segunda es asignandola a una variable. La diferencia entre ambas, es que la primera forma, permite invocar la función en cualquier parte de tu código (incluso antes de su creación), mientras que la segunda opción, solo te permite invocar la función después de ser creada.

```JS

//Invoke function
thisIsAFunction(); //Valid

//Declared function
function thisIsAFunction(){

    console.log('One');
    console.log('Two');
    console.log('Three');
}


//Invoke function
thisIsAFunction(); //Valid


//Invoke function
expressedFunction(); //Error

//Expressed function
const expressedFunction = function(){
        
    console.log('Expressed Function');
}

//Invoke function
expressedFunction(); //Valid

```

> ### Array

```JS

//Method Fill
const usingFill = Array(100).fill(true);

console.log(usingFill);
//Output: [true, true, true, true, true...]

```

> ### Object

Se puede utilizar la palabra reservada `this` para referirse al mismo objeto.

Si le asignaremos datos a un objeto mediante variables y estas cuentan con el mismo nombre de la propiedad/atributo, podremos hacer lo siguiente:

```JS

let user = 'enrique123',
pass = '123456'

const profile = {
    user,
    pass
}

console.log(profile.pass);
//Output: '123456'

```

También en vez de colocar los métodos como usualmente se hace (es decir, `key: function(){}`) podemos hacerlo de esta manera:

```JS

const human = {
    cry(){
        console.log(':(');
    }
}

human.cry();
//Output: ':('

```



> ### Loop

For in se suele utilizar para los objetos únicamente.

```JS
//For in

const user = {
    name: 'Enrique',
    lastName: 'Chacón'
};

for(const property in user){
         
    console.log(`Key: ${property}, Values: ${user[property]}`);
    //Output: 'Key: name, Values: Enrique', 'Key: lastName, Values: Chacón'
}

```

For of se utiliza para cualquier objeto que pueda ser iterable (array, string, etc...)

```JS
//For of

const array = [5,4,3,2,1];

for(const iterator of array){

    console.log(iterator);
    //Output: '5,4,3,2,1'
}

```

> ### Destructuración

La destrucutración nos permite la asignación de datos/valores a variables de una manera más sencilla.

```JS

//Example 1 
const numbers = [7,8,9];

const [seven,eight,nine] = numbers;

console.log(seven);
//Output: 7

```

En el caso de las destructuración de objetos, las propiedades/atributos deben llamarse igual a las variables, sino nos arrojará 'undefined'

```JS

const blink182 = {
    firstDate: '9.5',
    whatsMyAgeAgain: '8.8',
    iMissYou: '9.9',
    theRockShow: '9.1'
}


let {firstDate, whatsMyAgeAgain, iMissYou, theRockShow} = blink182;

console.log(firstDate);
//Output: '9.5'

let {allTheSmallThings} = blink182;

console.log(allTheSmallThings);
//Output: undefined

```

> ### REST params and spread operator

Los parametros rest nos permiten recibir más parametros en una función sin la necesidad de colocarlos, ej:

```JS

function multiply(firstNumber, secondNumber, ...anyNumber){

    let result = firstNumber * secondNumber;

    anyNumber.forEach(function(number){

        result *= number;
    });

    return result;
}

console.log(multiply(1,2,3,4,5));
//Output: '120'

```

En el caso del **spread operator** podemos usarlo con array por ej:

```JS

const array1 = [true,false],
array2 = [1, 0];

const array3 = [...array1, ...array2];

console.log(array3);
//Output: [true, false, 1, 0]
//Output without spread operator (...): [array(2), array(2)]

```

> ### Arrow Function

- Usa un `return` implicito sin usar `{}`:

```JS

const multiply = (a,b) => a * b;
        
console.log(multiply(2,2));
//Output: 4;

```

- No respeta el contexto en el que se encuentra `this` sino que hereda (por así decirlo) el del padre:

```JS

const litObject = {

    sayHello: () => {
        console.log(this);
    },

    sayGoodbye: function(){
        console.log(this);
    }
}

litObject.sayHello(); //Output object Window
litObject.sayGoodbye(); // Output litObject

```

> ### Prototypes

Las clases en js funcionan mediante prototipos, los cuales a su vez son similares a las clases. Para crear un prototipo podemos hacerlo mediante una función constructura de esta manera:

```JS

//Función constructura
function User(nickname, password){

    //Atributos
    this.nickname = nickname;
    this.password = password;

    //Métodos si el prototipo los necesita aunque es recomendable establecerlos afuera de la función constructura

    this.login = function(){

        console.log('Login Successful');
    }
}

User.prototype.logout = function(){

    console.log('Logout Successful');
}

const newUser = new User('EnriquE','123456');

newUser.login(); //Output: 'Login Successful'
newUser.logout(); //Output: 'Logout Successful'

```

Al igual que las clases, los prototipos pueden ser heredados por otros e incluso redefinir sus métodos, por ejemplo siguiendo el ejemplo anterior:

```JS

//Herencia prototípica
function Admin(nickname,password,auth){
            
    this.super = User;
    this.super(nickname,password);
    this.auth = auth;
}

//Admin está heredando de User
Admin.prototype = new User();
Admin.prototype.constructor = Admin;

//Redefinir métodos heredados
Admin.prototype.logout = function(){

    console.log('Logout Successful Admin');
}

Admin.prototype.subscription = function(auth){

    console.log(`Your subscription right now is: ${auth}`);
}

const userAdmin = new Admin('EuqirnE','123456','Admin+');

userAdmin.logout(); //Output: 'Logout Successful Admin'
userAdmin.subscription(userAdmin.auth); 
//Output: 'Your subscription right now is: Admin+'

```

> ### Class

```JS

class User{

    constructor(nickname, password){

        this.nickname = nickname;
        this.password = password;
    }

    //Métodos
    login(){
        console.log('Login successful!');
    }
        
    logout(){
        console.log('Logout successful!');
    }
}

const _user = new User('EnriquE','123456');

_user.login();

```

Herencia de clases:

```JS

class Admin extends User{

    constructor(nickname, password, auth){

        super(nickname, password);
        this.auth = auth;
    }

    login(){

        console.log('Login successful admin!');
    }
    
    subscription(auth){

        console.log(`Your subscription right now is: ${auth}`);
    }
}

const _admin = new Admin('EuqirNe','123456','Admin+');

_admin.login();
_admin.subscription(_admin.auth);

```

Para los métodos estáticos se declara el método de la siguiente manera:

```JS

class Random{


    static randomMethod(){

        console.log('Random');
    }
}

Random.randomMethod(); //Output: 'Random'

```

Podemos establecer los getters y setters de los atributos usando las palabras reservadas `get` y `set` en los métodos de la siguiente manera:

```JS

class Random {

    constructor(){

        this.dataRandom = null; 
    }

    get getDataRandom(){

        return this.dataRandom;
    }

    set setDataRandom(dataRandom){

        this.dataRandom = dataRandom;
    }
}

const _random = new Random();

_random.setDataRandom = 'Random attribute';

console.log(_random.getDataRandom); //Output: 'Random Attribute'

```

> ### Operador cortocircuito (|| / &&)

```JS

//Or válida si es true el primero y lo muestra en caso de ser cierto

let condition = 'SoyGod' || false;

console.log(condition) //Output: 'SoyGod'

//And válida si es true el primero y de serlo muestra el segundo

condition = true && 'SoyGod';

console.log(condition) //Output: 'SoyGod'


```

