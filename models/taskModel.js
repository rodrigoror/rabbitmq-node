let task = [];
function addTask(description) {
    task.push({ id: Date.now(), description });
}
function getTasks() {
    return task;
}
function removeTask(id) {
    task = task.filter(task => task.id !== id);
}
function getTask(id){
    return task[id];
}

module.exports = { addTask, getTasks, removeTask , getTask};