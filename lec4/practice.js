// program 6 
{ 
    let n=6, i=1, fact=1 
 
    while(i<=n) 
    { 
        fact = fact * i
        i++ 
    } 
    document.write(fact); 
    document.write("<br>") 
 
    for(i=1;i<=n;i++) 
    { 
        fact=fact*i 
    } 
    document.write(fact); 
}
 
// program 5 
// {
//     let x ; 
//     let y = 0; 
//     let c=1; 
 
//     document.write(y + "<br>"); 
//     for(let i=0; i<=5; i++) 
//     { 
//         x=y+c; 
//         y=c; 
//         c=x; 
//         document.write(x + "<br>");    
//     } 
// }