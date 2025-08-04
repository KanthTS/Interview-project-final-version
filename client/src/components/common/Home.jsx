import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'
import {con} from '../../contexts/UserContext'
function Home() {
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
 console.log(setCuser)
  return (

    <div>
     
      <div className="p-2">
         <Link to="dsa">DSA</Link>
          <Link to="backend">Backend</Link>
          <Link to="frontend">Frontend</Link>
          <Link to="database">Data Bases</Link>
          <Link to="devops">DevOps</Link>   
           <Link to="corecs">Core CS</Link>  
           <Link to="software">SoftWare engneering</Link>   

   
      </div>

    
    </div>
  )
}

export default Home