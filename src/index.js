//import TaskList from "./TaskList.js";

// Se importa la clase Task
import Task from "./Task.js";

// Se obtienen los elementos del DOM
const taskList = document.getElementById('taskList')
const taskInput = document.getElementById('taskInput');
const itemTaskList = document.getElementsByClassName('task-item');
let date = new Date()
let taskNumber = 1;

// Se define la funcion addTask y su logica
const addTask = newTask => {
    const taskContainer = document.createElement("div");
    
    taskContainer.className = "task-container"

    taskContainer.innerHTML = `
        <input class="task-check" type="checkbox" name="${newTask.getName()}" id="task${taskNumber}">
          <li class="task-item">${newTask.getName()}</li>
        <button type="button" class="task-delete">Eliminar</button><br><br>
        <p class="task-date">Tarea creada en la fecha: ${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}. A las: ${date.getHours()}H :${(date.getMinutes() + 1)}M :${date.getSeconds()}S</p>
    `
    taskNumber++;

    taskList.appendChild(taskContainer)
    // Se llama a la funcion explorerBody para recorrer las tareas
    // que se han creado dinamicamente
    explorerBody();
}

// Se obtiene el boton de agregar tarea y se crea su logica
const addButtonTask = document.getElementById('addTaskBtn')
addButtonTask.addEventListener('click', () => {
  
  const taskName = taskInput.value;
  if (!taskName) {
    alert('No puedes agregar tareas vacias. Por favor, ingresa una tarea');
  }else{
    const task = new Task(taskName);
    addTask(task);
    taskInput.value = '';
  }
});

// Funcion que permite explorer ya mencionada
const explorerBody = () => {
  const deleteButtonTask = document.getElementsByClassName('task-delete');
  for (let i = 0; i < deleteButtonTask.length; i++) {
    deleteButtonTask[i].addEventListener('click', e => {
      const taskContainer = e.target.parentElement
      taskContainer.remove()
    })
  }

  // Se obtiene el boton de check y se crea la logica para
  // determinar si la tarea se ha completado o no
  const checkButtonTask = document.getElementsByClassName('task-check');
  for (let i = 0; i < checkButtonTask.length; i++) {
    checkButtonTask[i].addEventListener('change', () => {
      for (let i = 0; i < itemTaskList.length; i++) {
        if(checkButtonTask[i].checked) {
          itemTaskList[i].classList.add('completed')
        }else{
          itemTaskList[i].classList.remove('completed')
        }
      }
      for (let i = 0; i < deleteButtonTask.length; i++) {
        if (checkButtonTask[i].checked) {
          deleteButtonTask[i].classList.add('completed')
        }else{
          deleteButtonTask[i].classList.remove('completed')
        }
      }
    })
  }
}

// Se obtiene el evento de presionar la tecla Enter
taskInput.addEventListener('keypress', e => {
  if(e.key === 'Enter') addButtonTask.click();
})