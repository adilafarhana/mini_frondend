import React, { useEffect, useState } from 'react';

const Viewprojecttask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <ul>
              {task.questions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
            {/* Add submission logic here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Viewprojecttask;
