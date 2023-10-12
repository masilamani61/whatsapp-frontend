import React from 'react'
import CustomButton from '../shared/button'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

function RegisterFooter({isformvalid,hanleclick}) {
      const warning='you should provide correct email and password should contain minimum of 5 characters and username should contain minimum 5 characters'

  return (
    <>
    <Tooltip title={isformvalid?'proceed to sign up':warning} >
     <div>
        <CustomButton label='Sign Up' onclick={hanleclick} disable={!isformvalid}/>
    </div>
    </Tooltip>
    <div>
    <span style={{color:'white'}}>Already have a account?</span>
    <Link style={{textDecoration:'none'}} to='/login'> Login</Link>
    </div>

    </>
  )
}

export default RegisterFooter