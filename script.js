const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", function () {
    span.textContent = "* " + text;
    span.classList.add("completed");
    completeBtn.disabled = true;
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
