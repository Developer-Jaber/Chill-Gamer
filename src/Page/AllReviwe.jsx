import { useEffect, useState } from 'react'
import ReviewCard from '../Components/ReviewCard'

const AllReviwe = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch('https://b10-a10-server-side-developer-jaber.vercel.app/added-review')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
        setFilteredReviews(data)

        // Extract unique genres from the reviews
        const uniqueGenres = [...new Set(data.map(review => review.genre))]
        setGenres(uniqueGenres)
      })
  }, [])

  useEffect(() => {
    let filtered = reviews

    if (selectedGenre) {
      filtered = filtered.filter(review => review.genre === selectedGenre)
    }

    if (sortType) {
      filtered = [...filtered].sort((a, b) => {
        if (sortType === 'ratingAsc') return a.rating - b.rating
        if (sortType === 'ratingDesc') return b.rating - a.rating
        if (sortType === 'yearAsc') return a.year - b.year
        if (sortType === 'yearDesc') return b.year - a.year
        return 0
      })
    }

    setFilteredReviews(filtered)
  }, [selectedGenre, sortType, reviews])

  const handleGenreChange = e => {
    setSelectedGenre(e.target.value)
  }

  const handleSortChange = e => {
    setSortType(e.target.value)
  }

  return (
    <div>
      <div className='bg-base-100 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-2xl lg:text-4xl'>All Game Reviews</h1>
            <p className='py-6'>
              Dive into the world of gaming with our comprehensive collection of
              game reviews. Explore detailed insights, ratings, and personal
              experiences shared by fellow gamers. Whether you're looking for
              your next favorite game or want to share your thoughts on a recent
              play, our review section offers a diverse range of opinions and
              recommendations. Stay informed and find the best games to match
              your preferences!
            </p>
           
          </div>
        </div>
      </div>
      <section className='mx-auto w-11/12 lg:w-8/12'>
        <div className='flex justify-between mb-4'>
          <div>
            <label htmlFor='genreFilter' className='mr-2'>
              Filter by Genre:
            </label>
            <select
              id='genreFilter'
              className='select-bordered select'
              value={selectedGenre}
              onChange={handleGenreChange}
            >
              <option value=''>All Genres</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='sortType' className='mr-2'>
              Sort by:
            </label>
            <select
              id='sortType'
              className='w-40 md:w-52 select-bordered select'
              value={sortType}
              onChange={handleSortChange}
            >
              <option value=''>Select</option>
              <option value='ratingAsc'>Rating (Ascending)</option>
              <option value='ratingDesc'>Rating (Descending)</option>
              <option value='yearAsc'>Year (Ascending)</option>
              <option value='yearDesc'>Year (Descending)</option>
            </select>
          </div>
        </div>
        {filteredReviews.map(card => (
          <ReviewCard key={card._id} review={card} />
        ))}
      </section>
    </div>
  )
}

export default AllReviwe
