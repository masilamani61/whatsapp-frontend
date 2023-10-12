import React from 'react'
import Inputlabel from '../shared/input'

function RegisterForm(props) {
    const {username,email,setemail,setpassword,setusername,password}=props
     return (
    <>
    <Inputlabel label='Username' type='text' placeholder="enter your name" value={username} setvalue={setusername} />
    <Inputlabel label='Email' type='email' placeholder="enter your email" value={email} setvalue={setemail} />
    <Inputlabel label='Password' type='password' placeholder="enter your password" value={password} setvalue={setpassword} />
 
    </>
  )
}

export default RegisterForm