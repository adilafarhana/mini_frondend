import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [data, setData] = useState({
    emailid: "",
    password: ""
  });

  const navigate = useNavigate(); // Initialize navigate function

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const readValue = async () => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:3032/adminsignin", data);
      console.log(response.data);
      if (response.data.status === "success") {
        alert("Successfully logged in as admin");
        navigate('/Thome'); // Navigate to Addtask page on successful login
      } else {
        alert("Can't login. Please check your email or password.");
      }
    } catch (error) {
      console.error(error); // Handle errors
      alert("An error occurred during login.");
    }
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{
      height: '100vh',
      backgroundImage: 'url(https://png.pngtree.com/back_origin_pic/03/59/76/4b1c43ba785feb0d3b76aa472cbea4b6.jpg)',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <center><h5>ADMIN LOGIN</h5></center>
        <div className="row g-3">
          <div className="col col-12">
            <div className="row g-3">
              <div className="col col-12">
                <label htmlFor="emailid" className="form-label">Email id</label>
                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
              </div>
              <div className="col col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
              </div>
              <div className="col col-12">
                <button className="btn btn-success" onClick={readValue}>Login</button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleBackClick} 
                  style={{ marginLeft: '10px' }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
