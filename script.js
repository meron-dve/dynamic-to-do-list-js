document.addEventListener("DOMContentLoaded", function () {

    // Select Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add tasks
    function addTask() {
        const taskText = taskInput.value.trim(); // get and trim text

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn"; // NO classList.add

        // When remove clicked → remove li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button and li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Add task when pressing Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
