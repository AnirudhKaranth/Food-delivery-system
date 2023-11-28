import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'
import idealcafe from '../assets/ideal-cafe.jpg'
import vegeenation from '../assets/Vegeenation1.jpg'
import FoodItemCard from '../components/FoodItemCard'

const RestaurantDetails = () => {

  const { restaurantDetails, reviews, foodItems, getRestaurantDetails } = useAppContext()
  const { restaurantId } = useParams()


  useEffect(() => {
    getRestaurantDetails(restaurantId)
  }, [restaurantDetails, reviews, foodItems, restaurantId, getRestaurantDetails])

  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex flex-col items-start p-5'>
        <div className='flex items-center justify-start w-full p-3 m-3'>
          <div>
            <img src={restaurantDetails.name==="Vegeenation"?vegeenation:idealcafe} alt="logo" width={450} />
          </div>
          <div className='flex flex-col gap-2 ml-5'>
            <h2 className="text-2xl font-semibold mb-4">{restaurantDetails.name}</h2>
            <p className="text-gray-600 mb-2 font-normal"> {restaurantDetails.description}</p>
            <p className="text-gray-600 mb-2">Location: {restaurantDetails.location}</p>
            <p className="text-gray-600 mb-2">Category: {restaurantDetails.category?.join(', ')}</p>
            <p className="text-gray-600 mb-2">Email: {restaurantDetails.email}</p>
            <p className="text-gray-600">Phone: {restaurantDetails.phone}</p>
          </div>
         

        </div>

        <div style={{ "height": "0.5px", "background": "gray", "width": "100%" }}></div>
        <div className='flex flex-col items-center justify-start w-full p-3 m-3'>
          <div>
            <h2 className='text-4xl font-semibold'>Menu</h2>
          </div>
          <div className=' w-full'>
            {foodItems.length !== 0 ? (
              <div className='flex'>
                {foodItems.map((item) => (
                  <FoodItemCard key={item.id} foodItem={item} />
                ))}
              </div>
            ) : (
              <div className='text-2xl'>
                  No Menu yet
              </div>
            )}
          </div>
        </div>

        <div style={{ "height": "0.5px", "background": "gray", "width": "100%" }}></div>

        <div className='flex flex-col items-center justify-start w-full p-3 m-3'>
          <div>
            <h2 className='text-4xl font-semibold'>Reviews</h2>
          </div>
          <div className='w-full'>
              {reviews.length !==0 ?(
                <div>

                </div>
              ):(
              <div>
               No reviews yet 
              </div>
              )}
          </div>
        </div>


      </div>
    </>
  )
}

export default RestaurantDetails