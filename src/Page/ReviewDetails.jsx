import { useContext, useState } from 'react'
import {
  FaComment,
  FaEdit,
  FaFacebook,
  FaGooglePlay,
  FaHeart,
  FaPinterest,
  FaStar,
  FaTrash,
  FaTwitter
} from 'react-icons/fa'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvaider'
import Swal from 'sweetalert2'

const ReviewDetails = () => {
  const { user } = useContext(AuthContext)
  const data = useLoaderData()
  const [review,setReview] = useState(data)
  const navigate = useNavigate()
  const {
    _id,
    coverImage,
    title,
    description,
    rating,
    year,
    genre,
    email,
    name
  } = data


  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this Update!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-server-side-developer-jaber.vercel.app/added-review/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 1) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Review has been deleted.',
                icon: 'success'
              })
              navigate('/')
              const remainigReview = review.filter(riv=> riv._id !== id)
              setReview(remainigReview)
            }
          })
      }
    })
  }

  const handleAddWachlist = () =>{
    fetch('https://b10-a10-server-side-developer-jaber.vercel.app/watchlist',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        console.log('wachlist item is added',data);
      }
    })
  }
  return (
    <div>
      <div className='bg-gray-100 p-8 min-h-screen'>
        <div className='bg-white shadow-lg mx-auto rounded-lg max-w-4xl overflow-hidden'>
          <div className='px-6'>
            <div className='flex justify-end gap-4'>
              {user?.email === email ? (
                <div className='flex justify-end gap-4 my-5'>
                  <Link to={`/reviews/update_review/${_id}`}>
                    <FaEdit className='text-4xl'></FaEdit>
                  </Link>
                  <button onClick={() => handleDelete(_id)}>
                    <FaTrash className='text-3xl text-red-500'></FaTrash>
                  </button>
                </div>
              ) : (
                <></>
              )}
              <button onClick={handleAddWachlist}>
                <FaHeart className='text-3xl text-red-500'></FaHeart>
              </button>
            </div>
            <h2 className='mb-4 font-bold text-3xl text-gray-800'>
              {title} || games of {year} || Genre : {genre}
            </h2>
            <p className='text-gray-600 text-sm'>
              <span className='font-semibold text-orange-500'>Features</span> |
              By {name} | Contributions from{' '}
              <span className='font-semibold text-orange-500'>
                GamesRadar Staff
              </span>{' '}
              published 2 days ago
            </p>
            <p>Email: {email}</p>
            <p className='mt-2 text-gray-700'>{description}</p>
            <p>
              Ratings: {rating} <FaStar></FaStar>{' '}
            </p>
            <div className='flex space-x-2 mt-4'>
              <Link to='/' className='text-blue-500'>
                <FaFacebook></FaFacebook>
              </Link>
              <Link to='/' className='text-red-500'>
                <FaPinterest></FaPinterest>
              </Link>
              <Link to='/' className='text-black'>
                <FaTwitter></FaTwitter>
              </Link>
              <Link to='/' className='text-gray-500'>
                <FaGooglePlay></FaGooglePlay>
              </Link>
              <Link to='/' className='text-orange-500'>
                <FaComment></FaComment>
              </Link>
            </div>
            <p className='mt-2 text-gray-600 text-sm'>
              When you purchase through links on our site, we may earn an
              affiliate commission.{' '}
              <Link to='/' className='text-blue-500'>
                Here’s how it works
              </Link>
              .
            </p>
          </div>
          <img
            className='w-full h-64 object-cover'
            src={coverImage}
            alt={title}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
