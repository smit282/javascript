/* JavaScript Statements */ 

// if statement
// if...else statement
// if...else if...else statement

/* Flow Chart of if-else */

// 1. if statement
// 2. if...else statement
// 3. if...else if... statement.
// 4. switch statement

{
//    let x = prompt();
//    let y = 20;

//    if( x >= -1 )
//    {
//         console.log("you are mature");
//    }
   
//    else
//    {
//         console.log("you are child")
//    }
}

/* if...else if... statement */

{
    var book ='abcd';
    
    if( book === 'history' ) 
    {
       document.write("<b>History Book</b>");
    }
 
    else if( book == "maths" ) 
    {
       document.write("<b>Maths Book</b>");
    }
 
    else if( book == "economics" ) 
    {
       document.write("<b>Economics Book</b>");
    }

    else 
    {
       document.write("<b>Unknown Book</b>");
    }
}

/* switch statement */

// if input = 1, "y", "yes" output = Continue....
// if input = 0, "n", "no" output = End...

{
    let input = 1;
    if (input === "1")
    {
        document.write("Continues..")
    } 
    
    else if (input === "y")
    {
        document.write("Continues..")
    }

    else if (input === "yes")
    {
        document.write("Continues..")
    }

    else if (input === 0)
    {
        document.write("End..")
    }

    else if (input == "n")
    {
        document.write("End..")
    }

    else if (input === "no")
    {
        document.write("End..")
    }

    else
    {
        document.write("Wrong input")
    }
}

/*  === comparison */

{
    let input = "y";
    switch(input)
    {
        case 1:
            document.write("Continue...");
        break;

        case "y":
            document.write("Continue...");
        break;

        case "yes":
            document.write("Continue...");
        break;

        case 0:
            document.write("End...");
        break;

        case "n":
            document.write("End...");
        break;

        case "no":
            document.write("End...");
        break;

        default:
            document.write("Wrong input");
    }
}