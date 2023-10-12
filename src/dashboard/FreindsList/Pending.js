import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import Invitation from './Invitation'
import { useSelector } from 'react-redux'

function Pending() {
    const Maincontainer=styled('div')({
        width:'100%',
        height:'22%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    })
    const {pending}=useSelector(state=>state.invite)
    useEffect(()=>{
  },[pending])
     return (
    <Maincontainer>
        {pending.map((p)=>(<Invitation details={p}/>))}
    </Maincontainer>
  )
}

export default Pending