const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let text = taskInput.value.trim();
  if (text === "") return;

  let completed = false;
  let editing = false;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", function () {
    completed = true;
    span.textContent = "* " + text;
    span.classList.add("completed");
    completeBtn.disabled = true;
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  editBtn.addEventListener("click", function () {
    if (!editing) {
      // Switch to edit mode
      editing = true;
      editInput.value = text;
      li.replaceChild(editInput, span);
      editInput.focus();
      editBtn.textContent = "Save";
    } else {
      // Save the new text (keep the old text if left empty)
      const newText = editInput.value.trim();
      if (newText !== "") text = newText;

      editing = false;
      span.textContent = completed ? "* " + text : text;
      li.replaceChild(span, editInput);
      editBtn.textContent = "Edit";
    }
  });

  editInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") editBtn.click();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
});
