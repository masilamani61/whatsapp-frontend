import styled from '@emotion/styled'
import { AlertTitle, Typography } from '@mui/material'
import React from 'react'

function Friendtitle({title}) {
   
  return (
    <Typography sx={{marginTop:'10px',width:'100%',borderBottom:'1px solid blue',display:'flex',flexDirection:'column',alignItems:'center'}}>{title}</Typography>
  )
}

export default Friendtitle