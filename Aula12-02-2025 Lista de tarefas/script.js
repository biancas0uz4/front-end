const taskForm = document.getElementById("task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
const taskToggleButton = document.querySelector("#taskToggleButton");

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const listItem = document.createElement("li");
  console.log("listItem", listItem);

  addTask(listItem);
});

taskToggleButton.addEventListener("click", () => {
  const vetorDeLIs = Array.from(taskList.children);

  if (taskToggleButton.dataset.action === "hide") {
    vetorDeLIs.forEach((li) => {
      const checkbox = li.querySelector("input");

      if (checkbox.checked) {
        li.style.display = "none";
      }
    });

    taskToggleButton.dataset.action = "show";
    taskToggleButton.textContent = "Mostrar Tarefas";
  } else {
    vetorDeLIs.forEach((li) => {
      li.style.display = "flex";
    });

    taskToggleButton.dataset.action = "hide";
    taskToggleButton.textContent = "Ocultar Concluidos";
  }

  //   taskToggleButton.style.display = "none";
  //   taskShowButton.style.display = "block";
});

const addTask = (listItem, task) => {
  const taskDescription = task ? task.text : taskInput.value;

  const taskFormInput = document.createElement("input"); // <input>
  const taskSpan = document.createElement("span");
  const taskEditButton = document.createElement("button");
  const taskDeleteButton = document.createElement("button");

  taskFormInput.checked = task?.done;

  taskFormInput.addEventListener("change", () => {
    updateProgressBar();
  });

  taskEditButton.addEventListener("click", (event) => {
    const novaTarefa = prompt(
      `Digite a nova descrição para a tarefa ${taskDescription}: `
    );

    if (novaTarefa == null) {
      return;
    }

    const tarefaFormatada = novaTarefa.trim();

    if (tarefaFormatada != "") {
      taskSpan.textContent = tarefaFormatada;
      updateProgressBar();
    }

    console.log("nova tarefa: ", novaTarefa);
  });

  taskDeleteButton.addEventListener("click", (event) => {
    const confirmacao = confirm("Deseja prosseguir com a exclusão?");

    if (confirmacao) {
      taskList.removeChild(listItem);
      updateProgressBar();
    }
  });

  listItem.classList.add("task-item");

  taskFormInput.type = "checkbox";

  taskEditButton.textContent = "✏️";
  taskDeleteButton.textContent = "🗑️";

  taskSpan.textContent = taskDescription;

  listItem.appendChild(taskFormInput);
  listItem.appendChild(taskSpan);
  listItem.appendChild(taskEditButton);
  listItem.appendChild(taskDeleteButton);

  taskList.appendChild(listItem);
  updateProgressBar();

  console.log(listItem);
  console.log(taskSpan);
  console.log(taskFormInput);
  console.log(taskEditButton);
  console.log(taskDeleteButton);
};

const updateProgressBar = () => {
  const taskLength = Array.from(taskList.children).length;
  const doneArray = [...taskList.children].filter(
    (li) => li.querySelector("input").checked
  );

  const doneLength = doneArray.length;

  const percentual = taskLength > 0 ? (doneLength / taskLength) * 100 : 0;

  progressBar.style.width = `${percentual}%`;
  progressText.textContent = `${doneLength}/${taskLength} concluídos (${percentual.toFixed(
    1
  )}%)`;

  saveTasks();
};

const saveTasks = () => {
  const tasks = [...taskList.children].map((li) => {
    const checkbox = li.querySelector("input");
    const spanText = li.querySelector("span").textContent;
    const newJson = {
      text: spanText,
      done: checked.checked,
    };
    return newJson;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.forEach((task) => {
    const listItem = document.createElement("li");

    addTask(listItem, task);
  });
};

window.addEventListener("load", () => {
  getTasks();
});
