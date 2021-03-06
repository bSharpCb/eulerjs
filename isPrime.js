function isPrime(num) {

  //checking function cache to see if this number has previously been checked
  if(isPrime.cache[num] != null){
    return isPrime.cache[num]
  }
  //running isPrime(1) will return false. Otherwise, prime is initialized as 'true'
  let prime = num != 1;

  //checking numbers (starting from 2) to see if any divide evenly into num. And if we find such a number...
  for(let i = 2; i < num; i++) {
    if(num % i == 0) {
      //...then we'll set prime to false, and break out of the loop
      prime = false;
      break;
    }
  }
  
  //caches the result to reduce runtime
  isPrime.cache[num] = prime;
  return prime;
}

//initialize a cache for isPrime, so we can store results 
isPrime.cache = {};

function primeFactors(n) {
  if(isPrime(n)){
    return `Please enter a composite number. ${n} is a prime number so its only factors are 1 and ${n}`;
  }
  let primeFactors = []; // array to hold prime factors as we find them
  while(n % 2 == 0){
    primeFactors.push(2);
    n = n / 2;
  }
  for(let i=3; i<=Math.sqrt(n); i+=2){
    if(n % i == 0){
      primeFactors.push(i);
      n = n / i;
    }
  }  
  return primeFactors;
}
