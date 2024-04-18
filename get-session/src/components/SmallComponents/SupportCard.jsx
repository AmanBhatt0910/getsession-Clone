import React from 'react'

const SupportCard = (props) => {
  return (
    <div className='flex justify-center my-14'>
        <div className="w-[60vw]">
            <img className='w-[70%] pl-10' src="/ui-showcase.webp" alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='text-6xl font-bold pb-5'>{props.heading}</h1>
            <p className='text-2xl'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default SupportCard