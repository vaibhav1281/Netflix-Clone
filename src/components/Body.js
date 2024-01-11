import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SighUpIn from './SignUpIn'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice'
import Browse from './Browse';

const Body = () => {

  const dispatch = useDispatch();

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

  useEffect(() =>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;

        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          // photoUrl: photoURL
        }));

      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

  },[]);

  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body