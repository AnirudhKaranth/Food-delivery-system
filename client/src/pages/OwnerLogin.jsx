import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import { Link, useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64'
import loginImg from '../assets/rsbg.jpg'

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
        navigate(`/home/${user.id}`)
      }, 1000);
    }

  }, [user, navigate])

  return (
    <div className='flex w-full h-screen items-center justify-center'  style={{backgroundImage: `url(${loginImg})`, backgroundSize: 'cover'}}>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative" >
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-start gap-2 " style={{ "height": "90%" }}>

          <h3 className="text-3xl font-bold text-center my-9 text-white">{isSignUp ? "Sign Up" : "Login"}</h3>

          {isSignUp && (
            <label htmlFor="name" className="block">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Restaurant name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
              />
            </label>
          )}

          <label htmlFor="email" className="block w-70">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
            />
          </label>

          {isSignUp && (
            <>
              <label htmlFor="phone" className="block">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
                />
              </label>
              <label htmlFor="location" className="block">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
                />
              </label>
              
              <label htmlFor="photo" className="block">
                <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPhoto(base64)} />
              </label>
              <label htmlFor="description" className="block">
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
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
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
                />
              </label>


            </>
          )}

          <label htmlFor="password" className="block">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 "
              autoComplete="current-password"
            />
          </label>

          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>

          <div className="text-center text-white">
            <p>
              {isSignUp ? "Already have an account? " : "Need an account? "}
              <span onClick={() => setIsSignUp(!isSignUp)} className='cursor-pointer text-blue-500 hover:text-blue-600'>{isSignUp ? "login" : "signup"}</span>
            </p>
          </div>
        </form>
      </div>
      
      <Link to="/auth-user" className='mr-5 bg-blue-400 p-3 absolute top-5 right-5 rounded-lg'>login as user</Link>
    </div>
  )
}

export default OwnerLogin