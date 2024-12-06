/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

     
    constructor(){
        this.todo = [];
    }

    add(todos){
        //console.log(todo);
        this.todo.push(todos);
    }

    remove(idx){
        if (idx >= 0 && idx < this.todo.length) {
            this.todo.splice(idx, 1);
        }
         

    }

    update(idx, update_todos){
        if (idx >= 0 && idx < this.todo.length) {
        this.todo[idx] = update_todos;
        }
        else {
            return null;
        }
    }
    getAll(){
        return this.todo;
    }

    get(idx){
        if (idx >= 0 && idx < this.todo.length) {
        return this.todo[idx];
        }
        else {
            return null;
        }
    }
    clear(){
        this.todo = [];
    }

}

module.exports = Todo;