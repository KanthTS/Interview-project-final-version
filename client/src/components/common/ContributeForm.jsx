import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function ContributeForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const nav=useNavigate();
    const [err,setErr]=useState('');
    async function postingDetails(obj){
      obj.contributeId=Date.now();
      obj.isContributeActive=true;
      let res=null;
      console.log(obj)
     res=await  axios.post('http://localhost:3000/user-api/user-contribute',obj)
      let {message,payload}=res.data;
      console.log(res.data)
      if(res.data.message=="contribute"){
       nav('/thanks')
      }else{
         setErr('no data present')
      }
    }
  return (
    <div >
    <div className='container ' >
        <div className='text-center mt-5'>
            <h2 className='mb-3'>Contribution Form</h2>
            <p className='mb-5'>Help others by sharing your interview experience</p>
        </div>
        <div className='d-flex justify-content-center align-items-center  ' >
           <div className="shadow-lg rounded w-50  ">
            <form onSubmit={handleSubmit(postingDetails)} className='mt-3'>
                <div className='w-50 mx-auto mb-3 w-75 mt-3'>
                    <label htmlFor='question'>Question</label>
                    <input 
                    type='text'
                    className='form-control'
                    id='question'
                    placeholder='e.g. what is usestate in react?'
                    {...register("question")}></input>
                </div>
                <div className='w-50 mx-auto mb-3 w-75 mt-3'>
                    <label htmlFor='topic'>Topic</label>
                    <input type="text"
                    className='form-control'
                    id='topic'
                    placeholder='e.g. React?'
                    {...register("topic")} />
                </div>
                <div className="w-50 mx-auto mb-3 w-75 mt-3">
                    <label htmlFor="company">company</label>
                    <input type="text"
                    className='form-control'
                    id='company'
                    placeholder='e.g. Meta?'
                    {...register("company")} />
                </div>
                <div className="w-50 mx-auto mb-3 w-75 mt-3">
                    <label htmlFor='role'>role</label>
                    <input type="text"
                    id='role'
                    className='form-control'
                    placeholder='e.g. front end developer?'
                    {...register("role")} />
                </div>
                <div className="d-grid">
                <button type='submit' className="btn btn-primary  mx-auto mb-3 w-75 text-center align-items-center mt-3">Post</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContributeForm