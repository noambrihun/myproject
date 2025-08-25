let x = 0;
while(x < 4 ) {
console.log("Hello world is equal to",x)
x++;
}

let str = "noam@Brihun";
let i;
for(i = 0; i<str.length;i++){
    let ch = str.charAt(i);
    if(ch === "@" || ch === "#" || ch === "!"){
        console.log("we found it: " + ch) ;
    }
}

function checkPrime(num){
   let i;
   if(num == 1 || num == 2){
      return true;
   }
     
   for(i=2 ; i<num ; i++){
         if(num%i==0){
             return false;
          }
      
   }
   return true;
}   

console.log(checkPrime(5));

let num = 1;
while(num < 100){
    if(num<0){
        	num*=-1;
        	num*=-1;
		
    }
        num++
        
	}	


function strText(text) {
    let letters = 0;
    let numbers = 0;
    let spaces  = 0;
    let specials = 0;
for(let i = 0; i < text.length; i++){
    let ch = text[i];
    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        letters++;
    }else if(ch >= '0' && ch <= '9'){
        numbers++;

    }else if(ch === ' '){
        spaces++;
    }else{
        specials++
    }
}
console.log("letters:", letters);
console.log("numbers:",numbers);
console.log("spaces:",spaces);
console.log("special characters ",specials);
}
strText("noam brihun1@");
