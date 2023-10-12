import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Choosenlabel() {
    const {chatdetails}=useSelector(state=>state.chat)
    const name=chatdetails?.name
  return (
    <Typography sx={{fontSize:'25px',color:'black',marginLeft:'16px',fontFamily:"sans-serif"}}>
        {name?name:''}
    </Typography>
  )
}

export default Choosenlabel