document.getElementById("noam").innerHTML = "Hello Noam!";

document.getElementsByClassName("myClass")[0].innerHTML = "Welcome to my class!";

let name = ["noam","tomer","yoav","david"];
for(let i = 0; i < name.length; i++) {
if(name[i].length = 5) {
    console.log(name[i]);
}
} 

let number = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < number.length; i++) {
    if(number[i] % 4 <= 2){
        console.log(number[i]);
    }
}

const info = "hello world";
document.getElementById("hello world").innerHTML = info;
console.log(info);