import { useEffect, useState } from "react"
import GenricGamesCard from "./GenricGamesCard";

const GameGenric = () => {
    const [genric,setGenric] = useState([]);

    useEffect(()=>{
        fetch('https://b10-a10-server-side-developer-jaber.vercel.app/populer-genric')
        .then(res=>res.json())
        .then(data=>setGenric(data))
    },[])
    
  return (
    <div>
      <div className='bg-base-100 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-xl'>
            <h1 className='font-bold text-2xl md:text-4xl'>Explore Top Game Genres</h1>
            <p className='py-6'>
            Discover the diverse world of gaming through our curated selection of popular genres. Whether you’re into fast-paced action, strategic gameplay, or immersive storytelling, find the perfect genre that matches your gaming style and preferences.
            </p>
          </div>
        </div>
      </div>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-10 2xl:w-9/12 xl:11/12">
        {
            genric.map(card => <GenricGamesCard key={card._id} data={card}></GenricGamesCard>)
        }
      </section>
    </div>
  )
}

export default GameGenric
