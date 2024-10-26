import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h5>Menu</h5>
      <ul className="list-unstyled">
        <li>
          <Link to="/addtask">Add Task</Link>
        </li>
        <li>
          <Link to="/viewtask">View Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
