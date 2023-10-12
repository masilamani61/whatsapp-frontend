import { Avatar, Button } from '@mui/material'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import styled from '@emotion/styled'
import Input from './Input'
import { renderinitialchat } from '../realtimecommunication/socket-client'
import { setchatdetails } from '../../store/store'
import { useRef } from 'react'

function MessageContent({chatdetails}) {
    const name=chatdetails?.name
    const Wrapper=styled('div')({
        height:'150vh',
        overflow:'scroll',
        overflowX:'hidden',
        overflowY:'visible',
        scrollBehavior:'smooth',
        width:'100%'
    })
    const {messages}=useSelector(state=>state.chat)
    console.log(chatdetails)
    const mesagesref=useRef(null)
    const scrolltobotom=()=>{
      mesagesref.current?.scrollIntoView({behaviour:'smooth'})
    }
    useMemo(()=>{
      scrolltobotom()
      renderinitialchat({recieverid:chatdetails?.id})}
    ,[chatdetails])
   
    
   
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',width:'96%'}}>
    <div style={{display:'flex',flexDirection:'column',marginTop:'30px'}}>
    <Avatar sx={{fontSize:'40px',width:'90px',height:'90px'}}>{name?.slice(0,3)}</Avatar>
    <h1 style={{color:'white'}}>{name?name:''}</h1>
    </div >
  
    <Wrapper ref={mesagesref}>
    {messages?.map(m=>(
        <Message value={m} id={chatdetails.id}/>
    ))}
    </Wrapper>
    <div >
      
    <Input />
  
  
    </div>
    </div>
    </>
  )
}

export default MessageContent