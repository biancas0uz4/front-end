const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector('.task-list');

console.log(taskForm);

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskDescription  = taskInput.value;

  const listItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  const taskFormInput = document.createElement('input');
  const taskEditButton = document.createElement('button');
  const taskDeleteButton = document.createElement('button');
 
    listItem.classList.add('task-item');
    taskFormInput.type = 'checkbox';

    taskEditButton.innerHTML = "✏";
    taskDeleteButton.innerHTML = "🗑";

    taskSpan.textContent = taskDescription;

    listItem.appendChild(taskSpan);
    listItem.appendChild(taskFormInput);
    listItem.appendChild(taskEditButton);
    listItem.appendChild(taskDeleteButton);

    taskList.appendChild(listItem);
    
  console.log(listItem)
  console.log(taskSpan)
  console.log(taskFormInput)
  console.log(taskEditButton)
  console.log(taskDeleteButton)

  console.log("Event: ", event);
});


