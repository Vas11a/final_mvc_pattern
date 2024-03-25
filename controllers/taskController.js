const Task = require('../models/Task');
const path = require('path');

// Temporary storage for tasks
let tasks = [];

exports.getTasksPage = (req, res) => {
    res.render('todolist', { tasks });
};

exports.getAddTaskPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formNew.html'));
};

exports.addTask = (req, res) => {
    const { description, date } = req.body;
    tasks.push(new Task(description, date, 'Dont started'));
    res.redirect('/');
};

exports.getEditTaskPage = (req, res) => {
    const id = req.params.id;
    if (!tasks[id]) {
        res.status(404).send('Task not found');
    } else {
        const task = tasks[id];
        task.id = id;
        res.render('formUpdate', { task });
    }
};


exports.updateTask = (req, res) => {
    const id = req.params.id;
    const { description, date, status } = req.body;
    if (!tasks[id]) {
        res.status(404).send('Task not found');
    } else {
        tasks[id].description = description;
        tasks[id].date = date;
        tasks[id].status = status;
        res.redirect('/');
    }
};


exports.deleteTask = (req, res) => {
    const id = req.params.id;
    if (!tasks[id]) {
        res.status(404).send('Task not found');
    } else {
        tasks.splice(id, 1);
        res.redirect('/');
    }
};
