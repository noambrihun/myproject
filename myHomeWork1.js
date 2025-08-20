let num1 = 2;
let num2 = 3;
let num3 = 4;

let sum = num1 * num2 * num3;
console.log(sum);

let firstName = "John";
let lastName = "Doe";

let swap = firstName;
firstName = lastName;
lastName = swap;
console.log(firstName + " ");
console.log(lastName + " ");

let FullName = "Noam Brihun";
let updateName = FullName.replace(" ", "*");
console.log(updateName);

let num4 = 5;
let num5 = 2;
console.log(Math.pow(num4, num5));

let letter = "N";
let word = "brihun";
let middleIndex = Math.floor(word.length / 2);
let firstPart = word.slice(0, middleIndex);
let secondPart = word.slice(middleIndex);
let result = letter + firstPart + letter + secondPart + letter;
console.log(result);

let x1 = 10;
let x2 = 11;
let x3 = 12
let x4 = 13;
let x5 = 14;
let multip = x1 * x2 * x3 * x4 * x5;
console.log(multip);

let sumLastDigits = (x1 % 10) + (x2 % 10) + (x3 % 10) + (x4 % 10) + (x5 % 10);
console.log(sumLastDigits);

let str1 = "michael";
let str2 = "brihun";
let newStr = str1.concat(" ",str2);
console.log(" " + newStr);

let strLength = newStr.length;
console.log(strLength);

let firstName1 = "noam";
let lastName2 = "brihun";

let firstName1Length = firstName1.length;
let lastName2Length = lastName2.length;

console.log(firstName1Length);
console.log(lastName2Length);

let number = 43.4
console.log(Math.floor(number));

let number1 = 81;
console.log(Math.sqrt(number1));

let a = 22;
let n = 23;

a = a + n;
n = a - n;
a = a - n;

console.log("",a);
console.log("",n);
