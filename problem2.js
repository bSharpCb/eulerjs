function fibonacci(n,cache){
//where n represents the nth term of the fibonacci sequence
    cache = cache||{};
    if(cache[n]){
        return cache[n]
    }
    if(n<=1){
        return 1
    }
    return cache[n] = fibonacci(n-1,cache) + fibonacci(n-2,cache)
}

let sum = 0;
for(let i=1; fibonacci(i) < 4000000; i++){
    fibonacci(i)%2==0 ? sum+= fibonacci(i) : sum = sum;
}
console.log(sum)
