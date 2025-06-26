const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
