import styled from '@emotion/styled'
import { Avatar, Typography } from '@mui/material'
import React from 'react'

function Message({value,id}) {
    let newdate=false
   
    const Wrapper=styled('div')({
        flexGrow:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        color:'white',
        marginTop:'5px',
        marginBottom:'5px',
        gap:'10px'
    })
    const Wrapper2=styled('div')({
        flexgrow:1,
        
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        fontSize:'25px',
        color:'blue',
        marginTop:'10px',
        marginBottom:'10px',
        gap:'10px'
    })
    let sameauthor=false
    if (value.author._id==id){
        sameauthor=true
    }
    const Messagetext=styled('div')({
      width:'50%',display:'flex',justifyContent:'flex-end',
      alignItems:'center',
      gap:'10px',
      paddingLeft:'10px'
    })
    
  return (
    <>
    { sameauthor?(
    <Wrapper>
     
    <Avatar>{value.author.username.slice(0,2)}</Avatar>
    <div style={{backgroundColor:'white',color:'black',padding:'5px 5px 5px 5px',border:'1px solid blue',borderRadius:'3px'}}>
    <Typography>{value.content}</Typography>
    </div>
    </Wrapper>):(<Wrapper2>
      <Messagetext>
      <div style={{backgroundColor:'white',color:'blue',padding:'5px 5px 5px 5px',border:'1px solid blue',borderRadius:'3px'}}>
    <Typography>{value.content}</Typography>
    
    </div>
    <Avatar>{value.author.username.slice(0,2)}</Avatar>
    </Messagetext>
    </Wrapper2>)}
    </>
  )
}

export default Message