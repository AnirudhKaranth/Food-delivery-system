import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useAppContext } from '../context/appContext'

const NavbarOwner = () => {
    const [search, setSearch] = useState("")
    const [isClicked, setIsClicked] = useState(false)
    const {user, logout, currentPerson} = useAppContext();
    const FirstLetterOfUser = user?.name?.split("")[0];
 
    const handleSearch = (e)=>{

    }

    const toggleProfile = () => {
        setIsClicked(!isClicked)
    }

    const logoutUser = () => {
        logout()
    }


  return (
    <div className='h-20 w-full flex justify-evenly items-center relative shadow-sm'>
        <div>
            <img src="" alt="logo" />
        </div>
        <form className='w-3/5 h-12 rounded-3xl border-2 border-gray-200 flex justify-start pl-1' onSubmit={handleSearch} style={{ "backgroundColor": "#efefef" }}>
                <button type='submit' className='p-1'><FaSearch fontSize={25} /></button>
                <label className='w-full h-full'>
                    <input type="text" value={search} className='h-full w-full px-3 rounded-3xl outline-none' onChange={(e) => setSearch(e.target.value)} style={{ "backgroundColor": "#efefef" }} />
                </label>
        </form>

        <Link to='/addFood' className='p-3 hidden sm:inline-block'><GrAdd fontSize={25} /></Link>

        
        <div onClick={toggleProfile} className='p-3 cursor-pointer'>
                {currentPerson?.photo && currentPerson?.profile?.length !== 0 ?
                    <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={currentPerson?.profile}
                        alt="user-profile"
                    />
                    :
                    <div className=' w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-300' style={{ "fontSize": "20px", "backgroundColor": "#efefef" }}>{FirstLetterOfUser}</div>
                }
            </div>

            {isClicked && <div className='absolute right-1 top-16 flex flex-col rounded-lg  border-2 border-gray-300 shadow-md z-30' style={{ "backgroundColor": "#fbf6f6" }}>
                <Link to={`/userProfile/${user?._id}`} className='p-2 hover:bg-gray-300 rounded-t-lg'>Your Profile</Link>
                <div className="line"></div>
                <Link to='/delete-account' className='p-2 hover:bg-gray-300' >Delete Account</Link>
                <div className="line"></div>
                <button type='button' className='p-2 hover:bg-gray-300 rounded-b-lg' onClick={logoutUser}>Logout</button>
            </div>}
    </div>
  )
}

export default NavbarOwner