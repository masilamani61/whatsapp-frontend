import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../shared/button'
import { Button, Menu, cardClasses } from '@mui/material'
import { clearmessages, logout, setaudioenable } from '../../store/store'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Choosenlabel from './Choosenlabel'
function Appbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const audiomesage=useSelector(state=>state.room)?.audioonly
  const handleclick=()=>{
    dispatch(logout())
  
    dispatch(clearmessages())
    navigate('/login')
  }

    const Wraper=styled('div')({
        position:'absolute',
        top:'0',
        right:'0',
       
       width:'84.5%',
        height:'40px',
        backgroundColor:'green',
        
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    })
    const audio=()=>{
        
        dispatch(setaudioenable())
    }
   console.log(audiomesage)
  return (
    <Wraper>
      <Choosenlabel/>
      <div style={{
        display:'flex',
        gap:'20px',
        color:'black',
      }}>
      <Button style={{color:"black",
        fontSize:"20px"}} onClick={handleclick}>LogOut</Button>
      <Button style={{color:"black",
        fontSize:"20px"}} onClick={audio} >{audiomesage?"audio-video":"audio-only"}</Button>
      </div>
    </Wraper>
  )
}

export default Appbar