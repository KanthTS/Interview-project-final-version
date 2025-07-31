import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
      
     <div>
       <marquee direction="right" >Interview Questions are ready to prepare and catch your highest package offer</marquee>
     </div>
      <div className="lang " style={{display:"flex",justifyContent:"space-between", border:"solid ",padding:"10px",backgroundColor:"ButtonFace",}}>
         <Link to="java" style={{border:"solid 2px ",padding:"10px",}}>JAVA</Link>
          <Link to="python" style={{border:"solid 2px ",padding:"10px",}}>PYTHON</Link>
          <Link to="c++"style={{border:"solid 2px ",padding:"10px",}}>C++</Link>
          <Link to="c"style={{border:"solid 2px ",padding:"10px",}}>C</Link>
          <Link to="javascript"style={{border:"solid 2px ",padding:"10px",}}>JAVASCRIPT</Link>   
           <Link to="nodejs"style={{border:"solid 2px ",padding:"10px",}}>NODEJS</Link>  
           <Link to="sql"style={{border:"solid 2px ",padding:"10px",}}>SQL</Link>   
      </div>
<div>
  
</div>
    </div>
  )
}

export default Home