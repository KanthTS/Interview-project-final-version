<<<<<<< HEAD

=======
import React from 'react'
import "./Home.css"
>>>>>>> adb3c0ab3cd8aef6910b98466b27366b9ccf7405
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div>
     
<<<<<<< HEAD
      <div className="p-2">
         <Link to="dsa">DSA</Link>
          <Link to="backend">Backend</Link>
          <Link to="frontend">Frontend</Link>
          <Link to="database">Data Bases</Link>
          <Link to="devops">DevOps</Link>   
           <Link to="corecs">Core CS</Link>  
           <Link to="software">SoftWare engneering</Link>   
=======
      <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to=""  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Frontend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>   
>>>>>>> adb3c0ab3cd8aef6910b98466b27366b9ccf7405

   
      </div>

    
    </div>
  )
}

export default Home