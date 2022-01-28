const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    delete list[task];
}

function showList(todoList) {
    let statusToDo = '';
    let statusInProgress = '';
    let statusDone = '';

    for (let task in todoList) {
        if (todoList[task] === "To Do") {
            statusToDo += `"${task}"\n`;
        } else if (todoList[task] === "In Progress") {
            statusInProgress += `"${task}"\n`;
        } else if (todoList[task] === "Done") {
            statusDone += `"${task}"\n`;
        }
    }
    statusToDo = statusToDo ? statusToDo : '-';
    statusInProgress = statusInProgress ? statusInProgress : '-';
    statusDone = statusDone ? statusDone : '-';

    return `Todo:\n${statusToDo} \n In Progress :\n${statusInProgress} \n Done:\n${statusDone} `;
}

addTask('покрасить забор');
addTask('выполнить задание №3');
addTask('заправить кровать');
changeStatus('выполнить задание №3', 'In Progress');
changeStatus('покрасить забор', 'To Do');
deleteTask('make a bed');
console.log(showList(list));
