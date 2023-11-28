import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const AddReview = () => {
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()
    const {foodId} = useParams()
    const{addReview, getReviewsById} = useAppContext()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const reviewData = {
            description,
            rating,
            foodId 
        }

        if(addReview(reviewData)){
          getReviewsById(foodId);
          navigate(`/foodDetails/${foodId}`)
        }
       
    }

  return (
    <>
    <Navbar/>
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            name="rating"
            min="1"
            max="5"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={(e)=> setRating(e.target.value)}
            />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
          Submit Review
        </button>
      </form>
    </div>
            </>
  );
};

export default AddReview;
