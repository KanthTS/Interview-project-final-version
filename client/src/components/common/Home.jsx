
import { Link } from 'react-router-dom'

function Home() {

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