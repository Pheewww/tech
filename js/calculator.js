/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const { error } = require("console");

class Calculator {

     result = 0;

    constuctor() {
    this.result = result;
    this.string = string;
    }

    add(x){
        this.result = x + this.result; 
    }

    subtract(y){
        if(y>0){
            this.result = this.result -y;
        }
        else if (y < 0){
            this.result = this.result + y;
        }
        // else if(this.result >y || y<0){
        //     this.result = -1 * (this.result - y);
        // }
        // else{
        //     this.result = y- this.result;
        //}
    }

    multiply(x){
        this.result = x * this.result;
    }

    divide( y){
        if(y==0){
            throw err;
        }
        else{
            this.result =  this.result/y;
        }
    }

    clear(){
        this.result = 0;
    }

    getResult(){
        return this.result;
    }


    

    calculate(string){
        //parse string

        

        const yo = string.split(" ");
        console.log("YO", yo, typeof(yo));

        // error if datatype not same for all


        // perform operations
    }
    



}

module.exports = Calculator;