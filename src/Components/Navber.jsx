import { useContext } from 'react'
import { FaUser, FaGamepad, FaHome, FaPlus, FaList, FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvaider'
import ThemeToggle from './ThemeToggle'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, signout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signout()
    navigate('/')
  }

  const navLinks = (
    <>
      <li>
        <Link to="/" className="flex items-center gap-2 hover:text-primary">
          <FaHome className="text-lg" /> Home
        </Link>
      </li>
      <li>
        <Link to="/games" className="flex items-center gap-2 hover:text-primary">
          <FaGamepad className="text-lg" /> Games
        </Link>
      </li>
      <li>
        <Link to="/add-review" className="flex items-center gap-2 hover:text-primary">
          <FaPlus className="text-lg" /> Add Review
        </Link>
      </li>
      <li>
        <Link to="/my-reviews" className="flex items-center gap-2 hover:text-primary">
          <FaList className="text-lg" /> My Reviews
        </Link>
      </li>
      <li>
        <Link to="/watchlist" className="flex items-center gap-2 hover:text-primary">
          <FaHeart className="text-lg" /> Watchlist
        </Link>
      </li>
    </>
  )

  return (
    <div className="top-0 z-50 fixed bg-base-100 shadow-lg px-4 md:px-8 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="z-[1] gap-2 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-primary text-xl md:text-2xl normal-case btn btn-ghost">
          🎮 ChillGamer
        </Link>
      </div>

      <div className="hidden lg:flex navbar-center">
        <ul className="gap-4 px-1 menu menu-horizontal">{navLinks}</ul>
      </div>

      <div className="gap-4 navbar-end">
        <div className="hidden md:block form-control">
          <input
            type="text"
            placeholder="Search games..."
            className="input-bordered w-24 md:w-auto input"
          />
        </div>

        <ThemeToggle />

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="flex justify-center items-center bg-base-content/10 rounded-full w-10">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="profile" className="rounded-full" />
              ) : (
                <FaUser className="text-base-content/70 text-xl" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
          >
            {user ? (
              <>
                <li className="menu-title">
                  <span>Welcome, {user.displayName || 'Gamer'}</span>
                </li>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="hover:bg-error/10 text-error"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar