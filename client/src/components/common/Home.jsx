import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import HomeSlider from './HomeSlider'
import DemoGraph from './DemoGraph'
import './Thanks.css';
import { useContext ,useEffect} from 'react'
import {con} from '../../contexts/UserContext'
import axios from 'axios'
import {useUser} from '@clerk/clerk-react'
function Home() {
const {cUser,setCuser}=useContext(con);
const nav=useNavigate();
 let {isSignedIn,user,isLoaded}=useUser();
 console.log(isSignedIn);
 console.log(user);
 console.log(isLoaded);
   function moving(){
    nav('/thanks')
   }
useEffect(()=>{
   setCuser({
    ...cUser,
    firstName:user?.firstName,
    profileImageUrl:user?.imageUrl,
  
    email:user?.emailAddresses[0].emailAddress
   })
 },[isLoaded])

 let u={...cUser}

 async function posting(){
  let res=await axios.post('http://localhost:3000/user-api/user',u)
  let {message,payload}=res.data
  console.log(res.data)
  
 }
 posting();

 
  return (

   isSignedIn===false?<>
    <div>
     
       <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to="/dsa"  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="/backend" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="/frontend" className='custom-link' style={{textDecoration:'none'}}>Frontend Engineering</Link>
          <Link to="/database" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="/devops" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="/corecs" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="/software" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>  
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
   </>:<>
    <div>
     
       <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to="/dsa"  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="/backend" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="/frontend" className='custom-link' style={{textDecoration:'none'}}>Frontend Engineering</Link>
          <Link to="/database" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="/devops" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="/corecs" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="/software" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>  
      </div>
     
      <div style={{color:'White'}} className='text-center home-title'>
        <h1 style={{fontSize:'55px'}}>The Smart Way to Prepare for </h1>
        <h1 style={{fontSize:'55px'}}>Your Next Interview</h1>
      </div>
  

   
   <div className="exclusive-button-container">
  <button type="button" className="exclusive-button" onClick={moving}>
    For Exclusively Interviewed Questions Only
  </button>
</div>
   
      <div className='home-graph container'>
        <h1 style={{color:"white"}} className='d-flex justify-content-center'>Demo Graph</h1>
        <DemoGraph/>
      </div>
    
      <div className='homeslider-css container'>
        <HomeSlider/>
      </div>

    </div>
   
   </>
  )
}

export default Home




