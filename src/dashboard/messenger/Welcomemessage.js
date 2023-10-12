import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function Welcomemessage() {
    const Wrapper=styled('div')({
        flexGrow:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    })
  return (
    <Wrapper>
        <Typography sx={{fontSize:'25px',color:'white'}}>
            tap on the chat to start conversation
        </Typography>
    </Wrapper>
  )
}

export default Welcomemessage