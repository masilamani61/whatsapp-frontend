import React, { useEffect, useState } from 'react'
import Authbox from '../shared/authbox'
import RegisterForm from './registerform'
import RegisterFooter from './registerfoote'
import validator from '../shared/validator'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, openalert } from '../store/store'
import { useNavigate } from 'react-router-dom'
function Registerpage({register}) {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')
    const [isformvalid,setformvalid]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
            setformvalid(validator(email,password,username))
    },[email,password,username,isformvalid])
    const hanleclick=()=>{
        
        const userdetails={username,email,password}
       
            axios.post('https://whatsapp-backend-6neq.onrender.com/api/auth/Register',userdetails).then((res)=>{
                console.log(res)
            const {data}=res
            if (data.err){
                throw new Error('user is invalid')
            }
            else{
                dispatch(login(data))
                navigate('/dashboard')
                
            }
        }).catch(err=>{
            dispatch(openalert('email is exists'))
            console.log(err)
        })
        
    }
  return (
    <Authbox>
        <h3 style={{color:'white'}}>Welcome 😊</h3>
        <RegisterForm username={username} password={password} setemail={setemail} setpassword={setpassword} email={email}
        setusername={setusername}
        />
        <RegisterFooter hanleclick={hanleclick} isformvalid={isformvalid}/>
    </Authbox>

  )
}
export default Registerpage