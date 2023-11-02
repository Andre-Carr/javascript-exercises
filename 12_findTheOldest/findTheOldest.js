const findTheOldest = function(people) {
    
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
