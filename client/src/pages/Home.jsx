import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RestaurantItem from '../components/RestaurantItem';

const Home = () => {
  const navigate = useNavigate();
  const {restaurants, getALLRestaurants} = useAppContext()

  

  useEffect(() => {
    getALLRestaurants()
  
   
  }, [ ])
  
  
  return (
    <>
    <Navbar/>
    <div className='h-screen flex flex-col items-center justify-between'>
      <div className='flex flex-col w-full px-5'>
        <h3 className='text-2xl font-semibold my-3'>Restaurants</h3>
        <div className='w-full flex gap-5'>
         {restaurants.map((item)=>(
          <RestaurantItem key={item.id} item={item}/>
         ))}
        </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Home