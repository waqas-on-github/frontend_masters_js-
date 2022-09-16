let thesis ={name:"mikky aurthor ", date :1993 }
// *NOTE 
// .............WHAT IS SIDE EFFECT ...........
  //  a side effect any action by funcation what effects outside world like mutate given data or make 
  // http req or minuplate Dom 

//   impure funcation with side effects 
function mutate_thesis( new_name) {
    thesis.name=new_name;
    console.log('renamed')
}

mutate_thesis("mike jorge")
 console.log(thesis)


//  pure function without side effects   
// so blow funcation is not effection out side world things  
function new_thesis(thesis,updatable) {
    return{
        name:updatable ,date:thesis.date
    }
} 

console.log(new_thesis(thesis ,"hollowon gorge"))

