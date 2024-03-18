// property
// let data = '        JAVAscript LEARning         ';
// console.log(data.length);
// console.log(data[8]);

// console.log(data.split(''))

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// console.log(data.length);
// console.log(data.trim());
// console.log(data.trim().length);
// console.log(data.trimEnd());
// console.log(data.trimEnd().length);
// console.log(data.trimStart());
// console.log(data.trimStart().length);

// let txt = '1251'
// console.log(data.padStart(10,'x'));
// console.log(data.padEnd(10,'x'));

// let data = 'JavaScript is a text-based programming language.';

// slice method (start, end)

// let str = data.slice(4, 20);
// // let str = data.slice(4);
// let str = data.slice(-20, 20);
// console.log(str);
// console.log(data);

// subString (start, end)

// let str = data.substring(4,20);
// let str = data.substring(4);
// let str = data.substring(-20);
// console.log(str);

// subStr (start, length)

// let str = data.substr(4, 20); 
// let str = data.substr(4); 
// let str = data.substr(-34, 10); 
// console.log(str);

// concat
// let skill = 'Hello Skillqode, ';
// console.log(skill.concat(data, '\n\nhello piyush how are you??','hello nikhil how are you??'));

// // charAt
console.log(data.charAt(0))
console.log(data.charCodeAt(0))

// let data = 'Javascript is a text-based programming language. Javascript is used to web pages.';
// data = data.replace(/Javascript/g, 'C Language')
data = data.replaceAll('Javascript', 'C Language')
console.log(data);


let text = "HELLO WORLD";
let data = text.split(",") // Split on commas
let data1 = text.split(" ") // Split on spaces
let data2 = text.split("|") // Split on pipe
console.log(data);