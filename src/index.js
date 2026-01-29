import express from 'express';
import { PORT } from './config.js';
import tasksRoutes from './routers/tasks.routers.js';

const app = express();

app.use(express.json());
app.listen(PORT);
app.use(tasksRoutes);

const server = app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
