import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ReviewCard = ({ review }) => {
  return (
    <div className='bg-base-100 shadow-xl my-5 lg:h-72 card lg:card-side'>
      <figure className='lg:w-7/12'>
        <img
          className='w-full h-full object-cover'
          src={review.coverImage}
          alt={review.title}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{review.title}</h2>
        <h2 className='font-bold text-gray-500 text-xl'>{review.genre}</h2>
        <div className='flex items-center w-24'>
          <p>Rating:  {review.rating}</p>
          <FaStar className='text-yellow-400'></FaStar>
        </div>
        <p className='mt-2'>
          {review.description.length > 100
            ? review.description.substring(0, 100) + '...'
            : review.description}
        </p>
        <div className='justify-end lg:-mt-5 card-actions'>
          <Link
            to={`/reviews/${review._id}`}
            className='block text-center btn btn-primary'
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
