import React from 'react'
import idealcafe from '../assets/ideal-cafe.jpg'
import vegeenation from '../assets/Vegeenation1.jpg'
import { useNavigate } from 'react-router-dom'

const RestaurantItem = ({item}) => {
 const navigate = useNavigate()
  let arr = [idealcafe, vegeenation,"Hhh","hhh","hhhh"]
  let i=0

  const handleClick = (e)=>{
    navigate(`/restaurantDetail/${item?.id}`)
  }
  return (
    <>
    <div className="bg-white shadow-md rounded-lg pb-2 max-w-sm border-2 border-gray-300" style={{"width":"300px"}} onClick={handleClick}>
      <div>
        <img src={arr[i++]} alt="logo" className='rounded-t-lg'/>
      </div>
      <div className='p-4'>

    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
    <p className="text-gray-600 mb-4">{item.description}</p>
    <div className="flex justify-between items-center">
      <div className="text-gray-500 m-1">
        <p>{item.location}</p>
        <p>Category: {item.category.join(', ')}</p>
      
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
      </div>
    </div>
      </div>
  </div>
    </>
  )
}

export default RestaurantItem