// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

let num1 = 12538;
let result = num1.toString().split('').reverse().join('');
console.log(result);


// ----------------------------------------------------------------


// 2. Write a JS function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alpha(str) {
    var arr = str.split(""); // splits the string
    res = arr.sort().join(""); // sort the array and joins to form a string
    return res; // returns the result
}
console.log(alpha("javascript"));


// -----------------------------------------------------------------


// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

function capitalizeFLetter() {
    let string = 'the quick brown fox';
    console.log(string[0].toUpperCase() + string.slice(1)); 
}
capitalizeFLetter()


// -----------------------------------------------------------------


// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longest(str){ 
    str = str.split(" ") // Split the string into array 
    return str.sort((a, b) => b.length - a.length)[0] // Return the first sorted item of the Array 
} 
console.log(longest("Web Development Tutorial"))