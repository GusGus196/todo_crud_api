import { pool } from '../db.js';

export const getTasks = async(req, res) => {
    const { rows } = await pool.query('SELECT * FROM TASKS order by id');
    if (rows.length === 0){
        return res.sendStatus(404).json({ message: 'No tasks found'});
    }
    return res.json(rows);
};

export const getTask = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query(`SELECT * FROM TASKS WHERE ID = ${id}`);

    if (rows.length === 0) {
        return res.sendStatus(404).json({ message: 'Task not found' });
    }

    return res.json(rows[0]);
};

export const createTask = async (req, res) => {
    const data = req.body;
    const { rows } = await pool.query(`INSERT INTO TASKS (title, description, status, due_date) VALUES 
        ($1, $2, false, $3) RETURNING *`, [data.title, data.description, data.due_date]);
    return res.status(201).json(rows[0]);
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const {rowCount} = await pool.query(`DELETE FROM TASKS WHERE ID = $1 RETURNING *`, [id]);
    if ( rowCount === 0){
        return res.sendStatus(404).json({ message: 'Task not found'});
    }
    return res.sendStatus(204).json({message: 'Task deleted'});
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const { rows } = await pool.query('UPDATE TASKS SET title = $1, description = $2, status = $3, due_date = $4 WHERE id = $5 RETURNING *', [data.title, data.description, data.status, data.due_date, id]);

    return res.json(rows[0]);
};