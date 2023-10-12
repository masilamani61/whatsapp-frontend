import React, { useState } from 'react'
import { Button } from '@mui/material'
import AddDialog from './AddDialog'
function AddfrensButton(
) {
    const [open,setopen]=useState(false)
    const handleclick=()=>{
        setopen(true)
    }
    const handleclose=()=>{
        setopen(false)
    }
  return (
    <>
    <Button onClick={handleclick} style={{width:'50%',height:'40px',color:"white",backgroundColor:'green',marginTop:'20px'}}>Add Friends</Button>
    <AddDialog open={open} handleclose={handleclose}/>
    </>
  )
}

export default AddfrensButton