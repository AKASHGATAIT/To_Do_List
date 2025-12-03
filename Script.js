// grab the element one by one 
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// use array for add task in our toDo list 
let task = [];
// Use for 
addTaskButton.addEventListener('click', ()=>{
  // Use for grab the text and trim the extra space after the text
  const taskText = todoInput.value.trim()
  if(taskText === "") return;
  // creating a object 
  const newTask = {
    // creating unique id using this line 
    id:Date.now(),
    text: taskText,
    completed: false
  }
  task.push(newTask)
  todoInput.value = ""; // cleare input 
});