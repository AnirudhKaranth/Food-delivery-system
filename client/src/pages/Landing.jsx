import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <button className='bg-blue-400 text-black'>
      <Link to={"/auth-user"}>login</Link>

      </button>
    </div>
  )
}

export default Landing