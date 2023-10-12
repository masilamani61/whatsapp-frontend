import { Avatar, Button, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Desision from './decisioninvitations'

function Invitation({details}) {
  console.log(details)
  const username=details?.senderid?.username
  const email=details?.senderid?.email
  return (
    <>
    <Tooltip title={email}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5px',marginBottom:'5px'}}>
        <Avatar>{username.slice(0,2)}</Avatar>
   <Typography sx={{textAlign:"center"}}>
    {username}
   </Typography>
   <Desision ivitationdetails={details}/>
   </div>
   </Tooltip>
   </>
  )
}

export default Invitation