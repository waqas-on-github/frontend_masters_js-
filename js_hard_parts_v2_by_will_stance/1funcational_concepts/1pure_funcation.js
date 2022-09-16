// Not Pure funcation 

let name ="waqas";
function greet(){
    console.log(`Hello not pure ${name}`)
}

greet()  // we cant  determind expected output cus it havily depend upon variable given 
         


// pure fncation 

function greet_pure(name) {
    return (`hello pure  ${name}`)
}

console.log(greet_pure("waqas"))  // so when we'll call func we will must provide params so we 
                                  //  determind output 
// A function is not pure if its output depends on anything except its inputs 
// A function is pure if its output depends on nothing but its inputs, it does nothing except return
// its output, and it always returns the same output if called with the same input.

// Pure functions are much easier to read and reason about.
// All relevant inputs and dependencies are provided as parameters, 
// so no effects are observed that alter variables outside of the set of inputs.
// This means that we can quickly understand a function and its dependencies,
// just by reading the function's declaration

