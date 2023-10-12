import { Avatar, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setchatdetails } from '../../store/store'

function Onefriend({frnddetails}) {
    const dispatch=useDispatch()
    
    const handleclick=()=>{
        dispatch(setchatdetails({chatdetails:{name:frnddetails.username,id:frnddetails.id},chattype:'ind'}))
    }
   
  return (
    <Button onClick={handleclick}
     sx={{
        width:'100%',
        height:'45px',
        display:'flex',
        justifyContent:'flex-start',
        marginTop:'5px',
        marginBottom:'5px'
    }}>
        <Avatar sx={{color:'blue'}}>
            {frnddetails.username.slice(0,2)}
        </Avatar>
        <Typography sx={{
            textTransform:'none',
            fontSize:'25px',
            color:'blue'
    }}>
            
            {frnddetails.username}
        </Typography>
        {frnddetails.online?<i style={{color:'black',marginLeft:'10px'}} class="fa-solid fa-circle"></i>:<></>}
    </Button>
  )
}

export default Onefriend