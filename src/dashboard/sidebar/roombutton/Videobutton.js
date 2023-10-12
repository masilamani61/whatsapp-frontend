import { Button } from '@mui/material'
import React, { useState } from 'react'

function Videobutton({localstream}) {
    const [videoenable,setvideoenable]=useState(true)
    const tooglecamera=()=>{
        localstream.getVideoTracks()[0].enabled=!videoenable
        setvideoenable(!videoenable)
    }
  return (
    <Button onClick={tooglecamera}>
        {videoenable?<i class="fa-solid fa-video"></i>:<i class="fa-solid fa-video-slash"></i>}
    </Button>
  )
}

export default Videobutton