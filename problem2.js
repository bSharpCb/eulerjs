function fibonacci(n){
//where n represents the nth term of the fibonacci sequence
    if(n<=1){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

let sum = 0;
for(let i=1; fibonacci(i) < 4000000; i++){
    fibonacci(i)%2==0 ? sum+= fibonacci(i) : sum = sum;
}
console.log(sum)
