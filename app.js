//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
//For any action on DOM we add event litners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
  event.preventDefault();
  //ToDo container
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  toDoDiv.appendChild(newTodo);
  //check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  toDoDiv.appendChild(completedButton);
  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  toDoDiv.appendChild(deleteButton);
  console.log(toDoDiv);
  //append the one created task to ToDO List
  todoList.appendChild(toDoDiv);
 //clear todo inptut value
  todoInput.value = "";
}

//function for delete check
function deleteCheck(e){
  const item = e.target;
  //Delete the todo item
  if(item.classList[0] === 'delete-btn'){
    const todo = item.parentElement;
    todo.remove();
  }
}
