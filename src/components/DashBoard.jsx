import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
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
          backgroundColor: 'wheat', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          textAlign: 'center' 
        }}>
        <h2>Welcome to Event Co</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
            <Link to="/signin">
              <button style={{ margin: '10px', padding: '10px 20px' }}>ViewTask</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default DashBoard;