// src/components/TaskItem.js
import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onDelete }) => {
    const handleDelete = async () => {
        const token = localStorage.getItem('token'); // Assume token is stored in localStorage

        try {
            await axios.delete(`http://localhost:3000/deleteTask/${task._id}`, {
                headers: { token },
            });
            onDelete(task._id); // Call the parent function to update state
            alert('Task deleted successfully!');
        } catch (error) {
            console.error("Error deleting task:", error);
            alert('Failed to delete task.');
        }
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
