import { Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Inputlabel from '../../../shared/input'
import CustomButton from '../../../shared/button'
import { ismailvalid } from '../../../shared/validator'
import axios from 'axios'
import { alertslice } from '../../../store/slices/alertslice'
import { useDispatch, useSelector } from 'react-redux'
import { openalert } from '../../../store/store'

function AddDialog({open,handleclose}) {
    const [mail,setmail]=useState('')
    const [isformvalid,setvalid]=useState(false)
    const dispatch=useDispatch()
    const userdetails=localStorage.getItem('user')
    
    const token=JSON.parse(userdetails)?.token
    useEffect(()=>{
        setvalid(ismailvalid(mail))
    },[mail,isformvalid])
    const handleclick=()=>{
    
        axios.post('https://whatsapp-backend-6neq.onrender.com/api/friendinvitation/invitation',{mail},{headers:{'Authorization':token}})
        .then((r)=>{
            if (r.data.err){
                throw new Error(r.data.err)
            }
            console.log(r)
            handleclose()
            dispatch(openalert('inviation succesfully sented'))
        })
        .catch(err=>{
            dispatch(openalert(err.message))
            console.log(err.message)})
       
    }
        
    
  
  return (
    <Dialog open={open} onClose={()=>handleclose()}>
        <DialogActions>
            <DialogContent >
                <Typography sx={{fontSize:'25px'}} >Invite Friends</Typography>
                <DialogContentText>
                    <span>ENTER YOUR FRIENDS EMAILS</span>
                    <Inputlabel value={mail} setvalue={setmail} placeholder='enter your friends email' label='email'/>
                    <CustomButton onclick={handleclick} disable={!isformvalid} label='send request'/>
                </DialogContentText>
            </DialogContent>
        </DialogActions>
    </Dialog>
  )
}

export default AddDialog