import { useEffect, useState } from "react"
import ReviewCard from "../Components/ReviewCard"

const AllReviwe = () => {
    const [review,setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/added-review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
  return (
    <div>
      <div className='bg-base-100 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-4xl'>All Game Reviews</h1>
            <p className='py-6'>
            Dive into the world of gaming with our comprehensive collection of game reviews. Explore detailed insights, ratings, and personal experiences shared by fellow gamers. Whether you're looking for your next favorite game or want to share your thoughts on a recent play, our review section offers a diverse range of opinions and recommendations. Stay informed and find the best games to match your preferences!
            </p>
            {/* <button className='btn btn-primary'>Explore Details</button> */}
          </div>
        </div>
      </div>
      <section className="mx-auto w-8/12">
        {
            review.map(card => <ReviewCard key={card._id} review={card}></ReviewCard>)
        }
      </section>
    </div>
  )
}

export default AllReviwe
