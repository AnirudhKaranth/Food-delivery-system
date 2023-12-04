import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import Navbar from './Navbar'
import CartItem from './CartItem'
import { useParams } from 'react-router-dom'
import '../pages/RseDetail.css'

const Cart = () => {
  const { cart, getCartById, removeFromCart, createOrder } = useAppContext()
  const { userId } = useParams()
  const [isOrder, setisOrder] = useState(false)
  const [isDisabled, setisDisabled] = useState(false)
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")

  const handleremove = (id) => {
    removeFromCart(id)

  }
  let total = 0
  if(cart?.length !== 0 ){
    cart?.map((item)=>{
      total+=item?.Food.price
    })
  }

  const handleOrder = (e) => {
    e.preventDefault()
    let cartItems = cart.map((item) => {
      return {
        price: item?.Food.price,
        foodId: item.Fid,
        userId: item?.Uid,
        Rid: item?.Food?.Rid,
        address,
        phone,
        total
      }
    })

    createOrder(cartItems)

    setisOrder(false)
    // setisDisabled(false)
    alert("order placed successfully!")
  }

  useEffect(() => {
    getCartById(userId)
  }, [])

  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex items-start justify-center'>
        <div className='border-2 border-gray-100 rounded-md shadow-sm mt-1' style={{ "width": "30%", "height": "85%" }}>
          <div className='w-full flex items-center justify-center text-5xl my-3 font-semibold'>
            My Cart
          </div>
          <div className='one text-white'>.</div>
          {cart?.length !== 0 ?
            (<div className='flex flex-col items-center justify-start gap-2 overflow-auto' style={{ "height": "80%" }}>
              {cart?.map((item) => (
                <CartItem item={item} handleremove={handleremove} />
              ))}
            </div>) :
            (<div>
              Cart is Empty!
            </div>)}
          {cart?.length !== 0 &&
            <div className='mt-1 flex items-center justify-center'>
              <button type="button" className="bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-600"
                onClick={() => {
                  setisOrder(true)
                  setisDisabled(true)
                }
              }
               disabled={isDisabled}>Order Now</button>
            </div>}

        </div>
      </div>
      {isOrder &&
        <div className='bg-white absolute border-2 border-red shadow-lg' style={{ "top": "30%", "left": "32%", "width": "35%" }}>
          <form onSubmit={handleOrder} className='flex flex-col items-center justify-center w-full gap-3 p-4'>
            <h2 className='font-semibold text-2xl'>Finalize Order</h2>
            <label style={{ "width": "80%" }}>
              <input type="text" name="address" value={address} onChange={(e)=>setaddress(e.target.value)} className='h-10 border-2 border-gray-100 w-full p-2' placeholder='Enter your Address' />
            </label>
            <label className='' style={{ "width": "80%" }}>
              <input type="text" name="phone" value={phone} onChange={(e)=>setphone(e.target.value)} className='h-10 border-2 border-gray-100 w-full p-2' placeholder='Enter your number' />
            </label>
            <div  style={{ "width": "80%" }}>
              <p>Total cost: Rs {total}</p>
            </div>
            <div style={{ "width": "80%" }} className='flex items-center justify-center my-2'>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-600">Submit</button>
            </div>
          </form>

        </div>}

    </>
  )
}

export default Cart