import React, { useContext } from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvaider';

const Login = () => {
  const {loginUser , googlePopupLogin} = useContext(AuthContext);

  // adding handeller login with email/pss
  const hanndleLoginuser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    form.reset()
    loginUser(email,password)
    .then(result=>{
      console.log(result.user,'user login succesfull');
    })
    .catch(error=>{
      console.log(error);
    })
  }

  // adding handeller for popup google login
  const googlePopupHandeller = () =>{
    googlePopupLogin()
  } 
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='space-y-6 bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='font-bold text-2xl text-center'>
          Sign in to your Account
        </h2>

        <div className='space-y-4'>
          <button onClick={googlePopupHandeller} className="flex justify-center items-center w-full btn btn-google btn-outline">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button className="flex justify-center items-center w-full btn btn-github btn-outline">
            <FaGithub className="mr-2" /> Sign in with Github
          </button>
        </div>

        <div className='divider'>Or sign in with your email</div>

        <form onSubmit={hanndleLoginuser} className='space-y-4'>
          <div className='form-control'>
            <label className='label' htmlFor='email'>
              <span className='label-text'>
                Email address <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='input-bordered w-full input'
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label' htmlFor='password'>
              <span className='label-text'>
                Password <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='input-bordered w-full input'
              placeholder='Enter your password'
              required
            />
          </div>

          <div className='flex justify-between items-center'>
            <label className='gap-3 cursor-pointer label'>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <span className='label-text'>Remember me</span>
            </label>
            <a href='#' className='text-blue-500 text-sm hover:underline'>
              Forgot Password?
            </a>
          </div>

          <button type='submit' className='w-full btn btn-primary'>
            Sign In
          </button>

          <label className='label'>
              <span className='label-text'>
                SignUp for free  <Link to='/signup' className='font-bold text-blue-500 hover:underline'>SignUp</Link>
              </span>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Login
