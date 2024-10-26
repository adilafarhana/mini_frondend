import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navtask from '../Navtask';

const SignUp = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        registernumber: "",
        password: "",
        confirmpassword: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        const { password, confirmpassword } = data;

        if (password !== confirmpassword) {
            return alert("Passwords do not match.");
        }

        try {
            const response = await axios.post("http://localhost:3032/signup", data);
            if (response.data.status === "Success") {
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("userid", response.data.userid);
                navigate("/"); // Redirect on success
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during sign-up: " + (error.response?.data?.message || "Unexpected error"));
        }
    };

    const navigate = useNavigate();

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
            <h5 style={{ color: 'white' }}>SIGNUP</h5>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                width: '1250px',
                textAlign: 'center'
            }}>
                <div className="row g-3">
                    <div className="col">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" name="username" value={data.username} onChange={inputHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="registernumber" className="form-label">Registernumber</label>
                        <input type="text" className="form-control" name="registernumber" value={data.registernumber} onChange={inputHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmpassword" value={data.confirmpassword} onChange={inputHandler} />
                    </div><br></br>
                    <div className="col">
                        <center>
                        <button className="btn btn-success" onClick={readValue}>Sign Up</button></center>
                    </div>
                </div>
                <div>
                    <a className="nav-link" href="/">Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
