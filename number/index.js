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
