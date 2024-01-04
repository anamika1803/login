import React, { useState } from 'react'

function Login() {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

function handleSubmit(event){
event.preventDefault();

}

  return (
    <div className=' d-flex  vh-100 justify-center   align-super  bg-slate-500'>

        <div className=' p-3  bg-slate-500 w-24'>
            <form onSubmit={handleSubmit}>
                <div className=' mb-9 p-9'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='enter your email' className=' form-control' onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className='  mb-9 p-9'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='enter your password' className=' form-control' onChange={e=>setPassword(e.target.value)}></input>
                </div>
                <button className=' btn-btn-success'>Login</button>         
                   </form>
        </div>
    </div>
  )
}

export default Login
