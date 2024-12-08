import { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvaider'
import ThemeToggle from './ThemeToggle'

const Navber = () => {
  const { user, signout } = useContext(AuthContext)
  const navigate = useNavigate()
  // handlesignoutUser
  const handleSignOut = () => {
    signout();
    navigate('/')
  }

  const link = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/reviews'>All Reviews</Link>
      </li>
      <li>
        <Link to='/addReview'>Add Review </Link>
      </li>
      <li>
        <Link to='/myReviews'>My Reviews</Link>
      </li>
      <li>
        <Link>Game WatchList</Link>
      </li>
    </>
  )
  return (
    <div className='bg-base-100 mx-auto my-7 w-[80%] navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
          >
            {link}
          </ul>
        </div>
        <a className='font-bold text-3xl'>Chill Gamer</a>
      </div>
      <div className='lg:flex hidden navbar-center'>
        <ul className='px-1 menu menu-horizontal'>{link}</ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-circle btn-ghost'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-lg indicator-item'>0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='z-50 bg-base-100 shadow mt-3 w-52 card card-compact dropdown-content'
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn-block btn btn-primary'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='mx-10 avatar btn btn-circle btn-ghost'
          >
            <div className='rounded-full w-10'>
              {
                user && user?.email ? (<img  src={user && user?.photoURL} alt=''/>) : (<FaUser className='text-4xl'></FaUser>)
              }
            </div>
          </div>
          <ul
            tabIndex={0}
            className='z-50 bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
          >
            {user && user?.email ? (
              <>
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleSignOut} type='button'>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  )
}

export default Navber
