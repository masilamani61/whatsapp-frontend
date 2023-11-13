import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Video({localstream,me}) {
    const Container=styled('div')(
        {
            height:'100%',
            width:'100%',
            margin:'auto'
        }
    )
    const Videotab=styled('video')(
        {
           height:'100%' ,
           width:'100%',
           border:'1px solid black',
           margin:'auto',
        }
    )
      
    const videoref=useRef()
    useEffect(()=>{
        const video=videoref.current
        if (video) 
        {
        video.srcObject=localstream
        video.onloadedmetadata=()=>{
            video.play()
        }
    }
    },[localstream])
   
    
  return (
    <Container>
        { localstream && (
            me?(
        <Videotab ref={videoref} autoPlay  muted />): <Videotab ref={videoref} autoPlay  />)
}
    </Container>
    
  )
  }

export default Video
