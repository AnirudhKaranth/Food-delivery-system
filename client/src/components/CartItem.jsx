import React from 'react'
import { MdDelete } from "react-icons/md";
import { useAppContext } from '../context/appContext';

const CartItem = ({ item, handleremove }) => {

  return (
    <div className=" bg-white shadow-lg rounded-lg flex flex-col overflow-hidden m-4" style={{ "width": "90%" }}>
      <div className='flex items-center'>
        <img
          className="w-12 h-12 rounded-full object-cover m-1"
          src={item?.Food?.photo}
          alt={item?.Food?.name}
        />
        <div className="px-6 py-2">
          <div className="font-semibold text-l mb-1">{item?.Food?.name}</div>
          <p className="text-gray-700 text-base">Rs {item?.Food?.price}</p>
        </div>

      </div>
      <div className='flex items-end justify-end mx-1 mb-1 cursor-pointer' onClick={() => handleremove(item?.id)}>
        <MdDelete fontSize={25} />
      </div>
    </div>

  )
}

export default CartItem