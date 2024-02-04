import React, { useEffect, useState } from 'react'
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { auth } from '../utils/firebase';
import { toggleGptSearchView } from '../redux/gptSlice';
import { SUPPORTED_LANGUAGR } from '../utils/constant';
import { changeLanguage } from '../redux/configSlice';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch()
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const[menuOpen, setMenuOpen] = useState(false)

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

          navigate("/browse")
  
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
  
    },[]);

  const handleSignOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
          // Sign-out successful.

      }).catch((error) => {
          // An error happened.
          navigate("/error")
      });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const toggleMunu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleLanguageChange = (event) =>{
    dispatch(changeLanguage(event.target.value))
  }


  return (
    <div className='flex w-full h-24 z-20 bg-gradient-to-b from-black absolute'>
        
      <div className='w-9/12 lg:w-9/12 max-sm:w-11/12 md:w-10/12 flex justify-between items-center mx-auto'>
          {/* logo */}
          <div>
            <img src={Netflix_Logo_PMS} alt='logo' className='w-40'/>
          </div>
          {/* lang & Sign In/Up */}
          <div className='flex items-center gap-4 text-white max-sm:hidden max-md:hidden'>

            {/* language */}
            {showGptSearch && <div className='flex items-center'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
              </div>
              <select className='bg-black outline-none' onChange={handleLanguageChange}>
              {
                SUPPORTED_LANGUAGR.map(lang => <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)
              }
              </select>
            </div>}

            <div className='flex text-left'>{user?.displayName}</div>
            <button className='bg-netflix-red py-1 px-2 rounded-md'
                onClick={handleSignOut}
            >
                <span className='hidden md:flex'>Sign Out</span>
                <span className='flex lg:hidden md:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                </span>
            </button>

            <button
              className='bg-netflix-red p-1 rounded-full flex items-center'
              onClick={handleGptSearch} >
              {
                showGptSearch ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                )
              }
            </button>
          </div>


          {/* mobile view */}
          <div className='flex lg:hidden md:hidden space-x-4'>

            <button
              className='bg-netflix-red p-2  rounded-full flex items-center text-white'
              onClick={handleGptSearch} >
              {
                showGptSearch ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                )
              }
            </button>

            <button
             className='text-netflix-red'
             onClick={toggleMunu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
            <div>
              {
                menuOpen && (
                  <div className='w-[60%] fixed top-0 right-0 h-screen border border-black bg-black transform transition-transform duration-300 ease-out z-40 py-6 space-y-4'>
                    <span className='text-netflix-red' >
                      <svg
                       onClick={toggleMunu}
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-9 h-9 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </span>

                    <ul className=''>
                      <li>
                        <div className='flex items-center text-netflix-red mb-2 space-x-4 p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <span className='text-white mb-2'>{user?.displayName}</span>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                      </li>

                      {/* language */}

                      {showGptSearch && <li>
                        <div className='flex items-center text-white ml-2 mb-2 space-x-4 p-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 mt-1 text-netflix-red">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                            </svg>
                          </div>
                          <select className='bg-black outline-none text-lg' onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGR.map(lang => <option
                                key={lang.identifire}
                                value={lang.identifire}>{lang.name}
                                </option>
                              )
                            }
                          </select>
                        </div>
                      </li>}

                        {/* log out */}
                      <button 
                       className='bottom-0 fixed w-full'>
                        <div onClick={handleSignOut}
                         className='flex items-center text-netflix-red mb-2 space-x-4 p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                          </svg>
                          <span className='text-white mb-2 font-semibold'>Sign Out</span>
                        </div>
                      </button>

                    </ul>

                  </div>
                )
              }
            </div>

          </div>

      </div>

      

    </div>
  )
}

export default Header