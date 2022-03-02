const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const list = {
    'create a task': STATUS.IN_PROGRESS,
    'make a bed': STATUS.DONE,
    'write a post': STATUS.TO_DO,
}

const DEFAULT_STATUS = STATUS.TO_DO;

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = DEFAULT_STATUS;
}

function deleteTask(task) {
    delete list[task];
}

function showList(todoList) {
    const tasks = {
        [STATUS.TO_DO]: '',
        [STATUS.IN_PROGRESS]: '',
        [STATUS.DONE]: '',
    }

    const noTasks = '-';

    for (let task in todoList) {
        tasks[todoList[task]] += ` ${task},\n`;
    }

    return `To do:\n${tasks[STATUS.TO_DO] || noTasks}In Progress :\n${tasks[STATUS.IN_PROGRESS] || noTasks}Done:\n${tasks[STATUS.DONE] || noTasks}`;
}

addTask('покрасить забор');
addTask('выполнить задание №3');
addTask('заправить кровать');
changeStatus('выполнить задание №3', 'In Progress');
changeStatus('покрасить забор', 'To Do');
deleteTask('make a bed');
console.log(showList(list));
