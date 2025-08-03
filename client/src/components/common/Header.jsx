import React from 'react'

import image from '../images/interview-job-logo-design-vector-260nw-2015326151.webp'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div style={{backgroundColor:"ButtonFace",padding:"10px",display:"flex",justifyContent:"space-between"}}>
      <div >
        <img src={image} style={{width:"80px",borderRadius:"50%"}}/>
      </div>
    <div style={{display:"flex",justifyContent:"space-between",gap:"60px",margin:"20px"}}>
     <Link to="/signin" style={{color:"black",padding:"10px",}}>SignIn</Link>
     <Link to="/signup" style={{color:"black",padding:"10px"}}>SignUp</Link>
    </div>
    </div>
  )
}

export default Header