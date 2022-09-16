// We say a language has "first-class functions" if it supports functions being passed
function printx(x){
    console.log(x)
}

//as input or output values of other functions. JS has this feature, and
// JavaScripters take advantage of it all the time - for example,
// it's what allows us to pass a callback function as an input parameter
// for another function. It's also possible to have a function as a return 
// value. A function which either takes or returns another function is called 
// a higher-order function.


// Filter 
// The filter function has been implemented for you below:

let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 // simple itrating on wholes array 

// with for loop 
for(let i=0 ;i <= wholes.length ;i++ ){
    printx(i)
}

//  with for in loop 
for ( let i in wholes ) {
    printx(i)
}


