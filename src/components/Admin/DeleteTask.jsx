import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navtask from '../Navtask'; // Adjust the path if necessary

const DeleteTask = () => {
    const [tasks, setTasks] = useState([]); // State to hold the list of tasks
    const [taskId, setTaskId] = useState(''); // State to hold the selected task ID

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3032/gettasks");
                setTasks(response.data); // Set tasks in state
            } catch (error) {
                console.error("Error fetching tasks:", error);
                alert("Failed to fetch tasks. Please try again later."); // User-friendly message
            }
        };

        fetchTasks();
    }, []);

    const handleDelete = async () => {
        if (!taskId) {
            alert("Please select a task to delete."); // Alert if no task is selected
            return;
        }

        try {
            const response = await axios.post("http://localhost:3032/delete", { _id: taskId });
            if (response.data.status === "success") {
                alert("Task deleted successfully.");
                setTasks(tasks.filter(task => task._id !== taskId)); // Remove deleted task from state
                setTaskId(''); // Reset task ID
            } else {
                alert("Error deleting task. Please try again.");
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("An error occurred while deleting the task. Please try again."); // User-friendly message
        }
    };

    return (
        <div>
            <Navtask />
            <div className="container">
                <h2>Delete Task</h2>
                <div>
                    <label>Select Task to Delete:</label>
                    <select value={taskId} onChange={(e) => setTaskId(e.target.value)}>
                        <option value="">-- Select a task --</option>
                        {tasks.map(task => (
                            <option key={task._id} value={task._id}>
                                {task.title} - {task.category}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleDelete}>Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTask;
