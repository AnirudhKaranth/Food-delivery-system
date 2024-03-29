import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64'
import Navbar from './Navbar';

const AddFoodItem = () => {
  const [Category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [photo, setPhoto] = useState("")

  const navigate = useNavigate()

  const { addFoodItem, user, getAllFoodByCreaterId } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = Category.split(" ")
    let foodItem = {
      name,
      description,
      price,
      category,
      photo
    }

    if (addFoodItem(foodItem)) {
      getAllFoodByCreaterId(user?.id)
      navigate(`/home/${user?.id}`)
    } else {
      alert("addfood failed")
    }
  };

  return (
    <>
    <Navbar/>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
            />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm mb-2 font-medium text-gray-600">
            Image
          </label>
          <FileBase64 type='file' id="photo" multiple={false} onDone={({ base64 }) => setPhoto(base64)} />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <input
            type="text"
            id="Category"
            name="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
            />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
          Add
        </button>
      </form>
    </div>
          </>
  );
};

export default AddFoodItem;
