
import { Button } from '@mui/material'
import React from 'react'

function CustomButton({label,onclick,addstyle,disable}) {
    
  return (
    <Button sx={{
        backgroundColor:'white',
        fontSize:'14px',
        marginTop:'15px',
        fontWeight:'700',
        ":hover":{backgroundColor:'grey'}
    }} disabled={disable} onClick={onclick} style={addstyle?addstyle:{}}>{label}</Button>
  )
}

export default CustomButton