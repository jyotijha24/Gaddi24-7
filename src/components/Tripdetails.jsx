import React from 'react'
import { FaCarSide } from "react-icons/fa6";

function Tripdetails() {
  return (
    <>
      <div className='w-[150px] h-[150px] relative  mx-auto bg-orange-600 hover:bg-blue-950 border-2 border-white rounded-2xl'>
       <div className='absolute font-extralight top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
        <FaCarSide /></div> 
        </div>
    </>
  )
}

export default Tripdetails
