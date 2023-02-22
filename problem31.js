function makeChange() {
    const coins = [1,2,5,10,20,50,100,200];
    let table = [];
    for (let i = 0; i <= 200; i++) {
        table[i] = new Array(coins.length);
        table[i][0] = 1;
    }

    for (let a = 0; a <= 200; a++) {
        for (let b = 1; b < coins.length; b++) {
            table[a][b] = table[a][b-1];
            if (coins[b] <= a) {
                table[a][b] += table[a - coins[b]][b];
            }
        }
    }
    return table[200][coins.length-1];
}