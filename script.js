let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = task.done ? 'line-through' : 'none';
        li.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function addTask(text) {
    if (text.trim() === '') return;
    tasks.push({ text, done: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {    
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

addTaskButton.addEventListener('click', () => addTask(taskInput.value));

renderTasks();
