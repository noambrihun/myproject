let num = 8;
const min = 1;
const max = 5;
let randomNumber = Math.floor(Math.random()*2) * (max - min) + min;
console.log('Random number between ' + min + ' and ' + max + ': ' + randomNumber);
let math = Math.pow(num + randomNumber, 2);
console.log(math);
let sum = (math +1) *5 % 10;


