import React from 'react'
import CustomButton from '../shared/button'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'

function Loginfooter({isformvalid,handlelogin}) {
    const warning='you should provide correct email and password should contain minimum of 5 characters'
  return (
    <>
    <Tooltip title={isformvalid?'procced to login':warning}>
    <div>
        <CustomButton label='Login' onclick={handlelogin} disable={!isformvalid} />
        
    </div>
    </Tooltip>
    <div>
    <span style={{color:'white'}}>need an account?</span>
    <Link style={{textDecoration:'none'}} to='/register'> Register Here</Link>
    </div>
    </>
  )
}

export default Loginfooter