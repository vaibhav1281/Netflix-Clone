import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LandingPage } from './LandingPage'
import SighUpIn from './SighUpIn'

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path:'/',
            element:<LandingPage/>
        },
        {
            path:'/login',
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