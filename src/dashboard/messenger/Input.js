import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { sendmessage } from '../realtimecommunication/socket-client'

function Input() {
    const messageref=useRef()
    const {chatdetails}=useSelector(state=>state.chat)
 

    const handleclick=()=>{
        const messgae=messageref.current.value
        if (messgae.length>0){
            const data={content:messgae,sendto:chatdetails?.id}
            sendmessage(data)
        }
   }

 
    const Wrapper=styled('div')({
        margin:'auto',
        width:'100%',
        display:'flex',
        alignItems:'center',
        gap:'20px'

    })
    const Inputtext=styled('input')({
        
        width:"60%",
        display:'flex',
        alignItems:'center',
        fontSize:'25px',
        fontFamily:'sans-serif',
        height:"45px"
    })
      
  return (
    <Wrapper>
        <Inputtext ref={messageref}  placeholder={`enter message to ${chatdetails?.name}`}/>
        <Button onClick={handleclick}>Send</Button>
    </Wrapper>
  )
}

export default Input