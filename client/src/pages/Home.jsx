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
  
   
  }, [ restaurants, getALLRestaurants])
  
  
  return (
    <>
    <Navbar/>
    <div className='h-screen flex flex-col items-center justify-between'>
      <div className='flex flex-col'>
        <h3>Restaurants</h3>
        <div>
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