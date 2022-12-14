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

> ### Asíncronía en Javascript



Código Síncrono Bloqueante:

```JS

(() => {

    console.log('Start');

    function two(){

        console.log('Two');
    }

    function one(){

        console.log('One');
        two();
        console.log('Three');
    }

    one();
    console.log('End');

})();

//Output: One, Two, Three, End
```

Código Asíncrono No Bloqueante:

```JS

(() => {

    console.log('Start');

    function two(){

        setTimeout(() => {
            
            console.log('Two');
        }, 1000);
    }

    function one(){

        setTimeout(() => {
            
            console.log('One');
        }, 0);
        two();
        console.log('Three');
    }

    one();
    console.log('End');

//Output: Three, End, One, Two
```

> ### Symbol

- Crear elementos/propiedades privadas dentro de los objetos con una referencia única.

- No es necesario usar el operador `new`.

- Para su uso es necesario el uso de `[]`.

```JS

let newSymbol = Symbol('newSymbol');
let listSong = Symbol();

console.log(typeof newSymbol, typeof listSong); //symbol
console.log(newSymbol === listSong); // False

const music = {
    
    [newSymbol]: 'Here Without You',
    [listSong](){

        console.log('Don\'t Stay');
    }
}

console.log(music); 
//Output: {Symbol(newSymbol): 'Here Without You', Symbol(): ƒ}

music[listSong]();
//Output: Don't Stay

music[listSong] = function(){

    console.log('Don\'t Stay');
    console.log('Numb');
}

music[listSong]();
//Output: Don't Stay, Numb

```

> ### Set

- Nos permite crear una especie de `array` pero donde no se pueden repetir los valores.

- Permite el uso de forEach y for of.

- Para acceder a los valores individualmente hay que convertir el Set a Array.

- Para conocer la cantidad de elementos no sería con `length` sino con `size`.

```JS

const newSet = new Set();

newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(3);

console.log(newSet);
//Output: {1,2,3}   
        
newSet.delete(3);
console.log(newSet);
//Output: {1,2}

console.log(newSet[0]); //undefined

//Set to Array
const array = Array.from(newSet);
        
console.log(array[0]); //1

newSet.clear();
console.log(newSet); //Output: {}

```

> ### Map (Tipo de dato)

- Cuenta con métodos/propiedades similares a los `Set`.

- Son similares a los array indexados.

```JS

const newMap = new Map();

newMap.set('name', 'Enrique');
newMap.set('name', 'Enrique');
newMap.set('lastName', 'Chacon');
newMap.set('email', 'enrique.chacon.com');

console.log(newMap);
//Output: {'name' => 'Enrique', 'lastName' => 'Chacon', 'email' => 'enrique.chacon.com'}

console.log(newMap.get('name')); //Output: Enrique

newMap.delete('email');
console.log(newMap);
//{'name' => 'Enrique', 'lastName' => 'Chacon'}
        
for (let [index,value] of newMap) {

    console.log(index, value);
    //Output: 'name Enrique', 'lastName Chacon'
}

const mapKeys = [... newMap.keys()],
mapValues = [... newMap.values()];

console.log(mapKeys); //Output: ['name', 'lastName']
console.log(mapValues); //Output: ['Enrique', 'Chacon']

```

> ### WeakSet y WeakMap 

- No se pueden interar los datos.

- No se puede hacer uso del método `clear();` ni la propiedad `size`.

- No se puede asignar valores desde el constructor, para ello se usa el método `add();` en el caso de los Set y `set();` en el caso de los Map. Y estos deberán pasarse por referencia.


> ### Generations (Generadores)

- Sirven para volver una función iterable.

- Permite una asincronía no bloqueante a diferencia del `async/await` que sí es bloqueante.

```JS

function * iterableFunction(){

    yield 'First yield';
    yield 'Second yield';
    yield 'Third yield';
}

let iterable = iterableFunction();

//Acceder manual
// console.log(iterable.next().value);
// console.log(iterable.next().value);
// console.log(iterable.next().value);
        // console.log(iterable.next().value);

for (const y of iterable) {

    console.log(y);
    //Output: First yield, Second yield, Third yield
}

const resultYield = [...iterableFunction()];
//Output: [First yield, Second yield, Third yield]

function squareFunction(value){

    setTimeout(() => {
                
        return console.log(value, value * value);

    }, Math.random() * 1000);
}

function * squareGenerator(){

    yield squareFunction(2);
    yield squareFunction(7);
    yield squareFunction(21);
}

const generator = squareGenerator();

for (let y of generator) {
            
    console.log(y) //undefined
}

```

> ### Proxies (Proxy)

- Hace una vinculación con el objeto original y el copia.

- A través de su manejador (handler) podemos hacer las validaciones, antes de la asignación de datos.

```JS

//Objeto original
const user = {
    name: "",
    lastName: "",
    email: "",
    dni: 0,
};

//Majenador
const handler = {
    set(obj, prop, value) {
        //Validaciones

        //Validar que solo se permitan las propiedades del objeto original
        if (Object.keys(obj).indexOf(prop) === -1) return console.error(`La propiedad ${prop} no existe en el objeto 'user'`);

        if (prop === "dni" && !/^[0-9]{7}$/g.test(value)) return console.error(`El dni ${value} es inválido`);

        obj[prop] = value;
    },
};

const enrique = new Proxy(user, handler);

enrique.name = "Enrique";
enrique.lastName = "Chacón";
enrique.email = "enrique.chacon.com";
enrique.dni = 1234567;
enrique.test = "random"; //error

console.log(enrique);
//Output: {name: 'Enrique', lastName: 'Chacón', email: 'enrique.chacon.com', dni: 1234567}

```

> ### Propiedades dinámicas de los objetos

```JS

let random = Math.round(Math.random() * 100 + 3);

const users = ['Enrique','Keice', 'Kease'];

const objUser = {
    
    //Crear propiedades dinámicas
    [`id_${random}`]: 'Random Value'
}

users.forEach((value,index) => {

    objUser[`id_${index}`] = value;
})

console.log(objUser);
//Output: {id_xx: 'Random Value', id_0: 'Enrique', id_1: 'Keice', id_2: 'Kease'}
```

> ### This (apply, call, bind)

- Contexto global es `window`.

- Los métodos `apply` y `call` cumplen con el mismo funcionamiento, pero los atributos se pasan diferente. En `call` se pasan separados por comas y `apply` con un `array`.

- Se puede pasar como objeto el valor `null`, el cual se regresará al contexto global.

- El método `bind` nos permitirá conectar contextos diferentes.

```JS

this.context = 'Global Context';

function rateMusic(music, score){

    console.log(`The music ${music} has the following score ${score} in the ${this.context}`);
}

rateMusic('Numb',9.1);
//Output: The music Numb has the following score 9.1 in the Global Context

const music = { 

    context: 'Object Context',
    rateMusic: function(){
        console.log(`${this.context}`);
    }
}

rateMusic.apply(music,['Breaking the Habit',11]);
//Output: 'The music Breaking the Habit has the following score 11 in the Object Context'

rateMusic.apply(null,['Breaking the Habit',11]);
rateMusic.apply(this,['Breaking the Habit',11]);
//Output: 'The music Breaking the Habit has the following score 11 in the Global Context

const music2 = {

    //rateMusic: music.rateMusic //undefined
    //rateMusic: music.rateMusic.bind() //Global Context
    rateMusic: music.rateMusic.bind(music) //Object Context
}

music.rateMusic();
music2.rateMusic();

```
