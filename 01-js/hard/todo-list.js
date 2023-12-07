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
    this.task = []
  }
  add(todo){
    this.task.push(todo)
  }
  remove(indexOfTodo){
    this.task.splice(indexOfTodo,1)
  }
  update(index,updatedTodo){
    if(index>=0 && index<this.task.length){
      this.task[index] = updatedTodo
    }
  }
  getAll(){
    return this.task
  }
  get(indexOfTodo){
    if(indexOfTodo>=0 && indexOfTodo<this.task.length){
      return this.task[indexOfTodo]
    }else{
      return null
    }
  }
  clear(){
    this.task.splice(0,this.task.length)
  }


}
let fayaztodo = new Todo()
fayaztodo.add("sleep")
fayaztodo.add("eat")
fayaztodo.remove(1)
fayaztodo.update(1,"play")
console.log(fayaztodo.getAll())
console.log(fayaztodo.get(4))
console.log(fayaztodo)
module.exports = Todo;
