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
