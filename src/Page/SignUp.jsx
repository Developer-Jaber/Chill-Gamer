import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthProvaider'
import Swal from 'sweetalert2'

const SignUp = () => {
  const {createUser ,setUser} = useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value

    form.reset()

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      setUser(user)

      const newUSer = {name,photoURL,email}
      // save user data to database
      fetch('https://b10-a10-server-side-developer-jaber.vercel.app/users',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newUSer)
      })
      .then(res=> res.json())
      .then(data=> {
        if(data.insertedId){
          console.log('user created to db', data);
        }
      })

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='space-y-6 bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='font-bold text-2xl text-center'>SignUp for free</h2>

        <form onSubmit={handleSignUp} className='space-y-4'>
          <div className='form-control'>
            <label className='label' htmlFor='name'>
              <span className='label-text'>
                Name <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              name='name'
              id='name'
              className='input-bordered w-full input'
              placeholder='Enter your name'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label' htmlFor='photoURL'>
              <span className='label-text'>
                Photo URL <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              name='photoURL'
              id='photoURL'
              className='input-bordered w-full input'
              placeholder='Enter your photoURL'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label' htmlFor='email'>
              <span className='label-text'>
                Email address <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              name='email'
              id='email'
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
              name='password'
              id='password'
              type='password'
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
          </div>

          <button type='submit' className='w-full btn btn-primary'>
            Sign Up
          </button>

          <label className='label'>
            <span className='label-text'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-bold text-blue-500 hover:underline'
              >
                Login
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  )
}

export default SignUp
