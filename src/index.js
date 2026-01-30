import express from 'express';
import { PORT } from './config.js';
import tasksRoutes from './routers/tasks.routers.js';
import morgan from 'morgan'; // ver petición en consola

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.listen(PORT);
app.use(tasksRoutes);

const server = app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
