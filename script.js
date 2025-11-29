
document.addEventListener("DOMContentLoaded", function () {
    // 1. Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 2. Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // get and trim input

        if (taskText === "") { // check if empty
            alert("Please enter a task");
            return;
        }

        // Create li element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // 3. Attach event listeners
    addButton.addEventListener("click", addTask); // click to add
    taskInput.addEventListener("keypress", function (event) { // Enter to add
        if (event.key === "Enter") {
            addTask();
        }
    });
});
