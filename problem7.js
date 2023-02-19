function isPrime(num) {
    isPrime.cache=[];
    if(isPrime.cache[num] != null){
      return isPrime.cache[num]
    }
    let prime = num != 1;
    for(let i = 2; i < num; i++) {
      if(num % i == 0) {
        prime = false;
        break;
      }
    }
    isPrime.cache[num] = prime;
    return prime;
  }

  let primes = [];

  for (let a=2; primes.length < 10001; a++) {
    if (isPrime(a)) {
        primes.push(a);
    }
  }
  console.log(primes[10000]);