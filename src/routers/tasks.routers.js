import express from 'express';
import { pool } from '../db.js';
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/tasks.controllers.js';

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

export default router;