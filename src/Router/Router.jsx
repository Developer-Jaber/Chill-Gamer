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



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/games'),
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
        loader: ({params})=>fetch(`http://localhost:5000/added-review/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>,
      },
      {
        path: '/reviews/update_review/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({params})=>fetch(`http://localhost:5000/added-review/${params.id}`)
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
