import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import { Link, useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64'

const OwnerLogin = () => {
  const { loginOwner, signupOwner, user } = useAppContext()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [description, setdescription] = useState("")
  const [location, setLocation] = useState("")
  const [photo, setPhoto] = useState("")
  const [phone, setPhone] = useState("")
  const [category, setCategory] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      let Category = category.split(" ");
      setPhoto("hi")
      let currentUser = {
        name,
        email,
        phone,
        location,
        description,
        photo,
        Category,
        password
      }
      signupOwner(currentUser)
    } else {
      let currentUser = {
        email,
        password
      }
      loginOwner(currentUser)
    }

  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`/home/${user._id}`)
      }, 1000);
    }

  }, [user, navigate])

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className="bg-gray-100 p-4 rounded-lg w-80 mx-auto " >
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-start gap-2 " style={{ "height": "90%" }}>
          <h3 className="text-2xl font-bold text-center my-9">{isSignUp ? "Sign Up" : "Login"}</h3>

          {isSignUp && (
            <label htmlFor="name" className="block">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter the restaurant name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </label>
          )}

          <label htmlFor="email" className="block">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </label>

          {isSignUp && (
            <>
              <label htmlFor="phone" className="block">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </label>
              <label htmlFor="location" className="block">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </label>
              <label htmlFor="description" className="block">
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </label>

              {/* <label htmlFor="photo" className="block">
                <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPhoto(base64)} />
              </label> */}
              <label htmlFor="category" className="block">
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter the categories "
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </label>


            </>
          )}

          <label htmlFor="password" className="block">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              autoComplete="current-password"
            />
          </label>

          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>

          <div className="text-center">
            <p>
              {isSignUp ? "Already have an account? " : "Need an account? "}
              <span onClick={() => setIsSignUp(!isSignUp)} className='cursor-pointer text-blue-500 hover:text-blue-600'>{isSignUp ? "login" : "signup"}</span>
            </p>
          </div>
        </form>
      </div>
      <Link to="/auth-user" className='mr-5 bg-blue-400 p-4'>login as user</Link>
    </div>
  )
}

export default OwnerLogin