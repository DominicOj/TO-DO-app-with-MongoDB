const Router = require('express').Router();
const routes = require('./tasksRoute');
const controller = require("../Controller/tasksController");

Router
  .get('/', controller.getAllTasks)
  .post('/', controller.createNewTask);

module.exports = Router