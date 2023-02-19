function sumSq(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += Math.pow(i,2);
    }
    return sum;
}

function sqSum(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum +=i;
    }
    return Math.pow(sum,2)
}

const answer = sqSum(100) - sumSq(100)
// 25164150