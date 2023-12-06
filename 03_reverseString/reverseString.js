const reverseString = function(word) {
let reverse = "";
for (i = 0; word.length >= i; i++)
{ 
    reverse += word.charAt(word.length-i);
}
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
