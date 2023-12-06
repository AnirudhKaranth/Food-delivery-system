import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='absolute top-1/4 text-2xl font-bold'>
                    Under the guidance of Dr.Pradeep Kanchan
                </div>
            </div>
        </>
    )
}

export default About