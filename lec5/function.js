// hoisting
square('10','5') //function call

// defination
function square(a,b){
    console.log(a*b);
}

function add(a,b)
{
    return a + b;
}
console.log(add(5,15));

let z = add(10,15);
console.log(z);

// anonymous function
let product = function (x,y){
    return x * y;
};
console.log(product(11,2));

// IIFE
let x = (function hello(a,b)
{
    return (a-b);
})

("10",15);
console.log(x);

(function hello()
{
    console.log("hello world");
})();

// arrow function
function add(a,b){
    return a + b;
}

let add = (a,b) => {
    return a + b;
}
let add = (a,b) => a + b;
console.log(add(12,65));


// function constructor
let hello = new Function("a", "b", "return a*b");
console.log(hello(12,5));