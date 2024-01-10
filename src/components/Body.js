import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SighUpIn from './SignUpIn'

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element:<SighUpIn/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body