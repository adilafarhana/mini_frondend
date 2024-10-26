import React, { useState } from 'react';
import axios from 'axios';
import Navtask from '../Navtask';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('assignment');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !category) {
            setMessage("Please fill in all required fields.");
            return;
        }

        const taskData = {
            title,
            priority,
            dueDate,
            category,
        };

        try {
            const response = await axios.post('http://localhost:3032/addtask', taskData);
            setMessage(response.data.status);
            if (response.data.status === "success") {
                setTitle('');
                setPriority('Medium');
                setDueDate('');
                setCategory('assignment');
            }
        } catch (error) {
            console.error("Error adding task:", error);
            setMessage("Failed to add task: " + (error.response ? JSON.stringify(error.response.data) : "Network Error"));
        }
    };

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'url(https://png.pngtree.com/back_origin_pic/03/59/76/4b1c43ba785feb0d3b76aa472cbea4b6.jpg)',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Navtask />
            <h2 style={{ color: 'white' }}>Add Task</h2>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                width: '400px',
                textAlign: 'center'
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Priority:</label>
                        <select
                            className="form-control"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Due Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <select
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="assignment">Assignment</option>
                            <option value="seminar">Seminar</option>
                            <option value="tutorial">Tutorial</option>
                            <option value="homework">Homework</option>
                            <option value="placement">Placement</option>
                            <option value="project">Project</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
                {message && <div className="mt-3 alert alert-info">{message}</div>}
            </div>
        </div>
    );
};

export default AddTask;
