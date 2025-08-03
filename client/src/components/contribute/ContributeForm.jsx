import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
function ContributeForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
  return (
    <div className='container  ' style={{ backgroundColor: '#343434', color: '#EDEDED' }}>
        <div className='text-center'>
            <h2 className='mb-5'>Contribution Form</h2>
        </div>
        <div className='d-flex justify-content-center align-items-center  ' style={{ backgroundColor: '#EDEDED', color: '#EDEDED' }}>
           <div className="shadow rounded w-50  ">
            <form onSubmit={handleSubmit()} className='mt-3'>
                <div className='w-50 mx-auto mb-3 '>
                    <label htmlFor='question'>Question</label>
                    <input 
                    type='text'
                    className='form-control'
                    id='question'
                    placeholder='optional'
                    {...register("question")}></input>
                </div>
                <div className='w-50 mx-auto mb-3'>
                    <label htmlFor='topic'>Topic</label>
                    <input type="text"
                    className='form-control'
                    id='topic'
                    {...register("topic")} />
                </div>
                <div className="w-50 mx-auto mb-3">
                    <label htmlFor="company">company</label>
                    <input type="text"
                    className='form-control'
                    id='company'
                    
                    {...register("company")} />
                </div>
                <div className="w-50 mx-auto mb-3">
                    <label htmlFor='role'>role</label>
                    <input type="text"
                    id='role'
                    className='form-control'
                    {...register("role")} />
                </div>
                
                <button type='submit' className="btn btn-primary d-flex mx-auto mb-3">Post</button>
                
            </form>
            </div>
        </div>
    </div>
  )
}

export default ContributeForm