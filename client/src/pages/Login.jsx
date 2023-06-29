import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //register control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      await axios.post('http://localhost:8080/api/v1/auth/login', {email, password})
        localStorage.setItem("authToken", true);
        console.log('Sign In Successfully');
        navigate('/');
    } 
    catch (err) 
    {
      console.log(err);
      if(err.response.data.error){
        setError(err.message)
      }
      else if(err.message){
        setError(err.message)
      }
      setTimeout(() => {
        setError("");
      }, 5000)
    }
  }

  return (
    <div class="mb-6 w-96 mx-auto">
    <h1 class='font-bold text-center text-3xl mb-6'>Sign In</h1>
    <form onSubmit={handleSubmit}>
    <div class="mb-6">

      <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="useremail">Email</label>
    <input class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="useremail" type="email"  value={email} onChange={(e) => {setEmail(e.target.value)}} />
      </div>

      <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="userpassword" >Password</label>
    <input class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" id="userpassword" required value={password} onChange={(e) => {setPassword(e.target.value)}} />
      </div>

    </div>
    
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Log In</button>
    </form>
    {/* without refresh page switch */}
    <p>Don't have an account ? <Link class="font-bold text-xl" to="/register">Register</Link></p>
    </div>
  )
}

export default Login