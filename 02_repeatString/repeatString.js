const repeatString = function(str, num) {

  if(num == 0) {
    return "";
  }  
  else if (num < 0) {
    return "ERROR";
  }
  else {
let x = 0;
let foo = str;
while (x < num-1) {
    foo = foo + str;
    x++;
}
return foo;
  }

};

// Do not edit below this line
module.exports = repeatString;
