const { get } = require("../routes");

 
const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteTodoFromData,
    update
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

  function deleteTodoFromData(id){
    id = parseInt(id)
    const idx = todos.findIndex((t)=> t.id === id)
    todos.splice(idx,1)
  }

  //data would be the req.body.todo property which we get through the form submitted by the user
  function update(id,data){
    //we need to find the todo that we need to update
    //METHOD 1: DIRECTLY UPDATING THE TODOS OBJECT. NOT FEASIBLE FOR BIG OBJECTS

    // id = parseInt(id)
    // const index = todos.findIndex((t)=> t.id === id)
    // todos[index].todo = data.todo

    //METHOD 2: MERGING OUR DATA OBJECT (REQ.BODY OBJECT) INTO THE TODOS OBJECT
    //Object.assign(target, source) ->target is the object that will get changed or merged into, source will be merged.
    //it will not change the object but only update its properties 
    //->can add multiple source objects. Object.assign(target, source1,source2,source3) source 3 will get merged first then second then first.

    // id = Number(id);
    // const todoMatched = todos.find ((todo)=> todo.id === id);
    // //now we want to make a copy of it and override the copie's properties through object assign method. data refers to req.body object
    // Object.assign(todoMatched, data);

    // method 3 : similar to option 2 but using findIndex instead of find
    id = Number(id)
    let index = todos.findIndex((t)=> t.id === id)
    const todoMatched = todos[index];
    let updatedMatchedTodo = Object.assign({...todoMatched, ...data});
    todos.splice(index,1,updatedMatchedTodo)
  }