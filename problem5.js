// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function checkDiv(n) {
    for (let i=20; i>1; i--) {
        if (n%i !== 0) {
            return false;
        }
    }
    return true;
}

let b = 1000;
while (!checkDiv(b)) {
    b++;
}
console.log(b)