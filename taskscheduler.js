const taskList = []; // Array to store tasks

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const dueTime = document.getElementById('dueTime').value;

    // Create a task object
    const task = {
        name: taskName,
        dueDate: dueDate,
        dueTime: dueTime,
    };

    // Add task to the list
    taskList.push(task);

    // Save tasks to localStorage
    saveTasks();

    // Display the task
    displayTasks();

    // Clear the form fields
    document.getElementById('taskForm').reset();
});

function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Clear the list before rendering

    taskList.forEach(task => {
        const li = document.createElement('li');
        const timeLeft = calculateTimeLeft(task.dueDate, task.dueTime);

        li.textContent = `${task.name} - Due on ${task.dueDate} at ${task.dueTime} (${timeLeft})`;

        taskListElement.appendChild(li);
    });
}

function calculateTimeLeft(dueDate, dueTime) {
    const dueDateTime = new Date(`${dueDate}T${dueTime}`);
    const now = new Date();
    const timeDifference = dueDateTime - now;

    if (timeDifference <= 0) {
        return 'Time is up!';
    }

    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s left`;
}

function saveTasks() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
        taskList.push(...JSON.parse(savedTasks));
        displayTasks();
    }
}

// Load tasks when the page loads
window.onload = loadTasks;
