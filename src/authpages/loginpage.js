import React, { useEffect, useState } from 'react'
import Authbox from '../shared/authbox'
import LoginForm from './loginform'
import Loginfooter from './loginpagefooter'
import {connect, useDispatch} from 'react-redux'
import validator from '../shared/validator'
import axios from 'axios'
import { login, openalert } from '../store/store'
import { useNavigate } from 'react-router-dom'
function Loginpage() {
    const [password,setpassword]=useState('')
    const [mail,setemail]=useState('')
    const [isformvalid,setformvalid]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        setformvalid(validator(mail,password))
    },
    [mail,password,isformvalid])
    const handlelogin=()=>{
        const userdetails={
            email:mail,password
        }
        axios.post('https://whatsapp-backend-6neq.onrender.com/api/auth/login',userdetails).then((r)=>{
            console.log(r)
            const {data}=r
            const {userdetails}=data
            console.log(userdetails)
            if (data.err){
                throw new Error(data.err)
            }
            dispatch(login(userdetails))
            navigate('/dashboard')
        }).catch(err=>{
            dispatch(openalert('invalid email or password'))
            console.log(err)
        })
    }
  return (  
      <Authbox>
        <h2 style={{color:'white'}}>Welcome Back😊</h2>
        <LoginForm mail={mail} password={password} setemail={setemail} setpassword={setpassword}/>
        <Loginfooter isformvalid={isformvalid} handlelogin={handlelogin}/>
      </Authbox>
  )
}
export default Loginpage