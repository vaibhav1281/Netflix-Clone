import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SighUpIn from './SignUpIn'
import Browse from './Browse';
import MovieDetails from './movieDetails/MovieDetails';

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element:<SighUpIn/>
    },
    {
      path:'/browse',
      element: <Browse/>
    },
    {
      path:"/browse/movie/:movieId",
      element:<MovieDetails/>
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body