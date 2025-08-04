
import React, { useState } from 'react'
import { createContext } from 'react'
 export const con=createContext();
function UserContext({children}) {
 
  let [cUser,setCuser]=useState({
    firstName:"",
    email:"",
    password:"",
    profileImageUrl:"",
  });
  return (
    <div>
      <con.Provider value={{cUser,setCuser}}>{children}</con.Provider>
    </div>
  )
}

export default UserContext