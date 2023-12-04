import React, { useEffect } from 'react';
import FoodItemCard from './FoodItemCard';
import {AiTwotoneDelete} from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Navbar from './Navbar';

const FoodDetail = () => {
  const { user, reviews, foodItemDetail, getFoodDetails , addToCart} = useAppContext();
  const { foodId } = useParams()
  const navigate = useNavigate();
  
  const handleCart = () => {
    addToCart(foodId)
  };

  const handleReview = () => {
    navigate(`/addReview/${foodItemDetail.id}`)
  }

  useEffect(() => {
    getFoodDetails(foodId)


  }, [])


  return (
    <>
      <Navbar />
      <div className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{foodItemDetail?.name}</h2>
          <div className='flex'>
            <div className='rounded-lg' style={{ "width": "30%", "height": "300px" }}>
              <img src={foodItemDetail?.photo} alt={foodItemDetail?.name} style={{ "width": "100%", "height": "100%" }} className='rounded-lg'/>
            </div>

            <div className="bg-white p-4 flex flex-col gap-2 pr-96">
              <p className="text-gray-700 mb-2 ">{foodItemDetail?.description}</p>
              <p className="text-gray-700 mb-2">Rs {foodItemDetail?.price}</p>
              <p className="text-blue-500 font-medium">{foodItemDetail?.category?.join(" ")}</p>
            </div>

          </div>
        </section>

        {user?.role === "customer" && <section>
          <button
            onClick={handleCart}
            className="bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-600"
          >
            Add to cart
          </button>
          <button
            onClick={handleReview}
            className="bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-600"
          >
            Add Review
          </button>
        </section>}
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {reviews?.length !== 0 ? (
            <div>
              {reviews?.map((review) => (
                <div key={review?.id} className="bg-white border-2 border-gray-200 p-4 rounded-md shadow-sm hover:shadow-lg mb-4">
                  <p className="text-gray-600 mb-2">{review?.description}</p>
                  <p className="text-gray-700 font-medium">- {review?.userName}</p>
                  <div><AiTwotoneDelete/></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-2xl text-gray-700">No Reviews Yet</div>
          )}
        </section>


      </div>
    </>
  );
};

export default FoodDetail;
