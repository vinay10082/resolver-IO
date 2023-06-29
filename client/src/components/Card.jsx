import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({header, title,description, navigateLink}) => {

  return (
    <div class="h-56 w-80">
    <div class="h-full w-full shadow-[10px_10px_10px_0px_rgba(9,70,121,76)] rounded">
    <div class="card-header px-6 py-4 font-bold text-2xl">
    {header}</div>
   <div class="card-body">
     <h5 class="font-bold text-xl">{title}</h5>
     <p class="text-gray-700 text-base my-8">{description}</p>
     <Link to={navigateLink} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Use</Link>
   </div>
    </div>
  </div>
  )
}

export default Card