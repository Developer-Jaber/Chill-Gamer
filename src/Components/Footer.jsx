const Footer = () => {
  return (
    <footer className='bg-gray-900 mt-10 py-8 text-white'>
      <div className='gap-8 grid grid-cols-1 md:grid-cols-4 mx-auto container'>
        <div>
          <h2 className='mb-4 font-bold text-xl'>Chill Gamer</h2>
          <p className='mb-2'>Discover and review your favorite games.</p>
          <ul>
            <li className='mb-1'>
              <a href='/popular-genres' className='hover:underline'>
                Popular Genres
              </a>
            </li>
            <li className='mb-1'>
              <a href='/best-rated' className='hover:underline'>
                Best Rated Games
              </a>
            </li>
            <li className='mb-1'>
              <a href='/upcoming-releases' className='hover:underline'>
                Upcoming Releases
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='mb-4 font-bold text-xl'>Unique Cricketer</h2>
          <p className='mb-2'>All about cricket players and stats.</p>
          <ul>
            <li className='mb-1'>
              <a href='/players' className='hover:underline'>
                Players
              </a>
            </li>
            <li className='mb-1'>
              <a href='/stats' className='hover:underline'>
                Stats
              </a>
            </li>
            <li className='mb-1'>
              <a href='/teams' className='hover:underline'>
                Teams
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='mb-4 font-bold text-xl'>Discount PRO</h2>
          <p className='mb-2'>Collect and manage your coupons.</p>
          <ul>
            <li className='mb-1'>
              <a href='/coupons' className='hover:underline'>
                Coupons
              </a>
            </li>
            <li className='mb-1'>
              <a href='/deals' className='hover:underline'>
                Deals
              </a>
            </li>
            <li className='mb-1'>
              <a href='/saved' className='hover:underline'>
                Saved Coupons
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='mb-4 font-bold text-xl'>Luxury Real Estate</h2>
          <p className='mb-2'>Find your dream luxury property.</p>
          <ul>
            <li className='mb-1'>
              <a href='/penthouses' className='hover:underline'>
                Penthouses
              </a>
            </li>
            <li className='mb-1'>
              <a href='/beachfront' className='hover:underline'>
                Beachfront Properties
              </a>
            </li>
            <li className='mb-1'>
              <a href='/private-islands' className='hover:underline'>
                Private Islands
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-gray-700 mt-8 pt-4 border-t text-center'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
