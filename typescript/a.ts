// argument return type + function return type

function sum(a: number, b:number): number{
    return a+b;
}

  sum(3, 9);
console.log("ans->", sum(3, 10));


// Type Inference
function user_age(age:number){
    if(age>18) return true;
    else return false;
}

console.log("user age check", user_age(20));

//function that takes another function as input, and runs it after 1 second.
function delay1sec(fn: () => void){
    setTimeout(fn, 1000);
}



delay1sec(function(){
// callback    
    console.log("nothing");
})

 
 




