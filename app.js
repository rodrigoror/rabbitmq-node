process.env.JAEGER_COLLECTOR_ENDPOINT = "http://localhost:14268/api/traces";
process.env.JAEGER_SERVICE_NAME = "jaeger";
process.env.JAEGER_AGENT_HOST = "localhost";
process.env.JAEGER_AGENT_PORT = "6831";
const PORT = process.env.PORT || 3000;

const { track } = require("express-jaeger");

const express = require('express');
const bodyParser = require('body-parser');
const amqp = require('amqplib');
const app = express();
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(track("/system/startup"));

app.get('/', track("/showTasks"), taskController.showTasks);
app.get('/add', track("/add"), (req, res) => res.render('addTask'));
app.post('/add', track("/add"), taskController.addTask);
app.get('/remove/:id', track("/remove"), taskController.removeTask);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));