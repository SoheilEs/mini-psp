import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import API from '../api/axios'

export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const hasFormSubmit= async(e)=>{
        e.preventDefault()
        await API.post("auth/register",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        alert("registerd successfuly")
    }
  return (
    <form onSubmit={hasFormSubmit}>
        <input placeholder='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Register</button>
    </form>
  )
}
