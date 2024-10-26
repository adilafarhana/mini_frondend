import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        emailid: "",
        password: ""
    });


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };


    const readValue = async () => {
        try {
            const response = await axios.post("http://localhost:3032/usersignin", data);
            console.log(response.data);


            if (response.data.status === "Success") {
                alert("Successfully logged in");
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("userid", response.data.userid);
                // Navigate to ViewTask page instead of Eventreg
                navigate("/Viewall");
            } else {
                alert("Error: " + (response.data.message || "An error occurred"));
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            const errorMessage = error.response?.data?.message || "An unexpected error occurred";
            alert("Error: " + errorMessage);
        }
    };


    const Adminlogin = () => {
        sessionStorage.clear();
        navigate("/Adminlogin");
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
            <center><h2 style={{ color: 'black' }}>STUDENT </h2></center>
            <br />
            <h1 style={{ color: 'black' }}><center>LOGIN HERE</center></h1>
            <br />
            <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="emailid" className='form-label'>Email id</label>
                                <input type="text" className='form-control' name='emailid' value={data.emailid} onChange={inputHandler} />
                            </div>


                            <div className="col">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input type="password" className='form-control' name='password' value={data.password} onChange={inputHandler} />
                            </div>
                        </div>


                        <br />
                        <center>
                            <div className="col" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <button className="btn btn-success" onClick={readValue} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Login</button>
                                <Link to="/">
                                    <button className="btn btn-success" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>BACK</button>
                                </Link>
                                <button className="btn btn-dark" onClick={Adminlogin}>ADMIN</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignIn;
