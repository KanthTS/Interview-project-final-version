import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
     <div>
       <marquee direction="right" >Interview Questions are ready to prepare and catch your highest package offer</marquee>
     </div>
      <div className="p-2">
         <Link to="">JAVA</Link>
          <Link to="">PYTHON</Link>
          <Link to="">C++</Link>
          <Link to="">C</Link>
          <Link to="">JAVASCRIPT</Link>   
           <Link to="">NODEJS</Link>  
           <Link to="">SQL</Link>   
      </div>
    </div>
  )
}

export default Home