function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}

function checkBigNums(){
    let numsArr = [];
    for(let q=999; q>99; q--){
        for(let w=999; w>99; w--){
            if(palindrome(JSON.stringify(w*q))){
                numsArr.push(w*q);
            }
        }
    }
    return Math.max(...numsArr);
    console.log('ah shit we done done it again');
}

//returns 906609
checkBigNums()
