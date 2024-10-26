import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navtask from '../Navtask'; // Assuming you have a Navtask component

const ViewTask = () => {
    const [tasks, setTasks] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3032/viewtask');
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setMessage("Failed to load tasks: " + (error.response ? error.response.data : "Network Error"));
            }
        };

        fetchTasks();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (taskId) => {
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);

        try {
            const response = await axios.post(`http://localhost:3032/uploadfile/${taskId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            setFile(null);
            // Refresh tasks after upload
            const updatedTasks = await axios.get('http://localhost:3032/viewtask');
            setTasks(updatedTasks.data);
        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("Failed to upload file: " + (error.response ? error.response.data : "Network Error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navtask />
            <h2>View Tasks</h2>
            <div>
                {message && <div className="alert alert-danger">{message}</div>}
                {tasks.length === 0 ? (
                    <p>No tasks available.</p>
                ) : (
                    <ul className="list-group">
                        {tasks.map(task => (
                            <li key={task._id} className="list-group-item">
                                <h5>{task.title}</h5>
                                <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
                                <p><strong>Priority:</strong> {task.priority}</p>
                                <p><strong>Category:</strong> {task.category}</p>
                                <input type="file" onChange={handleFileChange} />
                                <button onClick={() => handleUpload(task._id)} disabled={loading}>
                                    {loading ? 'Uploading...' : 'Upload'}
                                </button>
                                {/* Removed View Uploaded File link */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ViewTask;
