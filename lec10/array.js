// const arr = [1, 2, 3, 4, 'skill', true, false];
// console.log(arr);
// console.log(arr[5]);
// console.log(arr.length);

// array methods
const data = [11, 22, 33, 44, 55];
console.log(data);

// push methods
data.push(66);
data.push(77, 88, 99);
console.log(data);

// pop methods
data.pop()
console.log(data);

// shift and unshift
data.unshift(110)
data.unshift(220, 330)
console.log(data);

data.shift();
console.log(data);

// concat
let arr = ['skill','qode'];
console.log(data.concat([99, 88, 77, 66],['hello','world'],arr));

// reverse
console.log(data.reverse());

// sort method
let txt = [88, 266, 11, 133, 44, 22, 155, 99];
console.log(txt.sort((a,b) a-b));