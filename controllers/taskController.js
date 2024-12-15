const Task = require('../models/taskModel');
exports.showTasks=(req,res) => {
    const tasks = Task.getTasks();
    res.render('index',{task: tasks});
};

exports.addTask = (req, res) => {
    const { description } = req.body;
    Task.addTask(description);
    res.redirect('/');
};

exports.removeTask = (req, res) => {
    const { id } = req.params;
    Task.removeTask(parseInt(id));
    res.redirect('/');
};