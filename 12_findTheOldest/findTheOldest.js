
const findTheOldest = function(oldest) {
let oldestPerson = null;
let oldestAge = 0;

for(i = 0; i < oldest.length; i++) {

    const person = oldest[i];

    const age = person.yearOfDeath - person.yearOfBirth || new Date().getFullYear() - person.yearOfBirth;

    if (age > oldestAge) {
    oldestPerson = person;
    oldestAge = age;
    }


}
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
