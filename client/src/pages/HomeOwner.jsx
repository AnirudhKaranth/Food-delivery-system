import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'
import NavbarOwner from '../components/NavbarOwner'
import FoodItemCard from '../components/FoodItemCard'

const HomeOwner = () => {
    const { getAllFoodByCreaterId, foodItems} = useAppContext()
    const {ownerId} = useParams()

    useEffect(() => {
      getAllFoodByCreaterId(ownerId)

    }, [])
    


  return (
    <>
    <NavbarOwner/>
    <div className='h-screen w-full pt-5 pl-8'>
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