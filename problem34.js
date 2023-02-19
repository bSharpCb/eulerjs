// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

// factorial cache
let fc = [1];

function factorial (n) {
    let sum = 1;
    while (n>0) {
        sum *= n;
        n--;
    }
    return sum;
}

const limit = factorial(9) * 7;

for (let i=1; i<10; i++) {
    fc[i] = factorial(i);
    console.log(fc[i]);
}

function digitSum(n) {
    let sum = 0;
    while (n>0) {
        sum += fc[n%10];
        n = n/10|0;
    }
    return sum;    
}

function checkNums() {
    let sum = 0;
    for (let a=3; a < limit; a++) {
        if (a === digitSum(a)) {
            sum += a;
        }
    }
    return sum;
}