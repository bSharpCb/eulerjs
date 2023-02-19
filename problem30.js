// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

// upperbound limit 
const limit = Math.pow(9,5) * 6;

// 5th powers cache
let pow = [];

for (let i=0; i<10; i++) {
    pow[i] = Math.pow(i,5);
    console.log(pow[i]);
}

function digitSum(n) {
    let sum = 0;
    while (n>0) {
        sum += pow[n%10];
        n = n/10|0;
    }
    return sum;    
}

function checkNums() {
    let sum = 0;
    for (let a=2; a < limit; a++) {
        if (a === digitSum(a)) {
            sum += a;
        }
    }
    return sum;
}