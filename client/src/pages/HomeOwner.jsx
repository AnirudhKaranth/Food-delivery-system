import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'
import FoodItemCard from '../components/FoodItemCard'
import Navbar from '../components/Navbar'

const HomeOwner = () => {
    const { getAllFoodByCreaterId, foodItems} = useAppContext()
    const {ownerId} = useParams()
    console.log(ownerId)

    useEffect(() => {
      getAllFoodByCreaterId(ownerId)

    }, [])
    


  return (
    <>
    <Navbar/>
    <div className='h-screen w-full pt-5 pl-8'>
      <h2 className='text-2xl mb-3 font-semibold'>MY MENU</h2>
    <div className="flex flex-col items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((item) => (
          <FoodItemCard key={item.id} foodItem={item} />
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default HomeOwner