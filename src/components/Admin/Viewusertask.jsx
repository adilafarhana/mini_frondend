import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navtask from '../Navtask'; // Assuming you have a navigation component

const ViewTask = () => {
    const [data, setData] = useState([]);
    const [taskfile, setTaskFile] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3032/viewtask");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const sortByPriority = (tasks) => {
        const priorityOrder = { 'low': 1, 'Medium': 2, 'High': 3 };
        return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    };

    const sortedData = sortByPriority(data);

    return (
        <div>
            <Navtask />
            <div className="container">
                <h2>View Tasks</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                            <th>Category</th>
                            <th>Task File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((task, index) => (
                            <tr key={index}>
                                <td>{task.title}</td>
                                <td>{task.priority}</td>
                                <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</td>
                                <td>{task.category}</td>
                                <td>
                                <div className="form-group">
                        <input type="file" className="form-control" onChange={(e) => setTaskFile(e.target.files[0])} required />
                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewTask;