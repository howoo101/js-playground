const todoForm = document.querySelector(".js-toDoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo) {
        return li.id !== String(todo.id); 
    })
    toDos = cleanToDos;
    saveToDos(toDos);
}
function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj)
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value ="";
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo) {
            paintToDo(todo.text);
        })
    }
} 

function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
