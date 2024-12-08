import { useEffect, useState } from 'react'

const UpcomingGame = () => {
  const [upcomingGames, setUpcomingGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/upcoming-game')
      .then(res => res.json())
      .then(data => setUpcomingGames(data))
  }, [])
  return (
    <div>
      <div className='bg-gray-900 py-10 text-white'>
        <div className='mx-auto mb-20 max-w-4xl'>
          <h2 className='mb-4 font-bold text-3xl text-center'>
            Upcoming Game Releases
          </h2>
          <p className='mb-4 text-center text-gray-400'>
            Get ready for the most anticipated games of the year! Our Upcoming
            Game Releases section brings you the latest titles set to hit the
            market. Stay ahead of the curve with exclusive previews, detailed
            descriptions, and stunning visuals. Whether you're into action,
            adventure, RPGs, or racing, discover what's next in the world of
            gaming and mark your calendars for these epic launches. Don't miss
            out
          </p>
          <p className='mb-2 text-center text-gray-400'>
            —explore and pre-order your future favorite games today!
          </p>
        </div>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 max-w-6xl'>
          {upcomingGames.map(game => (
            <div
              key={game._id}
              className='bg-gray-800 shadow-lg rounded-lg overflow-hidden'
            >
              <img
                className='w-full h-48 object-cover'
                src={game.imageUrl}
                alt={game.title}
              />
              <div className='p-6'>
                <h3 className='mb-2 font-bold text-2xl'>{game.title}</h3>
                <p className='mb-4 text-gray-400 text-sm'>
                  Release Date:{' '}
                  {new Date(game.releaseDate).toLocaleDateString()}
                </p>
                <p className='mb-4 text-gray-300'>{game.description}</p>
                <button className='w-full btn btn-primary'>
                  Pre-Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingGame
