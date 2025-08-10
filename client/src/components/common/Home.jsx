import { Link } from 'react-router-dom'
import './Home.css'
import HomeSlider from './HomeSlider'
import DemoGraph from './DemoGraph'
function Home() {
const {cUser,setCuser}=useContext(con);
 let {isSignedIn,user,isLoaded}=useUser();
 console.log(isSignedIn);
 console.log(user);
 console.log(isLoaded);

useEffect(()=>{
   setCuser({
    ...cUser,
    firstName:user?.firstName,
    profileImageUrl:user?.imageUrl,
  
    email:user?.emailAddresses[0].emailAddress
   })
 },[isLoaded])

 let u={...cUser}
 let res=null;
 async function posting(){
  res=await axios.post('http://localhost:3000/user-api/user',u)
  let {message,payload}=res.data
  console.log(res.data)
  
 }
 posting();
  return (

    <div>
     
       <div className="p-2 " style={{display:'flex',justifyContent:'space-between',borderRadius:'15px'}}>
         <Link to=""  className='custom-link' style={{textDecoration:'none'}}>DSA</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Backend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Frontend</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>Data Bases</Link>
          <Link to="" className='custom-link' style={{textDecoration:'none'}}>DevOps</Link>   
           <Link to="" className='custom-link' style={{textDecoration:'none'}}>Core CS</Link>  
           <Link to="software" className='custom-link' style={{textDecoration:'none'}}>SoftWare engneering</Link>  
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




