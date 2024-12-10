import React from 'react'

const SmallContainerBlog = ({cardData}) => {
  return (
    <div className='flex flex-wrap justify-around mx-20'>
        {cardData.map((card, index) => (
            <div
            key={index}
            className="w-1/3 p-5">
              <img className='w-min-[80%] w-max-[80%] py-4 hover:filter hover:blur-[2px] transform duration-500' src={card.imageUrl}></img>
              <h1 className='text-xl font-bold py-2'>{card.heading}</h1>
              <p>{card.paragraph}</p>
            </div>
        ))}
    </div>
  )
}

export default SmallContainerBlog