import React from 'react'

function Card({image,title ,description}) {
  return (
    <>
    <div className='relative text-center hover:text-white group'>
      <div className=' bg-white w-[250px] h-[250px] rounded-xl flex flex-col justify-start py-3 px-5 hover:bg-blue-950 hover:text-white transition duration-300   border border-gray-100 shadow-xl'>
        <img src={image} alt={title} className="w-[100px] h-[100px] mb-4  mx-auto"/>
      <h1 className="text-blue-900 text-xl font-semibold mb-2 group-hover:text-white">
      {title}
      </h1>
        <p className="text-sm text-blue-900 group-hover:text-white">
            {description}
        </p>
      </div>
      </div>
    </>
  )
}

export default Card
