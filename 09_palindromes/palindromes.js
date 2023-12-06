const palindromes = function (pali) {
const arr = [];
const word = pali.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"");

for(i = 0; i < word.length; i++) {
    arr[i] = word.charAt(i);
}

const reversedArr = arr.reverse().reduce((a, b) => {
    return a + b;
});

if(word === reversedArr) { 
    return true;
} else {
    return false;
}
 
};

// Do not edit below this line
module.exports = palindromes;
