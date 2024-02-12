// Converting Variable to Numbers

// Number() Returns a number converted from argument.
// parseFloat() Parse its argument and returns a floating point number 
// parseInt() Parse its argument and returns a whole number

{
    let n1 = Number(true);
    let n2 = Number(false);
    let n3 = Number("10");	
    let n4 = Number("  10");	
    let n5 = Number("10  ");
    let n6 = Number(" 10  ");
    let n7 = Number("10.33");	
    let n8 = Number("10,33");	
    let n9 = Number("10 33");	
    let n10 = Number("John");	
    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
    // console.log(n4);
    // console.log(n5);
    // console.log(n6);
    // console.log(n7);
    // console.log(n8);
    // console.log(n9);
    // console.log(n10);
    // console.log(typeof(n10));
}

{
    let pi1 =  parseInt("-10");		
    let pi2 =  parseInt("-10.33");
    let pi3 =  parseInt("10");
    let pi4 =  parseInt("10.33");
    let pi5 =  parseInt("20 30");	
    let pi6 =  parseInt("10 years");	
    let pi7 =  parseInt("years 10");	
    // console.log(pi1);
    // console.log(pi2);
    // console.log(pi3);
    // console.log(pi4);
    // console.log(pi5);
    // console.log(pi6);
    // console.log(pi7);
    // console.log(typeof(pi7));
}

{
    let pf1 =  parseFloat("10");		
    let pf2 =  parseFloat("10.33");	   
    let pf3 =  parseFloat("10 20 30");	
    let pf4 =  parseFloat("10 years");	
    let pf5 =  parseFloat("years 10");
    // console.log(pf1);
    // console.log(pf2);
    // console.log(pf3);
    // console.log(pf4);
    // console.log(pf5);
}
     
/* Number Object Method */
 
// Number.isInteger() Returns true if the argument is an integer
// Number.isSafeInteger() Returns true if the argument is a safe integer
// Number.parseFlaot() Convert a string to a number
// Number.parseInt() Convert a string to a whole number

{
    let method = Number.isInteger(10);	
    let method1 = Number.isInteger(12.5);	
       
    let method2 = Number.isSafeInteger(10);	
    let method3 = Number.isSafeInteger(12345678901234567890);	
    
    let method4 = Number.parseFloat("10");		
    let method5 = Number.parseFloat("10.33");	
    let method6 = Number.parseFloat("10 20 30");	
    let method7 = Number.parseFloat("10 years");	
    let method8 = Number.parseFloat("years 10");	
    
    let method9 = Number.parseInt("-10");		
    let method10 = Number.parseInt("-10.33");		
    let method11 = Number.parseInt("10");			
    let method12 = Number.parseInt("10.33");		
    let method13 = Number.parseInt("10 6");		
    let method14 = Number.parseInt("10 years");		
    let method15 = Number.parseInt("years 10");		
 
    // console.log(method);
    // console.log(method1);
    // console.log(method2);
    // console.log(method3);
    // console.log(method4);
    // console.log(method5);
    // console.log(method6);
    // console.log(method7);
    // console.log(method8);
    console.log(method9);
    console.log(method10);
    console.log(method11);
    console.log(method12);
    console.log(method13);
    console.log(method14);
    console.log(method15);
}