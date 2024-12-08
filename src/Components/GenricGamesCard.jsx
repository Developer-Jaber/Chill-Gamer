const GenricGamesCard = ({data}) => {
  const {imageUrl,description,name} = data
  return (
    <div className='col-span-1 bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-500 shadow-lg mx-auto rounded-lg w-[80%] text-white'>
      <div className='p-4 text-center'>
        <h2 className='mb-2 font-bold text-xl'>{name}</h2>
      </div>
      <div className='flex justify-center'>
        <img
          className='rounded-full w-32 h-32 object-cover'
          src={imageUrl} 
          alt='Glitch Run'
        />
      </div>
      <div className='p-4 text-center'>
        <p className='text-sm'>
          {description}
        </p>
      </div>
      <div className="bg-green-400 m-2 p-3 rounded-xl w-32 text-center text-white">Chackout</div>
    </div>
  )
}

export default GenricGamesCard
