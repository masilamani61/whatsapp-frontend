import React from 'react'
import Inputlabel from '../shared/input'

function LoginForm({mail,setemail,password,setpassword}) {
  return (
    <>
    <Inputlabel type='email' placeholder={'enter your email'} label='Email' value={mail} setvalue={setemail}/>
    <Inputlabel type='password' placeholder={'enter your password'} label='Password' value={password} setvalue={setpassword}/>
    </>
  )
}
export default LoginForm