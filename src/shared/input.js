import React from 'react'
import { styled } from '@mui/material'

const Wrapper=styled('div')({
    display:'flex',
    flexDirection:'column',
    marginBottom:'10px'
})

const Label=styled('label')(({
    color:'white',
    fontSize:'20px',
    fontFamily:'sans-serif'
}))

const Input=styled('input')({
    border:'3px solid blue',
    borderRadius:'4px'

})

function Inputlabel(props) {
    const {value,setvalue,type,label,placeholder}=props
    const handelchange=(e)=>{
        setvalue(e.target.value)
    }
  return (
    <Wrapper>
        <Label >
            {label}
        </Label>
        <Input value={value} onChange={handelchange} type={type} placeholder={placeholder}>
        </Input>
    </Wrapper>
  )
}

export default Inputlabel