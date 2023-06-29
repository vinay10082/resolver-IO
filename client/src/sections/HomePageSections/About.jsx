import React from 'react'
import IMAGES from '../../assets'

const About = () => {
  return (
    <>
  <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-30'></div>
    <img class="w-full mt-8" src={IMAGES.aboutImage} alt="" />
    </>
  )
}

export default About