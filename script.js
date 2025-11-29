document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks at page load
    loadTasks();

    // Add task on button click
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Add task on Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load Tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false → do NOT save again
        });
    }

    // Add New Task
    function addTask(taskText = taskInput.value.trim(), save = true) {

        // Check empty
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

        // Remove action
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeFromLocalStorage(taskText);
        };

        // Add to DOM
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }

        // Clear input
        taskInput.value = "";
    }

    // Remove task from Local Storage
    function removeFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

});
