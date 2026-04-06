const API = "http://localhost:3000/api/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  document.getElementById("taskList").innerHTML =
    tasks.map(task => `
      <li>
        ${task.title} ${task.completed ? "✔️" : ""}
        <button onclick="completeTask('${task._id}')">Done</button>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      </li>
    `).join("");
}

async function addTask() {
  const title = document.getElementById("taskInput").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  loadTasks();
}

async function completeTask(id) {
  await fetch(`${API}/${id}`, { method: "PUT" });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();