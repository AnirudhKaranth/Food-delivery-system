import React from 'react';
import Navbar from '../components/Navbar';
import mentorImg from '../assets/mentor.jpg'
import adithya from '../assets/adithya.jpg'
import anirudh from '../assets/anirudh.jpeg'

const About = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 l">Project Under Guidence of </h1>

        <div className="mb-8">
          <img
            src={mentorImg}
            alt="Sir photo" 
            className="mx-auto rounded-full h-40 w-40 object-cover mb-2"
          />
          <p>Dr Pradeep Kanchan</p>
          <p>Assistant Professor Gd-III</p>
        </div>
        <h1 className="text-3xl font-bold mb-4 l">Team Members</h1>
        <div className="flex justify-around">
          <div className="mb-4">
            <img
              src={adithya}
              alt="Team1"
              className="mx-auto rounded-full h-32 w-32 object-cover mb-2"
            />
            <p>Adithya M S</p>
            <p>4NM21CS003</p>
          </div>

          <div className="mb-4">
            <img
              src={anirudh}
              alt="Team2"
              className="mx-auto rounded-full h-32 w-32 object-cover mb-2"
            />
            <p>Anirudh Karanth</p>
            <p>4NM21CS026</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;