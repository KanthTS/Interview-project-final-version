import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (

    <div>
     
      <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to=""  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Frontend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>   

   
      </div>

    </div>
  )
}

export default Home