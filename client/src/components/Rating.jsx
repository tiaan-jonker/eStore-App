import React from 'react'

const Rating = ({ value, text }) => {
  const ratingArray = [...Array(value).keys()].map((i) => i + 1)

  return (
    <>
      {ratingArray.map((i) => (
        <i key={i} className='fas fa-star'></i>
      ))}
      <span className='ms-3'>{text && text}</span>
    </>
  )
}

export default Rating
