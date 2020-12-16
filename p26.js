/* Problem 26
 * https://projecteuler.net/problem=26
 * 
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part
 */

/* Notes:
 * recurring cycles can be found in prime numbers (1/prime produces a recurring cycle)
 * instead of checking numbers 1-1000, check primes < 1000
 */ 

//isPrime function, return true/false
function isPrime(n){
    if(isPrime.cache[n]!=null){
        return isPrime.cache[n];
    }

    let prime = n!=1;

    for(let i=2; i<n; i++){
        if(n%i==0){
            prime = false;
            break;
        }
    }
    isPrime.cache[n]=prime;
    return prime;
}

//initialize cache for isPrime, for storing results
isPrime.cache={};


// algorithm for decimal expansion of rational numbers
// only works when number is repeating, i.e. dExp(6) will throw infinite loop

function dExp(n){
    let a = 1;
    let b = 0;
    do {
        a = a*10%n;
        b++;
    } while (a!=1);
    return b;
}

// make array to hold primes ranging 7-997
let primes = [];

for(let z=7; z<1000; z+=2){
    if(isPrime(z)){
    primes.push(z);
    }
}

let cycle = 6; // longest repeating reciprocal goes here
let max = 7; // if 1/d produces a repeating reciprocal longer than current value of cycle, d goes here

// iterating through primes array
for(p in primes) {
    let j = dExp(primes[p]);
    if(j>cycle){
        cycle = j;
        max = primes[p];
    }
}
console.log(`the repeating reciprocal for 1/${max} is ${cycle} digits long`);