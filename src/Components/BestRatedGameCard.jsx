import { FaStar } from "react-icons/fa"


const BestRatedGameCard = ({ data }) => {
  const { title, rating, description, imageUrl } = data

  return (

      <div className='bg-base-100 shadow-xl text-black card'>
        <figure className='px-5 pt-5'>
          <img src={imageUrl} alt='Shoes' className='rounded-xl h-80' />
        </figure>
        <div className='items-center text-center card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <p className="flex items-center">
            <span>{rating}</span>
            <FaStar className="text-yellow-400"></FaStar>
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary'>Explore More</button>
          </div>
        </div>
      </div>

  )
}

export default BestRatedGameCard
