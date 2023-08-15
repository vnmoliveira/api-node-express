const express = require('express');

const tasksController = require('./controllers/tasksController')
const taksMiddlewares = require('./middlewares/tasksMiddlewares')

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taksMiddlewares.validateBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksController.updateTask);



module.exports = router;