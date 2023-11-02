const palindromes = function (phrase) {
    // convert the string into an Array to make it easier to reverse the second half
    const noPunct = Array.from(phrase.toLowerCase()).filter(
        (letter) => (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57) 
        || (letter.charCodeAt(0) >=97 && letter.charCodeAt(0) <= 122)
    );

    let firstHalf = '';
    let lastHalf = '';
    if (noPunct.length % 2) {
         firstHalf = noPunct.slice(0, noPunct.length / 2).join('');
         lastHalf = noPunct.slice(noPunct.length / 2 + 1).reverse().join('');
    } else {
         firstHalf = noPunct.slice(0, noPunct.length / 2).join('');
         lastHalf = noPunct.slice(noPunct.length / 2).reverse().join('');
    }
    return firstHalf === lastHalf;
};

// Do not edit below this line
module.exports = palindromes;
