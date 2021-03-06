var uuid = require('uuid'); //used to generate random number
//Constructor function
//How do I build this object?
function Todo(description, id){
  this.id = id || uuid.v4();
  this.description = description;
  this.isComplete = false;
}

Todo.prototype.updateComplete = function(value){
  if(value.toLowerCase() === 'true'){
    this.isComplete = true;
  } else{
    this.isComplete = false;
  }
  //Old code
  // this.isComplete = value;
};

// //sandbox
// var todo1 = new Todo('read my book');
// var todo2 = new Todo('practice programming');
// var todo3 = new Todo('go running...');
// console.log(todo1, todo2, todo3);
module.exports = Todo; //exposes the todo function to anyone who needs this file
