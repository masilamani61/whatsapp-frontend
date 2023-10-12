import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Video({localstream}) {
    const Container=styled('div')(
        {
            height:'100%',
            width:'100%'
        }
    )
    const Videotab=styled('video')(
        {
           height:'100%' ,
           width:'100%'
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
        <Videotab ref={videoref} autoPlay   />)
}
    </Container>
    
  )
  }

export default Video