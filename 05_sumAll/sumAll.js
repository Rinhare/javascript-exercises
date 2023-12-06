const sumAll = function(start, end) {
    
    let first = start;
    let last = end;

    if(start < 0 || end < 0 || isNaN(start) || isNaN(end) || typeof start === "string" || typeof end === "string" ) {
        return 'ERROR';
    }

    if(start > end){
     first = end;
     last = start;
    }
    
    let answer = 0;
    let foo = first;
    let bar = 0;

do {
    answer = foo + bar;
    bar = foo + bar;
    foo++;
    first++;
} while(first <= last)

return answer;
  }

// Do not edit below this line
module.exports = sumAll;
