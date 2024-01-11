import React from 'react'
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    console.log(user)

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }


  return (
    <div className='w-full h-24 z-20 bg-gradient-to-b from-black'>
        
        <div className='w-9/12 lg:w-9/12 max-sm:w-11/12 md:w-10/12 flex justify-between items-center mx-auto'>
            {/* logo */}
           <div>
            <img src={Netflix_Logo_PMS} alt='logo' className='w-40'/>
           </div>
            {/* lang & Sign In/Up */}
           <div className='flex items-center gap-4 text-white'>
                <div className=''>{user?.displayName}</div>
                <button className='bg-netflix-red py-1 px-2 rounded-md'
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
           </div>
        </div>
    </div>
  )
}

export default Header