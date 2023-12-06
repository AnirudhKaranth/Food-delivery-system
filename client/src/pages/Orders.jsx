import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import OrderItem from '../components/OrderItem'

const Orders = () => {
    const {getResOrders, orders, updateStatus} = useAppContext()
    const { Rid } = useParams()
    const handleStatus = (id)=>{
        updateStatus(id)
        // console.log(id)
    }

    useEffect(() => {
        getResOrders(Rid)
    }, [])
    
  return (
    <>
     <Navbar/>
     <div className='h-screen w-full flex items-start justify-center'>
        <div className='border-2 border-gray-100 rounded-md shadow-sm mt-1' style={{ "width": "50%", "height": "85%" }}>
          <div className='w-full flex items-center justify-center text-5xl my-3 font-semibold'>
          Orders
          </div>
          <div className='one text-white'>.</div>
          {orders?.length !== 0 ?
            (<div className='flex flex-col items-center justify-start gap-2 overflow-auto' style={{ "height": "80%" }}>
              {orders?.map((item) => (
                <OrderItem item={item} handleStatus={handleStatus}  />
              ))}
            </div>) :
            (<div>
              No orders yet
            </div>)}
         

        </div>
      </div>   
    </>
  )
}

export default Orders