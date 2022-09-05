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