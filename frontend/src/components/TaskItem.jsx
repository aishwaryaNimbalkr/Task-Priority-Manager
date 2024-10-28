import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const handleComplete = async () => {
    await axios.put(`http://localhost:4000/api/tasks/${task._id}`, { completed: !task.completed });
    fetchTasks();
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/api/tasks/${task._id}`);
    fetchTasks();
  };

  const priorityColor = {
    High: 'red',
    Medium: 'yellow',
    Low: 'green',
  };

  return (
    <div style={{ color: priorityColor[task.priority] }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleComplete}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
