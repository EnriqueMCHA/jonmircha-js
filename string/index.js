let test = '    This is a example, string!';

//Property 'length'
console.log(test.length);

//Method 'toUpperCase()'
console.log(test.toUpperCase());

//Method 'toLowerCase()'
console.log(test.toLowerCase());

//Method 'includes()'
console.log(test.includes('is'));

//Method trim()
console.log(test.trim());

//Method split()
console.log(test.split(','));

let firstMessage = 'Hello';
let secondMessage = 'World';

let unionMessage = firstMessage + ' ' + secondMessage;

console.log(unionMessage);
//Output: 'Hello World';

//Concatenation 2nd method
let message = 'Hello';
message += ' World';

console.log(message);
//Output: 'Hello World'

//Template String

let unionMessage2 = `${firstMessage} ${secondMessage}`;

console.log(unionMessage2);
//Output: 'Hello World';