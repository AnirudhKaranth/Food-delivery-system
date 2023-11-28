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
    <div className="bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer m-4 border-2 border-gray-300" style={{"width":"250px"}} onClick={handleClick}>
      <div style={{ "height":"50%"}}>
        <img src={foodItem?.photo} alt="logo" className='rounded-t-lg' style={{ "height": "100%","width":"100%" }} />
      </div>
      <div className='p-2'>
      <h3 className="text-lg font-semibold mb-2">{foodItem.name}</h3>
      <p className="text-gray-700 mb-2">Rs {foodItem.price}</p>
      <p className="text-blue-500 font-medium">{category}</p>

      </div>
    </div>
  );
}

export default FoodItemCard