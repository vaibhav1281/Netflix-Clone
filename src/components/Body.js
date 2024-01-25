import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SighUpIn from './SignUpIn'
import Browse from './Browse';

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element:<SighUpIn/>
    },
    {
      path:'/browse',
      element: <Browse/>
    }
  ]);



  return (
    <div className='bg-black'>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body