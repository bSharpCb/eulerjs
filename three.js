function isPrime( num ) {
  if(isPrime.cache[num] != null){
    return isPrime.cache[num]
  }
  var prime = num != 1;
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      prime = false;
      break;
    }
  }
  isPrime.cache[num] = prime;
  return prime;
}

isPrime.cache = {};

function eulerThree(num){
let answer = 0;
let lilFactor = 3; 
let bigFactor;
while(!answer){
    if(num % lilFactor == 0){
        bigFactor = num / lilFactor;
        isPrime(bigFactor) ? answer = bigFactor : lilFactor++;
    }else{
        lilFactor++;
    }
    }
console.log(`The largest prime factor of ${num} is ${answer} (${lilFactor} * ${bigFactor} is ${num})`)
}

eulerThree(600851475143)
