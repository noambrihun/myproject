function isVailaId(id){
    if(id.length !== 9){
        return false;
}
for(let i = 0; i < id.length; i++){
    let ch = id[i];
    if(ch < '0' || ch > '9'){
        return false
    }
}
return true
}

function checkId(){
    let id = document.getElementById("idInput").value;
    let result = isVailaId(id);
   if(result){
    document.getElementById("result").textContent = "OK";
   }else{
     document.getElementById("result").textContent =  " ERROR";
   }
    
    
}

checkId("213730559");

function isPrime(num){
    if(num <= 1){
        return false;
    }

    for( let i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

function addSpaceBeforeUpper(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        const ch = str[i];
        if(i > 0 && ch >= 'A' && ch <= 'Z'){
            result += ' ';
        }
        result += ch;
    }      
    return result;
}

console.log(addSpaceBeforeUpper("noAm"));
console.log(addSpaceBeforeUpper("avilA"));
console.log(addSpaceBeforeUpper("svcollEge"));

function twoStrings(big ,small){
    if(small.length === 0 || small.length > big.length) {
        return 0;
    }
        let count = 0;
        for(let i = 0; i <= big.length - small.length; i++){
            let match = true ;

            for( let j = 0; j < small.length; j++){
                if(big[i + j] != small[j]){
                    match = false;
                    break;
                    
            }
           }
              if(match){
                    count++
                }
        }
    return count
}
console.log(twoStrings("banana","na"));

function string(str){
    let arr = str.split("");
    for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
         if(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;

         }
    }
}
return arr.join("");       

}

console.log(string("ebcda"));
console.log(string("loan"));
