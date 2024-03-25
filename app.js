const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', taskController.getTasksPage);
app.get('/add', taskController.getAddTaskPage);
app.post('/task', taskController.addTask);
app.get('/task/:id/edit', taskController.getEditTaskPage);
app.post('/task/:id/update', taskController.updateTask);
app.delete('/task/:id', taskController.deleteTask);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
