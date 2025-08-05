import React from 'react'
import  { useContext, useEffect } from 'react'

import {  useClerk, useUser } from '@clerk/clerk-react'
import {con} from '../../contexts/UserContext'
import image from '../images/interview-job-logo-design-vector-260nw-2015326151.webp'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const {signOut}=useClerk();
 const nav=useNavigate();
  const {cUser,setCuser}=useContext(con);
 let {isSignedIn,user,isLoaded}=useUser();
 console.log(isSignedIn);
 console.log(user);
 console.log(isLoaded);

 useEffect(()=>{
   setCuser({
    ...cUser,
    firstName:user?.firstName,
    profileImageUrl:user?.imageUrl,
    email:user?.emailAddresses[0].emailAddress
   })
 },[isLoaded])
   async function signedOut(){
   setCuser(null)
   nav('/')
   await signOut()
   }
  
  return (
    <div>
    <div style={{ backgroundColor: 'ButtonFace', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <img src={image} style={{ width: '80px', borderRadius: '50%' }} alt="logo" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '60px', margin: '20px' }}>
        <Link to="/contributionForm">ContributeForm</Link>
        {!isSignedIn ? (
          <>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </>
        ) : (
          <button type="button" onClick={signedOut}>SignOut</button>
        )}
      </div>
    </div>
      
  
    </div>
  )
}

export default Header