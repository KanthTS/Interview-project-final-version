import React from 'react';
import './Footer.css'; // custom styles if needed
import { useForm } from 'react-hook-form';
function Footer() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  return (
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
      <form onSubmit={handleSubmit() } className='p-3 form-css'>
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
        {...register("firstName")}></input>
        </div>
        </div>
        <div>
          <label htmlFor="email" className='mt-3'>Email</label>
        <input type='text'
        className='form-control mt-1'
        id='email'
        placeholder='e.g.interviewdata@gmail.com'
        style={{background:'#1a1a1a',outline:'none',color:'#ffffffff'}}
        {...register("firstName")}></input>
        </div>
        <div className='mt-3'>
          <label htmlFor="" >Message</label>
          <div >
          <textarea 
            placeholder="  Your Message..." 
            className='mt-1'
            style={{background:'#1a1a1a',outline:'none',color:'#A1A1AA',borderRadius:'10px',width:'100%',height:'100px'}}
            
          />
          </div>
          <button className="btn mt-3 " style={{background:'white',color:'black',width:'100%'}}>Send Message</button>
        </div>
      </form>
      </div>
    </footer>
  );
}

export default Footer;
