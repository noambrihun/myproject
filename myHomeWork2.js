function numSmaller(a,b){
 if(b<a){
    console.log(b);
 }else{
    console.log(a);
 }
}

numSmaller(5,4);

function countLongStrings(str1,str2,str3,str4){
    let count = 0;
    if(str1.length > 3){
        count++;
    
    }if(str2.length > 3){
        count++;

    }if(str3.length > 3){
        count++;

    }if(str4.length > 3){
       count++;
    }

    console.log("there are " + count + " strings longer than 3 characters");
}

countLongStrings("hi","hello","dog","waterMelon");

function replaceWitha(input){
    let result = "";

    for( let i = 0;  i < input.length; i++){
        let charCode = input.charCodeAt(i);

        if(charCode == 65) {
            result += String.fromCharCode(97);
        }else {
            result += input[i];
        }
    }
     console.log(result);
     document.getElementById("input").value = result;
}

const input = document.getElementById("input").value;
replaceWitha(input);

function checkNumber(num){
    if(num > 0) {
console.log("Positive");
    }else if(num < 0){
console.log("Negative");
    }

    if(num % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

checkNumber(8);

function checkString(str) {
    if (str[0] == str[str.length - 1]) {
        let newStr = str.slice(1, str.length - 1);
        console.log(newStr);
    } else {
        console.log(str);
    }
}

checkString("level");

function checkString1(str){
    if(str.indexOf("*") !== -1){
        console.log(":",str.replace(/\*/g, ""));
    }else if(str.indexOf("@") !== -1){
        console.log(": *" + str + "*");
    }else if(str.indexOf("₪")){
        console.log("new shekel")
    }
}
checkString1("email@");