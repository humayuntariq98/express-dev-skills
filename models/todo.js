const { get } = require("../routes");

 
const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return todos;
  }

  function getOne (id) {
    let idMatched;
    id = Number(id);
    todos.forEach((element)=>{
        if(id === element.id){
            idMatched = element
        }
    })
    console.log("ssssssssssdsds",id)
    return idMatched
  }