//reminder about algorithms and math stuff

function gcd(n1,n2){
    if(n1==0){
        return n2;
    }
    return gcd(n2%n1, n1);
}

//isPrime function
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
// only works when number is repeating

function dExp(n){
    let a = 1;
    let b = 0;
    do {
        a = a*10%n;
        b++;
    } while (a!=1);
    return b;
}

let primes = [];

for(let z=7; z<1000; z+=2){
    if(isPrime(z)){
    primes.push(z);
    }
}

let cycle = 6;
let max = 7;

for(p in primes) {
    let j = dExp(primes[p]);
    if(j>cycle){
        cycle = j;
        max = primes[p];
    }
}
console.log(`the repeating reciprocal for 1/${max} is ${cycle} digits long`);