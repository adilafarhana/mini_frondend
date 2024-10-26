import React from 'react';
import { Link } from 'react-router-dom';

const TeacherHome = () => {
  return (
    <div style={{ 
        height: '100vh', 
        backgroundImage: 'url(https://png.pngtree.com/back_origin_pic/03/59/76/4b1c43ba785feb0d3b76aa472cbea4b6.jpg)', 
        backgroundSize: 'cover', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
      <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          textAlign: 'center' 
        }}>
        <h2>ACADEMIC TASK MANAGEMENT</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
            <Link to="/addtask">
              <button style={{ margin: '10px', padding: '10px 20px' }}>AddTask</button>
            </Link>
            <Link to="/viewsignup">
              <button style={{ margin: '10px', padding: '10px 20px' }}>Student details</button>
            </Link>
            <Link to="/deletetask">
              <button style={{ margin: '10px', padding: '10px 20px' }}>DeleteTask</button>
            </Link>
            <Link to="/viewupp">
              <button style={{ margin: '10px', padding: '10px 20px' }}>View</button>
            </Link>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default TeacherHome;