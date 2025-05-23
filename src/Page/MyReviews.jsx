import React, { useContext, useEffect, useState } from 'react'
import ReviewCard from '../Components/ReviewCard'
import { AuthContext } from '../Auth/AuthProvaider'


const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReview,setMyReview] = useState([])
    useEffect(()=>{
        fetch(`https://b10-a10-server-side-developer-jaber.vercel.app/added-review/email/${user.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[])

  
  return (
    <div>
      <div className='bg-base-100 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-4xl'>My Reviews</h1>
            <p className='py-6'>
            Welcome to the Your Review page on Chill Gamer, where you can view all the reviews you've submitted. This page is your personal space to keep track of the games you've reviewed and see how your opinions have contributed to the gaming community. Whether you're a seasoned reviewer or just starting out, this page provides a comprehensive overview of your contributions.
            </p>
            {/* <button className='btn btn-primary'>Explore Details</button> */}
          </div>
        </div>
      </div>
      <section className='mx-auto w-11/12 md:w-8/12'>
        {myReview.map(card => (
          <ReviewCard key={card._id} review={card}></ReviewCard>
        ))}
      </section>
    </div>
  )
}

export default MyReviews
