const taskList = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const dueTime = document.getElementById('dueTime').value;


    const task = {
        name: taskName,
        dueDate: dueDate,
        dueTime: dueTime,
    };


    taskList.push(task);


    saveTasks();


    displayTasks();


    document.getElementById('taskForm').reset();
});

function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

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


window.onload = loadTasks;
