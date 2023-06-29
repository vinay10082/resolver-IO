import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const ScifiImage = () => {

  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:8080/api/v1/openai/scifi-image`, { text });
      console.log(data);
      setImage(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div class="mb-6 w-96 mx-auto">
      <h1 class='font-bold text-center text-3xl mb-6'>Scifi Image</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-6">
        <input
          placeholder="add your text"
          type="text"
          class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </div>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit'>
          Submit
        </button>
        <p class="mb-6">Not this tool ? <Link class="font-bold text-xl" to="/">Go Back</Link></p>
      </form>
      {
        image?
        (
          <div class="container">
            <img src={image} alt="scifiimage" /> 
          </div>
        )
        :
        (
          <div class="container p-5 mx-auto h-96 min-h-full">
          <p>Response Appears here...</p>
          </div>
        )
      }
    </div>
  )
}

export default ScifiImage