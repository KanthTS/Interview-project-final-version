import React from 'react';
import './Footer.css'; // custom styles if needed
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios'
function Footer() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [submitted,setSubmitted]=useState(false);
  async function contacting(obj){
    console.log(obj);
    let res=await axios.post('http://localhost:3000/user-api/contact',obj)
    if(res.data.message=="contact"){
      setSubmitted(true);
    }
    res=await axios.post('http://localhost:3000/email-api/email',{
      to:obj.email,
     subject: "Always Be Ready",
        message: "Thank you for your interest. We’ll get back to you soon."

    })
  }
    
   
  

  console.log(submitted)
  return (
    <div>
     {
       submitted ?   <>
      (
              <div className="thank-you-message text-white" style={{ textAlign: 'center', padding: '50px' }}>
          <h3>Thank you for contacting us!</h3>
          <p>We’ll get back to you shortly.</p>
        </div>
      )
      </>:
      <>
      (
        <footer className=" text-white  py-4 mx-3 shadow-sm d-flex" style={{color:'#1a1a1a'}}>
      <div className="left-css ">
      <h3 className="mt-3">Contact </h3>
      <h2 className="mt-3">Want us to help you in your interview</h2>
      <h4 className="mt-3">Contact us</h4>
      <h5 className="mt-3">Email:</h5>
       <p style={{color:'#A1A1AA'}} className="mt-3">interviewdata@gmail.com</p>
      <h5 className="mt-3">Phone </h5>
      <p style={{color:'#A1A1AA'}} className="mt-3">+91 92356 789987</p>
      <h5 className="mt-3">Hours</h5>
      <p className='mt-3' style={{color:'#A1A1AA'}} >10 am to 5 pm</p>
      </div>



      {/* contact From */}
      <div className="container  contact-form">
      <form onSubmit={handleSubmit(contacting) } className='p-3 form-css'>
        <div className='d-flex '>
          <div className='mx-1 w-50'>
        <label htmlFor="firstName" className='mt-3'>First Name</label>
        <input type='text'
        className='form-control mt-1'
        id='firstName'
        placeholder='e.g.Jack'
        style={{background:'#1a1a1a',outline:'none',color:'#A1A1AA'}}
        {...register("firstName")}></input>
        </div>


        <div className='last-name w-50'>
        <label htmlFor="lastName" className='mt-3'>Last Name</label>
        <input type='text'
        className='form-control mt-1'
        id='lastName'
        placeholder='e.g.Woods'
        style={{background:'#1a1a1a',outline:'none',color:'#ffffff'}}
        {...register("lastName")}></input>
        </div>
        </div>
        <div>
          <label htmlFor="email" className='mt-3'>Email</label>
        <input type='text'
        className='form-control mt-1'
        id='email'
        placeholder='e.g.interviewdata@gmail.com'
        style={{background:'#1a1a1a',outline:'none',color:'#ffffffff'}}
        {...register("email")}></input>
        </div>
        <div className='mt-3'>
          <label htmlFor="" >Message</label>
          <div >
          <textarea 
            placeholder="  Your Message..." 
            className='mt-1'
            style={{background:'#1a1a1a',outline:'none',color:'#A1A1AA',borderRadius:'10px',width:'100%',height:'100px'}}
           {...register('message')} 
          />
          </div>
          <button className="btn mt-3 " style={{background:'white',color:'black',width:'100%'}}>Send Message</button>
        </div>
      </form>
      </div>
    </footer>
      )
      </>
    
     }
    </div>
  );
}

export default Footer;
