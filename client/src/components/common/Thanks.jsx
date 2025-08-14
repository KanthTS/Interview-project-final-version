import React, { useEffect,useContext,useState } from 'react'
import {con} from '../../contexts/UserContext'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
function Thanks() {
  const [data,setData]=useState([]);
const [err,setErr]=useState('')
const {getToken}=useAuth();
    const {cUser}=useContext(con)
    console.log(cUser)
    const nav=useNavigate();
    function back(){
nav('/')
    }
    async function accessingdata(){
  //get jwt token it is asynchronous
  const token=await getToken();
  // make authenticated request
   
   let res=await axios.get('http://localhost:3000/user-api/user-contributes',{
    headers:{
      Authorization:`Bearer ${token}`
    }
   })
    console.log(res.data.payload)
   if(res.data.message=="getDetails"){
      setData(res.data.payload)
   }else{
    setErr(res.data.message)
   }
 }
  useEffect(()=>{
    accessingdata()
  },[])
 
  return (
    <div>
      <div>
 {
  data.map((item, index) => (
    <div
      key={item._id || index}
      className="card m-3 text-white"
      style={{ backgroundColor: "black" }}
    >
      {/* Card Header */}
      <div className="card-header" style={{ border: "solid white 1px" }}>
        <div className="d-flex justify-content-between align-items-center">
          {/* Left: Title */}
          <h2 className="mb-0">{item.topic?.substring(0, 20) || "No Title"}</h2>

          {/* Right: Profile Image + Email */}
          <div className="text-end">
            {item.profileImageUrl && (
              <img
                src={item.profileImageUrl}
                width="40px"
                alt="Profile"
                style={{ borderRadius: "50%" }}
              />
            )}
            {item.email && (
              <p className="mb-0">{item.email.substring(0, 15) + "..."}</p>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body text-center">
        {/* Question */}
        {item.question && (
          <p className="lead mb-2">
            {item.question.substring(0, 50) + "..."}
          </p>
        )}

        {/* Role */}
        {item.role && (
          <p className="text-info mb-0">
            Role: {item.role.substring(0, 30)}
          </p>
        )}
      </div>
    </div>
  ))
}

      </div>
        <h3 className="text-center m-5">Thanks for Submitting Your Interview Details {cUser.firstName}</h3>
      <button className="text-secondary" onClick={back}>Back to Home</button>
    </div>
  )
}

export default Thanks