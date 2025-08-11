import { Link } from 'react-router-dom'
import './Home.css'
import HomeSlider from './HomeSlider'
import DemoGraph from './DemoGraph'
import ActualGraph from './ActualGraph'
function Home() {

  return (

    <div>
     
       <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to="/DSA"  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="/Backend" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="/Frontend Developer" className='custom-link' style={{textDecoration:'none'}}>Frontend Engineering</Link>
          <Link to="/DataBases" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="/DevOps" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="/Software Developer" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="/Software Eng" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>  
      </div>
      <div style={{color:'White'}} className='text-center home-title'>
        <h1 style={{fontSize:'55px'}}>The Smart Way to Prepare for </h1>
        <h1 style={{fontSize:'55px'}}>Your Next Interview</h1>
      </div>
      <div className='home-graph container'>
        <h1 style={{color:"white"}} className='d-flex justify-content-center'>Demo Graph</h1>
        <DemoGraph/>
      </div>
      <div className='homeslider-css container'>
        <HomeSlider/>
      </div>
    </div>
  )
}

export default Home




