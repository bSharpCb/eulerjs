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

//one solution could be making a list of allllll the prime factors, and then simply returning the largest one
//however, a much faster solution would be to look at each factor pair (e.g. 3 and 5 are a factor pair of 15)
//we create two variables (lilFax, bigFax) and then continuously increment lilFax while checking whether it's a factor of num
//whenever lilFax becomes a factor of num, we'll update bigFax to (num/lilFax)
//as lilFax grows, bigFax becomes smaller. So we can stop checking after the first time isPrime(bigFax) returns true

function eulerThree(num){
  let answer = 0;
  let lilFax = 2; 
  let bigFax;
  
  //because 0 evaluates false, !answer evaluates true until we change its value
  while(!answer){
    if(num % lilFax == 0){
      bigFax = num / lilFax;
      isPrime(bigFax) ? answer = bigFax : lilFax++;
    }else{
      lilFax++;
    }
  }
console.log(`The largest prime factor of ${num} is ${answer} (${lilFax} * ${bigFax} is ${num})`)
}

eulerThree(600851475143)
