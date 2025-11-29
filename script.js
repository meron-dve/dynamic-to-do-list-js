document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Create addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // get and trim text

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create li element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When remove clicked → remove li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Put remove button inside the li
        li.appendChild(removeBtn);

        // Add li to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task by clicking button
    addButton.addEventListener("click", addTask);

    // Add task by pressing Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
