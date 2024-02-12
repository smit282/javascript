// new Map()    Creates a new Map
// set()	    Sets the value for a key in a Map
// get()	    Gets the value for a key in a Map
// delete()	    Removes a Map element specified by the key
// has()	    Returns true if a key exists in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	    Description
// size	        Returns the number of elements in a Map

{
    const Data = new Map
    ([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    document.getElementById("new").innerHTML = Data.get("option-2");
}

{
    const newmap = new Map();

    newmap.set("item-1" , "car");
    newmap.set("item-2" , "bus");
    newmap.set("item-3" , "truck");
    newmap.set("item-4" , 50 )

    document.getElementById("set1").innerHTML = newmap.get("item-3");
    console.log(newmap);
}

{
    const newmap = new Map
    ([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);
    newmap.set("item-3" , "car");
    document.getElementById("set2").innerHTML = newmap.get("item-3");
}

{
    const Data = new Map
    ([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-5" , 80],
        ["option-7" , 80]
    ])
    const sizes = Data.size;
    document.getElementById("size").innerHTML = sizes;
}

// {
//     const newmap = new Map
//     ([
//         ["item-1" , "car"],
//         ["item-2" , "bus"],
//         ["item-3" , "truck"]
//     ]);
//     const deletes = newmap.delete("item-4");
//     document.getElementById("deletes").innerHTML = deletes;
//     document.getElementById("deletes1").innerHTML = newmap.size;
// }

{
    const Data = new Map
    ([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    const hass = Data.has("option-1");
    document.getElementById("size1").innerHTML = hass;

    const hasss = Data.has("option-5");
    document.getElementById("size2").innerHTML = hasss;

    const hassss = Data.has("option-3");
    document.getElementById("size3").innerHTML = hassss;
}

{
    const Data = new Map
    ([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    
    Data.delete("option-4");

    const hasss = Data.has("option-4");
    document.getElementById("has1").innerHTML =hasss;

    // document.getElementById("size3").innerHTML =Data.size;
}