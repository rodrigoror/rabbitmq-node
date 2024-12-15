const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', taskController.showTasks);
app.get('/add', (req, res) => res.render('addTask'));
app.post('/add', taskController.addTask);
app.get('/remove/:id', taskController.removeTask);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));