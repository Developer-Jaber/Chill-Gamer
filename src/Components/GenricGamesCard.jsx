const GenricGamesCard = () => {
  return (
    <div className='col-span-1 bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-500 shadow-lg mx-auto rounded-lg w-[80%] text-white'>
      <div className='p-4 text-center'>
        <h2 className='mb-2 font-bold text-xl'>Glitch Run</h2>
      </div>
      <div className='flex justify-center'>
        <img
          className='rounded-full w-32 h-32 object-cover'
          src='https://example.com/glitch-run.jpg' // replace with your image URL
          alt='Glitch Run'
        />
      </div>
      <div className='p-4 text-center'>
        <p className='mb-2 text-sm'>
          <strong>Game Levels:</strong> 15+
        </p>
        <p className='mb-2 text-sm'>
          <strong>Achievements:</strong> 150+
        </p>
        <p className='text-sm'>
          <strong>Player Lives:</strong> 6+
        </p>
      </div>
    </div>
  )
}

export default GenricGamesCard
