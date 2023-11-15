import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'

const RestaurantDetails = () => {

  const {restaurantDetails, reviews, foodItems, getRestaurantDetails} = useAppContext()
  const {restaurantId} = useParams()


  useEffect(() => {
    getRestaurantDetails(restaurantId)
  }, [restaurantDetails, reviews, foodItems, restaurantId, getRestaurantDetails])
  
  return (
    <>
    <Navbar/>
    <div className='h-screen w-full'>
    
      <h2 className="text-2xl font-semibold mb-4">{restaurantDetails.name}</h2>
      

      <p className="text-gray-600 mb-2">Category: {restaurantDetails.description}</p>
      <p className="text-gray-600 mb-2">Location: {restaurantDetails.location}</p>
      <p className="text-gray-600 mb-2">Email: {restaurantDetails.email}</p>
      <p className="text-gray-600">Phone: {restaurantDetails.phone}</p>
    

    </div>
    </>
  )
}

export default RestaurantDetails