import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setroom } from '../../store/store'
import { roomcreate } from '../realtimecommunication/socket-client'
import Rooms from './Rooms'
import { localstream } from '../realtimecommunication/webrtc'

function Sidebar() {
  const {activerooms}=useSelector(state=>state.room)
    const dispatch=useDispatch()
    
  const audioconstraints=useSelector(state=>state.room)?.audioonly
    const handleclick=()=>{
      const cb=()=>{
      dispatch(setroom())
      roomcreate()
      }
      localstream(audioconstraints,cb)
    }
    useEffect(()=>{},[activerooms])

    const Sidewrapper=styled('div')({
        width:'42px',
        height:'100%',
        backgroundColor:'green',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginLeft:'2px',
        gap:'10px'
    })
  return (
    <Sidewrapper>
        <Button style={{fontSize:"30px",color:'black'}}>
        <i class="fas fa-user-friends"></i>
        </Button>
        <Button style={{color:'black'}} onClick={handleclick}>
        <i style={{fontWeight:'100px',fontSize:'30px'}} class="fa-regular fa-plus"></i>
           </Button>
           {activerooms.map(room=>(<Rooms room={room}/>))}
    
    </Sidewrapper>
  )
}

export default Sidebar