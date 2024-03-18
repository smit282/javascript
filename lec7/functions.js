// function hello(a, b){
//     return arguments.length;
// }
// console.log(hello(1,2).toString())

// // -----------------------------------

// function add(...args){
//     let sum = 0;
//     for(let i=0;i<args.length;i++)
//     sum = sum + args[i];
// return sum;
// }
// console.log(add(1, 2, 9))

// // -----------------------------------

// function sum(...args) {
//     let sum = 0;
//     for(let arg of args) 
//     sum += arg;
// return sum;
// }
// // let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(add(4, 9, 16, 25, 29, 100, 66, 77));

// // -----------------------------------

// function addd(){
//     let sum = 0;
//     for(let i=0;i<arguments.length;i++)
//     sum = sum + arguments[i];
//     return sum;
// }
// console.log(addd(5,6,11,55));

// // -----------------------------------

// function adD(){
//     let sum = 1;
//     for(let i=0;i<arguments.length;i++)
//     sum = sum * arguments[i];
//     return sum;
// }
// console.log(adD(5,6,11));


// // generator
// function * hello()
// {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }

// let data = hello();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);


// // this keyword
// let person = {
//     "firstname" : 'smit',
//     "lastname" : 'thummar',
//     "age" : 18,
//     "hello":function(){
//         let data = this.firstname + this.lastname + this.age;
//         return data
//     }
// }
// console.log(person.hello());


function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(2,5)) // 10

console.log(10 == 10);    // true
console.log(10 === 10);   // true
