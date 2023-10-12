import styled from '@emotion/styled'
import React from 'react'
import CustomButton from '../../shared/button'
import { Button } from '@mui/material'
import Friendtitle from './Friendtitle'
import Friends from './Friends'
import Pending from './Pending'
import AddfrensButton from './Addfriend/AddfrensButton'

function Freindlist() {
    const handleclick=()=>{}
    const Wraper=styled('div')({
        width:'244px',
        height:'100%',
        backgroundColor:'bisque',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    })
  return (
    <Wraper>
      <div style={{color:'black',display:'flex',gap:'10px',marginTop:'10px'}}><i style={{fontSize:'30px'}} class="fa-brands fa-whatsapp"></i> <h3>WhatsApp </h3></div>
        <AddfrensButton/>
         <Friendtitle title='private messages'/>
        <Friends/>
        <Friendtitle title='invitations'/>
        <Pending/>
    </Wraper>
  )
}

export default Freindlist