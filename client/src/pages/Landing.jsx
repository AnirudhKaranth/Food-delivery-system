import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="font-sans">
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">Food Delivery Hub</h1>
      <nav className="mt-4">
        <span href="#" className="text-gray-300 mx-2 hover:text-white">Home</span>
        <span href="#" className="text-gray-300 mx-2 hover:text-white">Menu</span>
        <span href="#" className="text-gray-300 mx-2 hover:text-white">About Us</span>
        <span href="#" className="text-gray-300 mx-2 hover:text-white">Contact</span>
      </nav>
    </header>

    <section className="p-8 text-center">
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Discover Great Food</h2>
        <p className="text-gray-700">Order from the best restaurants in your area and enjoy delicious meals at your doorstep.</p>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">Special Offers Just for You</h2>
        <p className="text-gray-700">Explore our exclusive deals and discounts on a variety of cuisines.</p>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">Easy Ordering Process</h2>
        <p className="text-gray-700">Ordering your favorite food is just a click away. Choose, customize, and enjoy!</p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded-full">
      <Link to={"/auth-user"}>login</Link> 
      </button>
    </section>

    <footer className="bg-gray-800 text-white p-4 mt-3 text-center">
      <p>&copy; 2023 Food Delivery Hub. All rights reserved.</p>
    </footer>
  </div>
    )
  }
  
  export default Landing
  
  
{/* <button className='bg-blue-400 text-black'>
<Link to={"/auth-user"}>login</Link> 
</button> */}