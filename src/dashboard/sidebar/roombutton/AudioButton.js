
import { Button } from '@mui/material'
import React, { useState } from 'react'

function AudioButton({localstream}) {
    const [audioenable,setaudioenable]=useState(true)
    const toogleaudio=()=>{
        localstream.getAudioTracks()[0].enable=!audioenable
        setaudioenable(!audioenable)
    }
  return (
    <Button onClick={toogleaudio}>
        {audioenable?<i class="fa-solid fa-microphone"></i>:<i class="fa-solid fa-microphone-slash"></i>}
    </Button>
  )
}

export default AudioButton