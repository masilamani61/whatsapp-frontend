import { Avatar, Button, Tooltip } from '@mui/material'
import React from 'react'
import { joinroom } from '../realtimecommunication/socket-client'
import { useDispatch, useSelector } from 'react-redux'
import { createroom, setroom } from '../../store/store'
import { localstream } from '../realtimecommunication/webrtc'

function Rooms({room}) {
  const audioconstraints=useSelector(state=>state.room)?.audioonly
  const dispatch=useDispatch()
const handleclick=()=>{
  const cb=()=>{
  joinroom(room?.room?.roomid)
dispatch(setroom())
dispatch(createroom(room))
  }
localstream(audioconstraints,cb)
}

    const isuserinromm=false
    const diable=room.room.participants.length<3 || isuserinromm  ?true:false
    
    const roomhistory=`room is craeted by ${room.creator} and connected:${room.room.participants.length}`
  return (
    <Button disable={diable} onClick={handleclick}>
    <div>
      <Tooltip title={roomhistory}>
      <Avatar>
        {room.creator.slice(0,3)}
      </Avatar>
      </Tooltip>
    </div>
    </Button>
  )
}

export default Rooms