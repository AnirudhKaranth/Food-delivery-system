import React, { useEffect } from 'react';
import FoodItemCard from './FoodItemCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Navbar from './Navbar';

const FoodDetail = () => {
  const { user, reviews, foodItemDetail ,getFoodDetails} = useAppContext();
  const { foodId } = useParams()
  const navigate = useNavigate();

  const handleOrderNow = () => {
    console.log('Order Now Clicked!');
  };

  const handleReview = () =>{
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
          <div className="bg-white p-4 rounded-md shadow-md m-4 border-2 border-gray-300">
            <p className="text-gray-700 mb-2">{foodItemDetail?.description}</p>
            <p className="text-gray-700 mb-2">Rs {foodItemDetail?.price}</p>
            <p className="text-blue-500 font-medium">{foodItemDetail?.category?.join(" ")}</p>
          </div>
        </section>

       {user.role==="customer"&& <section>
          <button
            onClick={handleOrderNow}
            className="bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-600"
          >
            Order Now
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
          {reviews.length !== 0 ? (
            <div>
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                  <p className="text-gray-600 mb-2">{review.comment}</p>
                  <p className="text-gray-700 font-medium">- {review.user}</p>
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
