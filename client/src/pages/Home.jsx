import React from 'react'
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {logout} = useAppContext()
  const navigate = useNavigate();

    const handlelogout = ()=>{
      logout()
      navigate("/")
    }
  
  return (
    <div className='h-screen flex flex-col items-center justify-between'>
      <div className='flex items-end justify-end w-full p-5'>
        <button  className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer' onClick={handlelogout}>logout</button>
      </div>
      <div className='text-8xl' style={{"height":"80%"}}>
        HOME PAGE
      </div>
    </div>
  )
}

export default Home