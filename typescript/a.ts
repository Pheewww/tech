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

interface User{
    fname: string,
    lname: string,
    age: number,
}

 
function isLegal(user1: User){
    console.log("user ki age", user1.age)
    return (user1.age>18);
}

// intersections in types
type person = {
    name: string,
    age: number,
    dob: Date,
}

type person_died = {
    name: string,
    dead_date: Date,
}

type Human  = person & person_died;

const yo: Human = {
    name: "umang",
    age: 20,
    dob: new Date(),
    dead_date: new Date(),
}


// arrays in ts

const array:number[] = [1, 2]

// Generics
function getFirst<T>(arg: T[]): T{
    return arg[0];
}

const output = getFirst([1, 2 , 3]); //number
const output1 = getFirst<string>(["umm", "yo"]);
output1.toUpperCase();

 




