import React, { useContext } from 'react'
import {con} from '../../contexts/UserContext'
import {useNavigate} from 'react-router-dom'
function Thanks() {
    const {cUser}=useContext(con)
    console.log(cUser)
    const nav=useNavigate();
    function back(){
nav('/')
    }
  return (
    <div>
        <h3 className="text-center m-5">Thanks for Submitting Your Interview Details {cUser.firstName}</h3>
      <button className="text-secondary" onClick={back}>Back to Home</button>
    </div>
  )
}

export default Thanks