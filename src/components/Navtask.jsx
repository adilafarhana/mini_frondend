import React from 'react'
import { Link } from 'react-router-dom'



const Navtask = () => {
  return (
    <div>
           <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navtask</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Main</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signin">SignIn</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/usersignup">SignUp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/adminlogin">AdminLogin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addtask">AddTask</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">DeleteTask</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/update">Updatetask</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">ViewTask</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">ViewAll</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Thome">Teacherhome</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewsignup">View  Student details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/deletetask">Deletetask</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewupp">View uloading</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewup">View page</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navtask