import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
function ContributeForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
  return (
    <div className='container  ' >
        <div className='text-center mt-5'>
            <h2 className='mb-3'>Contribution Form</h2>
            <p className='mb-5'>Help others by sharing your interview experience</p>
        </div>
        <div className='d-flex justify-content-center align-items-center  ' >
           <div className="shadow-lg rounded w-50  ">
            <form onSubmit={handleSubmit()} className='mt-3'>
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
  )
}

export default ContributeForm