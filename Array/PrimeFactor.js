const prompt = require('prompt-sync')();

function isPrime(number) {
    if (number >= 2){
        let flag = 0;
        for (let index = 2; index <= number; index++) {
            if (number % index == 0) {
                flag = 1;
                break;
            }
            
        }
        if (flag = 0)
        return true;
    }
    return false;
}

let input = Number(prompt("Enetr a number : "));

let primeFactors = [];

for (let index = 2; index <= input; index++) {
    if (input % index == 0 && isPrime(index))
    primeFactors.push(index);
    
}
console.log("Prime Factor is : " +primeFactors);