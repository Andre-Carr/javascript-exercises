const findTheOldest = function(people) {
    /*
    const oldToYoung = people.sort(
        (a, b) => {
            const aAge = (a.yearOfDeath) ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
            const bAge = (b.yearOfDeath) ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;
            return aAge > bAge ? -1 : 1;
        });
    return oldToYoung[0];
    */
    const oldest = people.reduce(
        (oldest, person) => {
            const oldestAge = (oldest.yearOfDeath) ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
            const personAge = (person.yearOfDeath) ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
            return oldestAge > personAge ? oldest : person;
        }, {});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
