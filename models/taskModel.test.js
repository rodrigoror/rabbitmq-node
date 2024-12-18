const taskModel = require('./taskModel');

test('model-getTasks-size-0-test',()=>{
    const task = taskModel.getTasks();
    expect(task.length).toBe(0);
});

test('model-addTasks-and-getTasks-size-test',()=>{
    const tasks = taskModel.getTasks();
    expect(tasks.length).toBe(0);
    taskModel.addTask('Uma task de teste0');
    taskModel.addTask('Uma task de teste1');
    taskModel.addTask('Uma task de teste2');
     tasks = taskModel.getTasks();
    expect(tasks.length).toBe(3);
    expect(tasks[0].description).toBe('Uma task de teste0');
    expect(tasks[1].description).toBe('Uma task de teste1');
    expect(tasks[2].description).toBe('Uma task de teste2');
});