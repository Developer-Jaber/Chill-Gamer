import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Home/Home'
import Login from '../Page/Login'
import AuthProvaider from '../Auth/AuthProvaider'
import SignUp from '../Page/SignUp'
import AddReviwe from '../Page/AddReviwe'
import Error from '../error/Error'
import PrivetRoute from '../Private/PrivetRoute'
import AllReviwe from '../Page/AllReviwe'
import ReviewDetails from '../Page/ReviewDetails'
import MyReviews from '../Page/MyReviews'
import UpdateReview from '../Page/UpdateReview'
import Watchlist from '../Page/Watchlist'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://b10-a10-server-side-developer-jaber.vercel.app/games'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/addReview',
        element: <PrivetRoute><AddReviwe></AddReviwe></PrivetRoute>
      },
      {
        path: '/reviews',
        element: <AllReviwe></AllReviwe>
      },
      {
        path: '/reviews/:id',
        element: <PrivetRoute><ReviewDetails></ReviewDetails></PrivetRoute>,
        loader: ({params})=>fetch(`https://b10-a10-server-side-developer-jaber.vercel.app/added-review/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>,
      },
      {
        path: '/reviews/update_review/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({params})=>fetch(`https://b10-a10-server-side-developer-jaber.vercel.app/added-review/${params.id}`)
      },
      {
        path: '/myWatchlist',
        element: <PrivetRoute><Watchlist></Watchlist></PrivetRoute>
      }
    ]
  }
])

const Router = () => {
  return (
    <div>
      <AuthProvaider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvaider>
    </div>
  )
}

export default Router
