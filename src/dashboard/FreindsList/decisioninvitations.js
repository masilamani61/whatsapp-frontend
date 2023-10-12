import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openalert } from '../../store/store'

function Desision({ivitationdetails}) {
    
    const user=localStorage.getItem('user')
    const dispatch=useDispatch()
    const token=JSON.parse(user)?.token
    console.log(token)
    console.log(ivitationdetails)
    const handleaccept=()=>{
        try{
            axios.put('https://whatsapp-backend-6neq.onrender.com/api/friendinvitation/accept',{id:ivitationdetails._id,token},{headers:{'authorization':token}})
            .then(r=>{
                console.log(r)
                
                dispatch(openalert('invitation accepted'))
            }).catch((err)=>{
                dispatch(openalert(err.message))
                console.log(err)
            })

        }
        catch(err){
            console.log(err)
        }
    }
    const handlereject=()=>{
        try{
            axios.delete('https://whatsapp-backend-6neq.onrender.com/api/friendinvitation/reject',{headers:{'authorization':token},data:{id:ivitationdetails._id}})
            .then(r=>{
                console.log(r)
                dispatch(openalert('invitation rejected'))
            }).catch((err)=>{
                dispatch(openalert(err.message))
                console.log(err)
            })

        }
        catch(err){
            console.log(err)
        }
   
    }
  return (
    <>
   <div style={{display:'flex',justifyContent:'space-between'}}>

    <Button onClick={handleaccept}><i class="fa-solid fa-check"></i></Button>
   
   
    <Button onClick={handlereject}><i class="fa-solid fa-xmark"></i></Button>
   </div>
    </>
  )
}

export default Desision