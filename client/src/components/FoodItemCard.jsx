import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodItemCard = ({foodItem}) => {
  const navigate = useNavigate()
  let category = foodItem.category.join(" ")
  const{id}=foodItem

  const handleClick = (e)=>{
    navigate(`/foodDetails/${id}`)
  }
  return (
    <div className="bg-white p-4 rounded-md shadow-md m-4 border-2 border-gray-300" onClick={handleClick}>
      <h3 className="text-lg font-semibold mb-2">{foodItem.name}</h3>
      <p className="text-gray-600 mb-2">{foodItem.description}</p>
      <p className="text-gray-700 mb-2">Rs {foodItem.price}</p>
      <p className="text-blue-500 font-medium">{category}</p>
    </div>
  );
}

export default FoodItemCard