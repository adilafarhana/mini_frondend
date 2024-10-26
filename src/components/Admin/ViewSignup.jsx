import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navtask from '../Navtask';

const ViewSignup = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3032/viewsignup");
            if (response.data) {
                setUsers(response.data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
            <h5 style={{ color: 'white' }}>User Sign Up Details</h5>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                width: '80%', // Adjust width as needed
                maxWidth: '1200px', // Maximum width
                textAlign: 'center',
                overflow: 'auto' // Add scroll if the table is too large
            }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Register Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.registernumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewSignup;
