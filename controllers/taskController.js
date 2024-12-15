const Task = require('../models/taskModel');
const Queue = require('../models/queueModel');

exports.showTasks=(req,res) => {
    const tasks = Task.getTasks();
    res.render('index',{task: tasks});
};

exports.addTask = (req, res) => {
    const { description } = req.body;
    Task.addTask(description);
    Queue.publish(Date.now(), description);
    res.redirect('/');
};

exports.removeTask = (req, res) => {
    const { id } = req.params;
    Task.removeTask(parseInt(id));
    res.redirect('/');
};