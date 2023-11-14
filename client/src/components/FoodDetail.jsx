import React from 'react';
import FoodItemCard from './FoodItemCard';

const FoodDetail = () => {
  const foodItem = {
    name: 'Delicious Food Item',
    description: 'A mouth-watering description of the food item.',
    price: '15.99',
    category: 'Specialty',
  };

  const reviews = [
    { user: 'User1', comment: 'Delicious! Highly recommended.' },
    { user: 'User2', comment: 'Great taste and good portion size.' },
    { user: 'User3', comment: 'Fantastic flavor, will order again.' },
    { user: 'User4', comment: 'Perfectly cooked, exceeded expectations.' },
    { user: 'User5', comment: 'Best dish Ive had in a while!' },
  ];

  const handleOrderNow = () => {
    console.log('Order Now Clicked!');
  };

  return (
    <div className="p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Food Item Details</h2>
        <div className="bg-white p-4 rounded-md shadow-md m-4 border-2 border-gray-300">
      <h3 className="text-lg font-semibold mb-2">gudbad</h3>
      <p className="text-gray-600 mb-2">One of the best</p>
      <p className="text-gray-700 mb-2">Rs 120</p>
      <p className="text-blue-500 font-medium">ice-cream veg</p>
    </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-gray-700 font-medium">- {review.user}</p>
          </div>
        ))}
      </section>

      <section>
        <button
          onClick={handleOrderNow}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Order Now
        </button>
      </section>
    </div>
  );
};

export default FoodDetail;
