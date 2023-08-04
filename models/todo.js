const { get } = require("../routes");

 
const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return todos;
  }

  function getOne(id) {
    id = Number(id);
    return todos.find ((todo)=> todo.id === id);
  }

  //Method 1: to get the element based on its id
  // function getOne (id) {
  //   let idMatched;
  //   id = Number(id);
  //   todos.forEach((element)=>{
  //       if(id === element.id){
  //           idMatched = element
  //       }
  //   })
  //   console.log("id of todo",id)
  //   return idMatched
  // }

  //Method 2: using find method. returns the first element that matches the property
  //another method would be filter which returns an array of elements that match the property. does not mutate the original array

  function create(createdTodo){
    //the parameter that we add to this function will act as placeholder for req.body.
    //now we have an object with a property of todo (createdTodo is placeholder for req.body which is an object)
    //we only need to add id and done propperties
    createdTodo.id = Date.now() % 1000000;
    createdTodo.done = false;
    todos.push(createdTodo)

  }