const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  if (task.completed) {
    taskDiv.classList.add("completed");
  }

  const titleSpan = document.createElement("span");
  titleSpan.textContent = task.title;
  taskDiv.appendChild(titleSpan);

  return taskDiv;
}

function renderTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  taskManager.tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
}

async function loadTasks() {
  statusMessage.textContent = "Loading tasks...";

  const rawTasks = await fetchTasks();

  const json = JSON.stringify(rawTasks);
  const parsedTasks = JSON.parse(json);

  const tasks = parsedTasks.map(
    (item) => new Task(item.id, item.title, item.completed)
  );

  taskManager.setTasks(tasks);
  renderTasks();
  statusMessage.textContent = "";
}

loadTasksBtn.addEventListener("click", loadTasks);
