import React from 'react'
import Videobutton from './Videobutton'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import AudioButton from './AudioButton'

function Roombutton() {
    const Wrapper=styled('div')({
        display:'flex',
        flexGrow:1,
        backgroundColor:'blue',
        color:'white',
        
    })
    const {localstream}=useSelector(state=>state.room)
  return (
    <Wrapper><Videobutton localstream={localstream}/>
    <AudioButton localstream={localstream}/></Wrapper>
  )
}

export default Roombutton