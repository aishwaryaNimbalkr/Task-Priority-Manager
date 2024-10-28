const express = require('express');

const { getTask, posttTask, puttTask, deleteTask } = require('../controller/userController');
const router = express.Router();

router.get('/tasks', getTask);

router.post('/tasks',posttTask);

router.put('/tasks/:id',puttTask );

router.delete('/tasks/:id',deleteTask);

module.exports = router;
