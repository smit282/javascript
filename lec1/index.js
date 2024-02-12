// What is javascript
/*
-> JavaScript is a dynamic computer programming language.
-> It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.
-> JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.Complementary to and integrated with HTML.Open and cross-platform
*/

/****   JavaScript Values   ****/
//  -> The JavaScript syntax defines two types of values
 
/*
    -> Fixed values are called Literals.
    -> Variable values are called Variables.
 */

/**** Using console in javascript ****/

/**** var variable type / box variable name / = assignement / 60 assiged values ****/

// javascript language case-sensitive 

/**************** variable useing var() in javascript *************************/

{
    var number1 = 20;
    var number2 = 20;
    var Total = number1 + number2;
    var number2 = 40;
    console.log(number2);
    console.log(Total)
}



/*******New Html Element Add In Though Javascript *********/

{
    // var newelement = document.createElement("h1");
    // newelement.textContent="hello world";
    // document.body.appendChild(newelement);
    
    // var newelement=document.createElement("marquee" , Option);
    // newelement.textContent="hello world";
    // document.body.appendChild(newelement);
    
    // var newelement=document.createElement("pre");
    // newelement.textContent="how are you!";
    // document.body.appendChild(newelement);
}

// js comments

// single-line comments

/* multi-line 
comments */


// Template Literals

{
    var _nameone = 20 - 20 - '5';
    // var _nametwo= '5';
    console.log(_nameone);
    console.log(typeof(_nameone));

    var one = 20
    var two = 40

    var three = "one 'two'"
    console.log(three);

    var four  = 'one "two"'
    console.log(four);

    var five = `''one' "two"`
    console.log(five);

    var six = `${one} + ${two}`
    console.log(six);
}

// Rules for Naming JavaScript Variables

{
    //valid
    // let a = 'hello';
    // let _a = 'hello';
    // let $a = 'hello';
}
{
    //invalid
    var a1 = 'hello'; // this gives an error
}

// JavaScript is case-sensitive. So y and Y are different variables

{
    // let y = "hi";
    // let Y = 5;

    // console.log(y);
    // console.log(Y); 
}

// Keywords cannot be used as variable names.

{
    //invalid
    // let new = 5; // Error! new is a keyword.
}

/*  
Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign. After first letter we can use digits (0 to 9), for example value1. JavaScript variables are case sensitive, for example x and X are different variables.
*/

let number = 312;

let num = number;

// Initializing the result variable 
let result = 0;
let rightmost = 0;

while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    
    // Store number in to variable 
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    number = Number.parseInt(number/10);
}

console.log(`number is ${num} reveres number is ${result}`)