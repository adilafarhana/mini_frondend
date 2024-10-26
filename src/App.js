import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/user/SignUp';
import SignIn from './components/user/SignIn';
import AdminLogin from './components/Admin/AdminLogin';
import DeleteTask from './components/Admin/DeleteTask';
import UpdateTask from './components/UpdateTask';
import Addtask from './components/Admin/Addtask';
import ViewTask from './components/user/ViewTask';
import Main from './components/Main';
import ViewAll from './components/user/ViewAll';
import TeacherHome from './components/Admin/TeacherHome';
import ViewSignup from './components/Admin/ViewSignup';
import ViU from './components/Admin/ViU';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/usersignup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/addtask" element={<Addtask />} />
                <Route path="/update" element={<UpdateTask />} />
                <Route path="/view" element={<ViewTask />} />
                <Route path="/" element={<Main />} />
                <Route path="/viewall" element={<ViewAll />} />
                <Route path="/thome" element={<TeacherHome />} />
                <Route path="/viewsignup" element={<ViewSignup />} />
                <Route path="/deletetask" element={<DeleteTask />} />
                <Route path="/viewupp" element={<ViU />} />
                
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
