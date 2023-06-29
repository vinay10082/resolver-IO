import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import styles from '../styles'

const Navbar = () => {

  const navigate = useNavigate();

  const loggedIn = JSON.parse(localStorage.getItem('authToken'));

  //handle logout
  const handleLogout = async() => {
    try 
    {
      await axios.post('http://localhost:8080/api/v1/auth/logout');
      localStorage.removeItem("authToken");
      console.log('Logout Successfully');
      navigate('/login');
    } 
    catch (error) 
    {
      console.log(error);
    }
  };

  return (
  <div>
  <div class="nav p-4">
  <div class="flex justify-between space-x-7">
  <div class="nav-header">
  <a class="nav-brand font-bold text-3xl text-gray-500" href="/">resolver.io</a>
  </div>
    {
        loggedIn?
        (
          <ul class="space-x-3">
          <li class="nav-item">
            <button className='btn btn-link' onClick={handleLogout}>Log Out</button>
          </li>
          </ul>
        )
      :  (
        <ul class="flex space-x-3">
      <li class="nav-item">
        <a class="nav-link" href='/login'>Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='/register'>Sign Up</a>
      </li>
      </ul>
        )
      }
      </div>
</div>
  </div>
  )
}

export default Navbar