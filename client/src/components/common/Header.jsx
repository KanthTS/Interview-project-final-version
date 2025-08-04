import React from 'react'
import {useNavigate} from 'react-router-dom'
import image from '../images/interview-job-logo-design-vector-260nw-2015326151.webp'
import { Link } from 'react-router-dom'
function Header() {
  const navigate=useNavigate();
  return (
    <div style={{backgroundColor:"rgb(21,32,43)",padding:"10px",display:"flex",justifyContent:"space-between"}}>
      <div >
        <img src={image} style={{width:"80px",borderRadius:"50%"}}/>
      </div>
    <div style={{display:"flex",justifyContent:"space-between",gap:"60px",margin:"20px"}}>
      <button className='btn ' style={{background:'white',color:'black'}} onClick={()=>navigate('/contributionForm')}>ContributeForm</button>
     <button className='btn ' style={{background:'white',color:'black'}} onClick={()=>navigate('/signin')}>SignIn</button>
     <button className='btn' style={{background:'black',color:'white'}} onClick={()=>navigate('/signup')}>SignUp</button>
     
    </div>
    </div>
  )
}

export default Header